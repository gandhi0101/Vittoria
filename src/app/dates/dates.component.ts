import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { CitasService } from '../citas.service';
import { CitaService } from '../cita.service';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  displayedColumns = ['Nombre', 'Correo', 'Fecha', 'Hora', 'Personas', 'Edad', 'Sexo'];
  dataSource:Cliente[]=[];
  tam: string = '';

  clientes: Cliente[]=[];
  

 

  constructor(private clientesService: CitasService,private clientSer: CitaService) {

  }

  ngOnInit(): void {
    this.clientSer.getCliente().subscribe(cliente=>{
      this.clientes = cliente;
      this.dataSource = cliente;
    })
}

  retornarTam(){
    if(this.clientes.length <= 3){
      return this.tam = "200px";
    }else if(this.clientes.length >=4 && this.clientes.length <=8 ){
     return  this.tam = "400px";
    }else{
     return this.tam ="600px";
    }
  }

}
