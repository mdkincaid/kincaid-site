import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { HelloDialogComponent } from './hello-dialog/hello-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor( public dialog: MatDialog ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(HelloDialogComponent, {
      width: '500px'
    });
  }
}
