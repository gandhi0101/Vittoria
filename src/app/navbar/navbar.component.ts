import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router, private afAtth: AngularFireAuth) {}

  reLogin(){
    this.router.navigate(['/login']);
  }

  logOut(){
    this.afAtth.signOut()
  .then(() => {
    // El usuario ha cerrado sesión exitosamente
  })
  .catch((error) => {
    // Ocurrió un error al cerrar sesión
  });
  }
}
