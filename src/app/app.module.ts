import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import {
	FaIconLibrary,
	FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
		FontAwesomeModule,
		MaterialModule,
	],
	providers: [{ provide: MatDialogRef, useValue: {} }, Title],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(library: FaIconLibrary) {
		library.addIcons(faLinkedin, faGithub);
	}
}
