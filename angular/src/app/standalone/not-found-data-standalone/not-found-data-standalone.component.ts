import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-not-found-data-standalone',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './not-found-data-standalone.component.html',
  styleUrl: './not-found-data-standalone.component.scss'
})
export class NotFoundDataStandaloneComponent {

}
