import { Component, inject } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core';
import { eThemeLeptonXComponents } from '@abp/ng.theme.lepton-x';
import { MainLayoutComponent } from './custom-core/components/layout/main-layout/main-layout.component';
import { LanguageComponent } from './custom-core/components/language/language.component';

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

