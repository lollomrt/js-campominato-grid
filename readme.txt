L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

1 - Creao la struttura html
    1.1 - Creo il bottone
    1.2 Creo il contenitore della griglia
2 - Creo la funzione che mi genera il div e mi applica la   classe "square".
3 - Creo la funzione che mi genera 100 numeri consequenziali e mai ripetuti
4 - Creo il listener sul click del pulsante

--> AL SUO INTERNO

5 - Creo un ciclo for per la reiterazione della generazione dei div
    5.1 - inizializzo il ciclo da 1, lo termino a 100 ed incremento di 1
    5.2 - creo una variabile quadrato e gli assegno il valore return della funzione
    5.3 - Definisco la variabile griglia fuori dal for
    5.4 - Inietto l'html generato dalla funzione nella griglia con .appendChild (Perchè innerHTML non funziona?)
