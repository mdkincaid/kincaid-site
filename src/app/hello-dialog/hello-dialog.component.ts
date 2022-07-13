import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hello-dialog',
  templateUrl: './hello-dialog.component.html',
  styleUrls: ['./hello-dialog.component.scss']
})
export class HelloDialogComponent  {

  constructor( public dialogRef: MatDialogRef<HelloDialogComponent> ) { }
  
}
