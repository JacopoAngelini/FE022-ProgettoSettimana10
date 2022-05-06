import { Component, OnInit } from '@angular/core';
import { ToDoModel } from 'src/app/interface/to-do-model';
import * as HostService from '../../service/host.service';


@Component({
  templateUrl: './da-completare.component.html',
  styleUrls: ['./da-completare.component.scss']
})
export class DaCompletareComponent implements OnInit {



  listaDaFare: ToDoModel[] = [];
  cosaDaAggiungere: string = ''; // ho inizializzato le variabili da utilizzare
  i = 0;
  caricamento = true;
  vuoto = false;
  pieno = false;


  /* visualizza un caricamento per 2 sec, recupera la lista dal service di appoggio tramite funzione poi se nella variabile di appoggio era presente qualcosa popola la lista e la visualizza altrimenti visualizza messaggio di lista vuota*/

  constructor() {
    setTimeout(() => {
      this.caricamento = false;
      this.listaDaFare = HostService.recuperaHost();
      if (this.listaDaFare.length != 0) {
        this.pieno = true
      }
      else {
        this.vuoto = true
      }
    }, 2000);
  }

  /*click sul bottone richiama questa funzione che controlla se si è veramente inserito qualcosa nell'input. se si usa task come oggetto di appoggio per pushare il task all'interno della lista da visualizzare e contemporaneamente aggiorna la lista nel service. l'id non viene mai azzerato per avere sempre id univoci*/

  aggiungi(cosaDaAggiungere: string): void {
    if (cosaDaAggiungere == '') {
      alert('riempi il campo');
    }
    setTimeout(() => {
      if (cosaDaAggiungere != '') {
        this.vuoto = false;
        this.pieno = true;

        let task: ToDoModel = {
          id: this.i,
          title: cosaDaAggiungere,
          completed: false
        };

        this.listaDaFare = HostService.aggiungiHost(task);
        this.i++;
      }
    }, 2000);


  }

  /* ogni volta che si clicca sull'input cancella quello scritto in precedenza, per comodità */

  reset(event: any): void {
    event.target.value = '';
  }

  /* click sul pulsante verde di ogni task aggiunto richiama questa funzione che serve ad aggiungere il task in esame nella lista dei task completati del service e lo cancella da quelli da completare */
  completato(index: number): void {
    setTimeout(() => {
      HostService.aggiungiFattoHost(this.listaDaFare[index]);

      (this.listaDaFare).splice(index, 1);
      if (this.listaDaFare.length == 0) {
        this.pieno = false;
        this.vuoto = true;
      };
    }, 2000);

  }



  ngOnInit(): void { }

}
