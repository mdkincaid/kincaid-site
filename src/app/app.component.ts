import { Component, isDevMode, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'

import { HelloDialogComponent } from './hello-dialog/hello-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isDevEnv = false;
  
  private _dialog: MatDialog;
  private _dialogRef: MatDialogRef<HelloDialogComponent>;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<HelloDialogComponent>,
  ) {
    this._dialog = dialog;
    this._dialogRef = dialogRef;
  }

  public ngOnInit(): void {
    if (isDevMode()) {
      this.isDevEnv = true;
    }
  }

  public openDialog(): void {
    this._dialogRef = this.dialog.open(HelloDialogComponent, {
      width: '500px'
    });
  }
}
