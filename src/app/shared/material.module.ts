import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

const materialModules = [
	MatButtonModule,
	MatCardModule,
	MatDialogModule,
	MatDividerModule,
	MatIconModule,
	MatListModule,
	MatSlideToggleModule,
	MatToolbarModule,
	MatTooltipModule,
];

@NgModule({
	declarations: [],
	imports: [...materialModules],
	exports: [...materialModules],
})
export class MaterialModule {}
