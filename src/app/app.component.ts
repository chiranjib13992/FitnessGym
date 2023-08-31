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
  constructor(private dialogService: DialogService){

  }

  ngOnInit(): void {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true 
      }
      
    });
  }
  openModal(){
    this.dialogService.openSignUpDialog();
  }
}
