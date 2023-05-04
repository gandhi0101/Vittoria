import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './footer/search/search.component';
import { ChatComponent } from './chat/chat.component';
import { SliderComponent } from './slider/slider.component';
import { ContactComponent } from './contact/contact.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CitasService } from './citas.service';
import { SliderhComponent } from './header/sliderh/sliderh.component';
import { AyudaComponent } from './ayuda/ayuda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ChatComponent,
    SliderComponent,
    ContactComponent,
    WhyUsComponent,
    NavbarComponent,
    HomeComponent,
    ReservationComponent,
    SliderhComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CitasService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
