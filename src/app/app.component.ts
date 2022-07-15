import { Component, isDevMode, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'

import { HelloDialogComponent } from './hello-dialog/hello-dialog.component';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isDevEnv = false;
  public isDarkMode: boolean;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<HelloDialogComponent>,
    public themeService: ThemeService
  ) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  public ngOnInit(): void {
    if (isDevMode()) {
      this.isDevEnv = true;
    }
  }

  public openDialog(): void {
    this.dialogRef = this.dialog.open(HelloDialogComponent, {
      width: '500px'
    });
  }

  public toggleDarkMode(): void {
    this.isDarkMode = this.themeService.isDarkMode();
    this.isDarkMode ? this.themeService.update('light-mode') : this.themeService.update('dark-mode');
  }
}
