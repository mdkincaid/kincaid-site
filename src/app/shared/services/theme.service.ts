import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _colorTheme: string;
  private _renderer: Renderer2;

  constructor(
    rendererFactory: RendererFactory2
  ) {
    this._renderer = rendererFactory.createRenderer(null, null);
  }

  public initTheme(): void {
    this.getColorTheme();
    this._renderer.addClass(document.body, this._colorTheme)
  }

  public update(theme: 'dark-mode' | 'light-mode'): void {
    this.setColorTheme(theme);
    const previousColorTheme = theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this._renderer.removeClass(document.body, previousColorTheme);
    this._renderer.addClass(document.body, theme);
  }

  public isDarkMode(): boolean {
    return this._colorTheme === 'dark-mode';
  }

  private setColorTheme(theme: string): void {
    this._colorTheme = theme;
    localStorage.setItem('user-theme', theme);
  }

  private getColorTheme(): void {
    if (localStorage.getItem('user-theme')) {
      this._colorTheme = localStorage.getItem('user-theme') as string;
    } else {
      this._colorTheme = 'light-mode';
    }
  }
}
