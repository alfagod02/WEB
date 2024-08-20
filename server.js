require('dotenv').config(); // Carica le variabili d'ambiente

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Importa il modello Message
const Message = require('./models/message');

// Connessione a MongoDB
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error('MONGO_URI non è definito nel file .env');
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => console.log('Connesso a MongoDB'))
  .catch((err) => console.error('Errore di connessione a MongoDB', err));

// Middleware per il parsing del corpo delle richieste
app.use(express.json());

// Route per salvare un messaggio
app.post('/message', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Il campo "text" è obbligatorio' });
    }

    const newMessage = new Message({ text });
    await newMessage.save();

    res.status(201).json({ message: 'Messaggio salvato con successo', data: newMessage });
  } catch (err) {
    res.status(500).json({ error: 'Errore nel salvataggio del messaggio', details: err.message });
  }
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});

app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find(); // Recupera tutti i messaggi dal database
    res.json(messages); // Invia i messaggi come risposta JSON
  } catch (err) {
    res.status(500).json({ error: 'Errore durante il recupero dei messaggi' });
  }
});

