import { Component } from '@angular/core';
import { Menu, MenuService } from '../menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public Menu: MenuService) {}
}
