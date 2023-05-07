import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { CitasService } from '../citas.service';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent {

  clientes: Cliente[];

  constructor(private clientesService: CitasService) {
    this.clientes = this.clientesService.getClientes();
   }

}
