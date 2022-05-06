import { Injectable } from '@angular/core';
import { ToDoModel } from '../interface/to-do-model';

let listaDaFareHost: ToDoModel[] = [];
let listaFattiHost: ToDoModel[] = [];

 
export function aggiungiHost(task: ToDoModel){
  listaDaFareHost.push(task);
  return listaDaFareHost
};

export function recuperaHost(){
  return listaDaFareHost
};

export function aggiungiFattoHost(task: ToDoModel){
  listaFattiHost.push(task)
}

export function recuperaFattiHost(){
  return listaFattiHost
}



