import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { HelloDialogComponent } from './hello-dialog.component';

describe('HelloDialogComponent', () => {
  let component: HelloDialogComponent;
  let fixture: ComponentFixture<HelloDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      declarations: [ HelloDialogComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
      ]
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
