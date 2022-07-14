import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../shared/material.module';

import { HelloDialogComponent } from './hello-dialog.component';

describe('HelloDialogComponent', () => {
  let component: HelloDialogComponent;
  let fixture: ComponentFixture<HelloDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [ HelloDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
