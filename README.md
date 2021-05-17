# FlightTracker

## Nota
Il progetto è ancora in fase di sviluppo.

## Descrizione
FlightsTracker è un progetto per il corso di "Linguaggi e Tecnologie per il Web" ideato e creato da Musciaglia Marco e Lorenzo Magni.
Il sito, hostato in locale, serve principalmente per monitorare il traffico aereo di simulatori di volo attualmente in uso.
Tutti i dati vengono presi e decodificati da [Vatsim](https://www.vatsim.net/) per poi utilizzarli all'interno del sito.

## Inizializzazione
* Per avere il corretto funzionamento del sito è necessario aver installato nel sistema XAMPP, scaricabile qui [Download](https://www.apachefriends.org/it/download.html),
esso garantirà il corretto funzionamento del server Apache e del database MySQL.

* Dopo l'installazione di XAMPP e il download della repository è necessario spostare quest'ultimo all'interno del path C:\xampp\htdocs per il corretto funzionamento del lato server PHP.

* Dopo ciò si procede a far partire sia il server Apache che il database mySQL, tramite l'apposito pannello di controllo di XAMPP, bisognerà andare tramite browser nel seguente link : 
    http://localhost/phpmyadmin/

* Nella barra superiore scegliere in sequenza :
    'Import', 'Choose File', '[tracker.sql](tracker.sql)'.
  file che si troverà all'interno della repository.

* Fatto questo basterà andare nel seguente link di accesso al sito http://localhost/FlightsTracker/login.html
e mettere le seguenti credenziali per avere il totale accesso alle funzionalità :
   ```sh
    Username: ltw  
    Password: ltw
   ```

* Sarà disponibile anche una versione ospite del sito con minori funzionalità cliccando su 'Salta il login' nella schermata iniziale.

## Autori
* **Musciaglia Marco** - musciaglia.1816864@studenti.uniroma1.it - [GitHub](https://github.com/Loldlink)

* **Lorenzo Magni** - magni.1872113@studenti.uniroma1.it - [GitHub](https://github.com/Lolloilpazzo)

## Link utili:

* [Visual Studio Code](https://code.visualstudio.com/)

* [Xampp](https://www.apachefriends.org/it/download.html)

* [Leaflet](https://leafletjs.com/)

* [Vatsim](https://www.vatsim.net/) 