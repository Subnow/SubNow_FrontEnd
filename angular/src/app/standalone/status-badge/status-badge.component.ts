import { Component, Input, OnInit } from '@angular/core';
import { PlanStatusType } from '@proxy/enums';
import {PlanStatusHelper} from '../../shared/utils/planStatus'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.scss'
})
export class StatusBadgeComponent extends PlanStatusHelper implements OnInit{
  @Input() status: PlanStatusType | null = null;
  constructor() {
    super();
  }
  ngOnInit(): void {
  }

}
