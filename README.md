ORDINE COMANDI GIT

COME INVIARE LE TUE MODIFICHE:
1)dopo aver modificato i file fare git add .
2)git commit -m "messaggio per far capire che cazzo hai fatto e quando"
3)git push origin tuo-branch
ora tutti possiamo vedere dentro gitHub le modifiche che hai fatto ma saranno solo sul tuo branch

COME AGGIORNARE IL MAIN:
1)dopo gli step precedenti fare git checkout main
2)git pull origin Branch Su Quale Hai Lavorato (il tuo di base)
3)git push 
ora il main è aggiornato

COME AGGIORNARE TUO BRANCH DAL MAIN:
1)git checkout tuo-branch
2)git pull origin main (oppure il branch più aggiornato, nel caso in cui qualcuno si sia scordato di modificare il main)
e si dovrebbe essere aggiornato
