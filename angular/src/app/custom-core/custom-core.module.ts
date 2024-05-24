import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { LanguageComponent } from './language/language.component';


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
