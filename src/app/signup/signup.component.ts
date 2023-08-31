import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private dialogRef: MatDialogRef<SignupComponent>){

  }
  
  onSubmit(): void {
    this.dialogRef.close();
  }

}
