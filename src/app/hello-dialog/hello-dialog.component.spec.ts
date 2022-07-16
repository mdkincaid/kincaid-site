import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloDialogComponent } from './hello-dialog.component';
import { MaterialModule } from '../shared/material.module';

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
