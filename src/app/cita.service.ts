import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Cliente } from './cliente';
import { collection, addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private firestore: Firestore) { }

  addCliente(cliente: Cliente){
    const clienteRef = collection(this.firestore, 'citas');
    return addDoc(clienteRef, cliente);
  }

}
