import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HelloDialogComponent } from './hello-dialog/hello-dialog.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
	declarations: [AppComponent, HelloDialogComponent],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		FormsModule,
		MaterialModule,
	],
	providers: [{ provide: MatDialogRef, useValue: {} }],
	bootstrap: [AppComponent],
})
export class AppModule {}
