import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'

import { HelloDialogComponent } from './hello-dialog/hello-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isDevEnv = true;
  
  private _dialog: MatDialog;
  private _dialogRef: MatDialogRef<HelloDialogComponent>;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<HelloDialogComponent>
  ) {
    this._dialog = dialog;
    this._dialogRef = dialogRef;
  }

  public ngOnInit(): void {
    if (environment.production) {
      this.isDevEnv = false;
    }
  }

  public openDialog(): void {
    this._dialogRef = this.dialog.open(HelloDialogComponent, {
      width: '500px'
    });
  }
}
