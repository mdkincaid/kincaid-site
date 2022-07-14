import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

import { HelloDialogComponent } from './hello-dialog/hello-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isDevEnv: boolean = true;

  constructor( public dialog: MatDialog ) {}

  ngOnInit(): void {
    if (environment.production) {
      this.isDevEnv = false;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(HelloDialogComponent, {
      width: '500px'
    });
  }
}
