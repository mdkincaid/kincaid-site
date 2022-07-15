import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSlideToggle, MatSlideToggleRequiredValidator } from '@angular/material/slide-toggle';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { ThemeService } from './shared/services/theme.service';

xdescribe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let componentDebug: DebugElement;
  let themeService: ThemeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    componentDebug = fixture.debugElement;
    themeService = TestBed.inject(ThemeService);
    fixture.detectChanges();

    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should open dialog when user clicks button', () => {
    const openDialogSpy = spyOn(component.dialog, 'open');

    component.openDialog();

    expect(openDialogSpy).toHaveBeenCalled();
  });

  it('should toggle site theme when theme toggle is clicked', () => {
    const slideToggle = componentDebug.query(By.directive(MatSlideToggle));
    spyOn(component, 'toggleDarkMode');

    slideToggle.triggerEventHandler('toggleChange', null);

    expect(component.toggleDarkMode).toHaveBeenCalled();
  });

  it('toggle to dark mode', () => {
    spyOn(themeService, 'update').and.callThrough();
    spyOn(themeService, 'isDarkMode').and.callThrough();

    component.toggleDarkMode();

    expect(themeService.isDarkMode).toHaveBeenCalled();
    expect(themeService.update).toHaveBeenCalledWith('dark-mode');
  });

  it('toggle to light mode', () => {
    spyOn(themeService, 'update').and.callThrough();
    spyOn(themeService, 'isDarkMode').and.callThrough();

    component.toggleDarkMode();

    expect(themeService.isDarkMode).toHaveBeenCalled();
    expect(themeService.update).toHaveBeenCalledWith('light-mode');
  });
});
