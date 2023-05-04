import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sliderh',
  templateUrl: './sliderh.component.html',
  styleUrls: ['./sliderh.component.scss']
})
export class SliderhComponent {
  @ViewChild('sliderContainer', { static: true }) sliderContainer!: ElementRef;
  currentIndex = 0;

  constructor() {
    setInterval(() => this.nextSlide(), 400);
  }

  nextSlide() {
    const images = this.sliderContainer.nativeElement.querySelectorAll('img');
    images[this.currentIndex].style.transform = 'none';
    this.currentIndex = (this.currentIndex + 1) % images.length;
    images[this.currentIndex].style.transform = 'none';
  }
  

  
}
