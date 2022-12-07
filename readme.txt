L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

1 - Creao la struttura html
    1.1 - Creo il bottone
    1.2 Creo il contenitore della griglia
2 - Creo la funzione che mi genera il div e mi applica la   classe "square".
3 - Creo il listener sul click del pulsante

--> AL SUO INTERNO

4 - Creo un ciclo for per la reiterazione della generazione dei div
    4.1 - inizializzo il ciclo da 1, lo termino a 100 ed incremento di 1
    4.2 - creo una variabile quadrato e gli assegno il valore return della funzione
    4.3 - Definisco la variabile griglia fuori dal for
    4.4 - Inietto l'html generato dalla funzione nella griglia con .appendChild
    4.5 - Inserisco un nuovo evento click nel quadrtato che mi dia come risultato un console log che restituisca l'inner.text del div

BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
