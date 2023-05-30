import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { CitasService } from '../citas.service';
import { CitaService } from '../cita.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss'],
})
export class DatesComponent implements OnInit {
  displayedColumns = [
    'Nombre',
    'Correo',
    'Fecha',
    'Hora',
    'Personas',
    'Edad',
    'Sexo',
    'a',
  ];
  dataSource: Cliente[] = [];
  tam: string = '';

  clientes: Cliente[] = [];
  citaCliente:Cliente[]=[];

  constructor(
    private clientesService: CitasService,
    private clientSer: CitaService,
    private afAtth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.clientSer.getCliente().subscribe((cliente) => {
      this.clientes = cliente;
      var i=0;
      cliente.forEach((element:Cliente)=>{
        this.afAtth.authState.subscribe((user)=>{
          console.log(element.clave+' ' +user?.uid);
          
        if(element.clave===user?.uid){
          this.citaCliente[i]=element;
          i++;
        }
        console.log(this.citaCliente)
      });
      })
    });
  
  }

  async onClickDelete(cliente: Cliente) {
    const response = await this.clientSer.deleteCliente(cliente);
    console.log(response)
  }

  retornarTam() {
    if (this.clientes.length <= 3) {
      return (this.tam = '200px');
    } else if (this.clientes.length >= 4 && this.clientes.length <= 8) {
      return (this.tam = '400px');
    } else {
      return (this.tam = '600px');
    }
  }
}
