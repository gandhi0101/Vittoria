import { Injectable } from '@angular/core';
import { Firestore, collectionData  } from '@angular/fire/firestore';
import { Cliente } from './cliente';
import { collection, addDoc} from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private firestore: Firestore) { }

  addCliente(cliente: Cliente){
    const clienteRef = collection(this.firestore, 'citas');
    return addDoc(clienteRef, cliente);
  }

  getCliente(): Observable<Cliente[]>{
    const clienteRef = collection(this.firestore, 'citas');
    return collectionData(clienteRef, {idField: 'UID'}) as Observable<Cliente[]>
    }

}
