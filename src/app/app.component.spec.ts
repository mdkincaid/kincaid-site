import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { ThemeService } from './shared/services/theme.service';

describe('AppComponent', () => {
	let fixture: ComponentFixture<AppComponent>;
	let component: AppComponent;
	let themeService: ThemeService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, MaterialModule],
			declarations: [AppComponent],
			providers: [{ provide: MatDialogRef, useValue: {} }],
		}).compileComponents();

		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		themeService = TestBed.inject(ThemeService);
		fixture.detectChanges();

		// eslint-disable-next-line
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
			},
		};

		spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
		spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
		spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
		spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);

		localStorage.clear();
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
		expect(component.isDarkMode).toBeFalse();
	});

	it('should open dialog when user clicks button', () => {
		const openDialogSpy = spyOn(component.dialog, 'open');

		component.openDialog();

		expect(openDialogSpy).toHaveBeenCalled();
	});

	it('should toggle from light mode to dark mode', () => {
		spyOn(themeService, 'update');
		spyOn(themeService, 'isDarkMode').and.returnValue(false);

		component.toggleDarkMode();

		expect(themeService.isDarkMode).toHaveBeenCalled();
		expect(themeService.update).toHaveBeenCalledWith('dark-mode');
	});

	it('should toggle from dark mode to light mode', () => {
		spyOn(themeService, 'update');
		spyOn(themeService, 'isDarkMode').and.returnValue(true);

		component.toggleDarkMode();

		expect(themeService.isDarkMode).toHaveBeenCalled();
		expect(themeService.update).toHaveBeenCalledWith('light-mode');
	});
});
