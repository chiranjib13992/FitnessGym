import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'FitnessGym';
  images: string[] = ['','',''];
  currentIndex: number = 0;
  constructor(private dialogService: DialogService){

  }

  ngOnInit(): void {
    this.startAutoSlider();
  }
  openModal(){
    this.dialogService.openSignUpDialog();
  }
  startAutoSlider() {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  changeSlide(index: number) {
    this.currentIndex = index;
  }
}
