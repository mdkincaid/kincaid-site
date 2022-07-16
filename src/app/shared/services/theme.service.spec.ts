import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
	let service: ThemeService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ThemeService);

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
		service.initTheme();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should be set to light mode when first initialized', () => {
		expect(service.isDarkMode()).toBeFalse();
	});

	it('should remember theme when initalizaing after updating theme', () => {
		service.update('light-mode');
		service.initTheme();

		expect(service.isDarkMode()).toBeFalse();
	});

	it('should set theme to dark-mode when passing dark-mode into update', () => {
		service.update('dark-mode');

		expect(service.isDarkMode()).toBeTrue();
	});
});
