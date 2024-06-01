
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document = document;
  }

  public setStyleByDir(isDefaultLTR = true): Promise<string> {
    const direction = isDefaultLTR ? 'ltr' : 'rtl';
    const lang = isDefaultLTR ? 'en' : 'ar';

    return this.setDirectionAndLoadBundle(direction, lang);
  }

  private setDirectionAndLoadBundle(
    direction: string,
    lang: string,
  ): Promise<string> {
    const htmlTag = this.document.getElementsByTagName('html')[0];
    const bodyTag = this.document.getElementsByTagName('body')[0];
    htmlTag.classList.remove('ltr', 'rtl');
    htmlTag.classList.add(direction);
    htmlTag.setAttribute('lang', lang);
    bodyTag.setAttribute('dir', direction);
    return;
  }

  private loadBundle(name: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const themeLink = this.document.getElementById('client-theme') as HTMLLinkElement;

      if (themeLink) {
        themeLink.href = name;
        resolve();
      } else {
        const style = this.document.createElement('link');
        style.id = 'client-theme';
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.as = 'style';
        style.href = name;

        style.onload = () => {
          resolve();
        };

        style.onerror = () => {
          reject(new Error(`Failed to load ${name}`));
        };

        this.document.getElementsByTagName('head')[0].appendChild(style);
      }
    });
  }
}

