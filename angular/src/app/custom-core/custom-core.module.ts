import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { LanguageComponent } from './components/language/language.component';


const componentList =[
  HeaderComponent,
  FooterComponent,
  SideMenuComponent,
  MainLayoutComponent,
  LanguageComponent
]

const moduleList = [
  CommonModule,
  SharedModule
]



@NgModule({
  declarations: [
    ...componentList,

  ],
  imports: [
    ...moduleList
  ]
})
export class CustomCoreModule { }
