import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, ConfigStateService, CurrentUserDto, LanguageInfo, NAVIGATE_TO_MANAGE_PROFILE, SessionStateService } from '@abp/ng.core';
import { map } from 'rxjs/operators';
import snq from 'snq';
import { LanguagesAndStylesService } from '../services/language-styles.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  currentUser$: Observable<CurrentUserDto> = this.configState.getOne$('currentUser');
  selectedTenant$ = this.sessionState.getTenant$();

  currentLang$ = this._languagesAndStylesService.getCurrentLanguage();

  languages$: Observable<LanguageInfo[]> = this.configState.getDeep$('localization.languages');

  get smallScreen(): boolean {
    return window.innerWidth < 992;
  }

  get defaultLanguage$(): Observable<string> {
    return this.languages$.pipe(
      map(
        languages =>
          snq(
            () => languages.find(lang => lang.cultureName === this.selectedLangCulture).displayName
          ),
        ''
      )
    );
  }

  get dropdownLanguages$(): Observable<LanguageInfo[]> {
    return this.languages$.pipe(
      map(
        languages =>
          snq(() => languages.filter(lang => lang.cultureName !== this.selectedLangCulture)),
        []
      )
    );
  }

  get selectedLangCulture(): string {
    return this.sessionState.getLanguage();
  }

  get hasLoggedIn(): boolean {
    return this.authService.isAuthenticated;
  }

  constructor(
    @Inject(NAVIGATE_TO_MANAGE_PROFILE) public navigateToManageProfile,
    private configState: ConfigStateService,
    private authService: AuthService,
    private sessionState: SessionStateService,
    private readonly _languagesAndStylesService: LanguagesAndStylesService
  ) {
    // console.log(this.currentLang$);
  }

  onChangeLang() {
    //this.sessionState.setLanguage(cultureName);
    // console.log("culture ====> ", cultureName)
    this._languagesAndStylesService.toggleLanguageAndDir();
    // console.log(cultureName)
  }


  navigateToLogin() {
    this.authService.navigateToLogin();
  }

  logout() {
    this.authService.logout().subscribe();
  }
}
