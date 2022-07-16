import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { NgModule } from '@angular/core';

const materialModules = [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule
];

@NgModule({
    declarations: [],
    imports: [...materialModules],
    exports: [...materialModules]
})
export class MaterialModule { }