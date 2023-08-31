import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from './signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  openSignUpDialog(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '300px' 
    });
  }
}
