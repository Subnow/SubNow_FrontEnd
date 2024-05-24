import { Component, inject } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core';
import { MainLayoutComponent } from './custom-core/layout/main-layout/main-layout.component';
import { eThemeLeptonXComponents } from '@abp/ng.theme.lepton-x';
import { LanguageComponent } from './custom-core/language/language.component';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
    <abp-internet-status></abp-internet-status>
  `,
})
export class AppComponent {
  constructor(private _replaceableComponents: ReplaceableComponentsService) {
    this._replaceableComponents.add(
      {
        component:MainLayoutComponent,
        key:eThemeLeptonXComponents.ApplicationLayout
      }
    )
    this._replaceableComponents.add({
      component: LanguageComponent,
      key: eThemeLeptonXComponents.Languages,
    });
  }
}

