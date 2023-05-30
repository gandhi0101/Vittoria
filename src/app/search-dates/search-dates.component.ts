import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { CitasService } from '../citas.service';
import { CitaService } from '../cita.service';
@Component({
  selector: 'app-search-dates',
  templateUrl: './search-dates.component.html',
  styleUrls: ['./search-dates.component.scss']
})
export class SearchDatesComponent {

  clientes:Cliente[]=[];
  index:number=-1;
  datos!: Cliente;
  mensaje:string="";

  constructor(public servicio: CitaService){
    this.servicio.getCliente().subscribe(cliente=>{
      this.clientes = cliente;
    })
  }


  
  ver(aux:string){
    this.index = this.clientes.findIndex( p => p.nombre === aux);
    console.log(this.index);
    if(this.index !== -1 ){
      this.datos = this.clientes[this.index];
    }else{
      this.mensaje="El cliente no existe";
      setTimeout(() =>{
        this.mensaje="";
      },2000);
    }

  }

}
