import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

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
	providers: [{ provide: MatDialogRef, useValue: {} }, Title],
	bootstrap: [AppComponent],
})
export class AppModule {}
