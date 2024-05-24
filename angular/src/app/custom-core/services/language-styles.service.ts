import { Injectable } from '@angular/core';
import { SessionStateService } from '@abp/ng.core';
import { StyleService } from './styles.services';

@Injectable({
  providedIn: 'root',
})
export class LanguagesAndStylesService {
  constructor(
    private sessionStateService: SessionStateService,
    private styleService: StyleService
  ) {}

  getCurrentLanguage() {
    let lang = this.sessionStateService.getLanguage()
      ? this.sessionStateService.getLanguage()
      : JSON.parse(localStorage.getItem('DEFAULT_LANGUAGE')!)
      ? JSON.parse(localStorage.getItem('DEFAULT_LANGUAGE')!)
      : 'ar';
    return lang;
  }

  getCurrentLanguage$() {
    return this.sessionStateService.onLanguageChange$();
  }

  async toggleLanguageAndDir() {
    await this.setLangsAndStyles(this.getCurrentLanguage() === 'en' ? 'ar' : 'en');
  }

  async loadDefaultLangsAndStyles() {
    await this.setLangsAndStyles();
  }

  private async setLangsAndStyles(lang: string = this.getCurrentLanguage()) {
    localStorage.setItem('DEFAULT_LANGUAGE', JSON.stringify(lang));
    this.sessionStateService.setLanguage(lang);
    await this.styleService.setStyleByDir(lang === 'en');
  }
}
