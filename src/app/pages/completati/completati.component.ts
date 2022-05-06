import { Component, OnInit} from '@angular/core';
import { ToDoModel } from 'src/app/interface/to-do-model';
import * as HostService from '../../service/host.service';


@Component({
  selector: 'app-completati', 
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
  
  caricamento = true;
  vuoto = false;                 //inizializzazione variabili di appoggio
  pieno = false; 
  listaFatti: ToDoModel[] = [];


   /* fa la stessa cosa di quella nella pagina dei task da completare solo che popola l'array di quelli completati con l'array del service, precedentemente popolato con la funzione 'completato' in da-completare.ts*/ 

  constructor() {
    setTimeout(() => {
      this.caricamento = false;
      this.listaFatti = HostService.recuperaFattiHost(); 
      if (this.listaFatti.length != 0){
        this.pieno = true
      }
      else {
        this.vuoto = true
      }
    }, 2000);
  };





 

  

  ngOnInit(): void {
  
  }

}