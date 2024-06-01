import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title-standalone',
  standalone: true,
  imports: [],
  templateUrl: './page-title-standalone.component.html',
  styleUrl: './page-title-standalone.component.scss'
})
export class PageTitleStandaloneComponent {
  @Input() title: string;
  @Input() description: string;
}
