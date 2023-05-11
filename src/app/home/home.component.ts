import { Component } from '@angular/core';
import { Menu, MenuService } from '../menu.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  url="https://my-json-server.typicode.com/juanMa281/api1/db";
  httpData: any;
  array:any[]=[];
  
  
  constructor(private httpclient:HttpClient){
    this.httpclient.get(this.url).subscribe( data => {
      this.httpData=data;
      console.log(this.httpData);
      this.array=this.httpData.menu;
      console.log(this.array);
    });
  }
}