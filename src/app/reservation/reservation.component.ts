import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
    let date: Date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth();
    let anio = date.getFullYear();
    
    console.log(date.getFullYear() + "-" +  + "-" + date.getDate());
  }



}
