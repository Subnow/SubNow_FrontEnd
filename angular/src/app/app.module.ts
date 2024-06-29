import { AccountConfigModule } from '@abp/ng.account/config';
import { CoreModule } from '@abp/ng.core';
import { registerLocale } from '@abp/ng.core/locale';
import { IdentityConfigModule } from '@abp/ng.identity/config';
import { SettingManagementConfigModule } from '@abp/ng.setting-management/config';
import { TenantManagementConfigModule } from '@abp/ng.tenant-management/config';
import { DEFAULT_VALIDATION_BLUEPRINTS, InternetConnectionStatusComponent, ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTE_PROVIDER } from './route.provider';
import { FeatureManagementModule } from '@abp/ng.feature-management';
import { AbpOAuthModule } from '@abp/ng.oauth';
import { ThemeLeptonXModule } from '@abp/ng.theme.lepton-x';
import { SideMenuLayoutModule } from '@abp/ng.theme.lepton-x/layouts';
import { AccountLayoutModule } from '@abp/ng.theme.lepton-x/account';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CustomCoreModule } from './custom-core/custom-core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnglishLocalizationExtend } from '../localizations/en/en';
import { ArabicLocalizationExtend } from '../localizations/ar/ar';
import { ToastrModule } from 'ngx-toastr';
import { NgxValidateCoreModule } from '@ngx-validate/core';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgApexchartsModule,
    ToastrModule.forRoot(),
    NgxValidateCoreModule.forRoot(),
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale({
        cultureNameLocaleFileMap: {
          en: 'en',
          ar: 'ar',
        },
        errorHandlerFn: data => {
          console.warn(data);
        },
      }),
      localizations: [
        {
          culture: 'en',
          resources: EnglishLocalizationExtend,
        },
        {
          culture: 'ar',
          resources: ArabicLocalizationExtend,
        },
      ],
    }),
    AbpOAuthModule.forRoot(),
    ThemeSharedModule.forRoot({
      validation: {
        blueprints: {
          ...DEFAULT_VALIDATION_BLUEPRINTS,
          required: 'General::RequiredInput',
          email: 'General::InvalidEmail',
          pattern: 'General::InvalidPattern',
          max: 'General::ThisFieldMustBeLessOrEqual[{{ max }}]',
          maxLength: 'General::ThisFieldMustBeAStringOrArrayTypeWithAMaximumLengthOf[{{ maxLength }}]',
          invalidUrl: 'General::urlNotValid'
        },
      },
    }),

    CustomCoreModule,
    AccountConfigModule.forRoot(),
    IdentityConfigModule.forRoot(),
    TenantManagementConfigModule.forRoot(),
    SettingManagementConfigModule.forRoot(),
    FeatureManagementModule.forRoot(),
    InternetConnectionStatusComponent,
    ThemeLeptonXModule.forRoot(),
    SideMenuLayoutModule.forRoot(),
    AccountLayoutModule.forRoot(),
    NgbModule
  ],
  declarations: [AppComponent],
  providers: [APP_ROUTE_PROVIDER,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
