import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { NgModule } from '@angular/core';

const materialModules = [
	MatButtonModule,
	MatDialogModule,
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
