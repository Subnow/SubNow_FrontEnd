import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DateRangeService } from './date-range.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isOpenCalender: boolean = false;
  selectValue: Date[];
  bsConfig = { dateInputFormat: 'DD/MM/YYYY', showWeekNumbers: false };
  formattedFromDate: string;
  formattedToDate: string;
  activeRange: string;
  selectedFilter: string;

  constructor(
    private datePipe: DatePipe,
    private dateRangeService: DateRangeService
  ) {
    this.selectValue = [new Date(), new Date()];
    this.activeRange = 'today'; // Set a default active range if needed
    this.selectedFilter = ''; // Initialize selected filter

  }

  openCalender(): void {
    this.isOpenCalender = !this.isOpenCalender;
  }

  onValueChange(value: Date[]): void {
    this.selectValue = value;
    if (value && value.length === 2) {
      this.formattedFromDate = this.datePipe.transform(value[0], 'MMM d, y');
      this.formattedToDate = this.datePipe.transform(value[1], 'MMM d, y');
    }
  }

  onApply(): void {
    if (this.selectValue && this.selectValue.length === 2) {
      const fromDate = this.datePipe.transform(this.selectValue[0], 'MMM d, y');
      const toDate = this.datePipe.transform(this.selectValue[1], 'MMM d, y');
      console.log('Selected date range:', fromDate, 'to', toDate);
      this.isOpenCalender = false;
    }
  }

  selectRange(range: string): void {
    switch (range) {
      case 'today':
        this.selectValue = this.dateRangeService.getToday();
        break;
      case 'yesterday':
        this.selectValue = this.dateRangeService.getYesterday();
        break;
      case 'thisWeek':
        this.selectValue = this.dateRangeService.getThisWeek();
        break;
      case 'lastWeek':
        this.selectValue = this.dateRangeService.getLastWeek();
        break;
      case 'thisMonth':
        this.selectValue = this.dateRangeService.getThisMonth();
        break;
      case 'lastMonth':
        this.selectValue = this.dateRangeService.getLastMonth();
        break;
      case 'thisYear':
        this.selectValue = this.dateRangeService.getThisYear();
        break;
      case 'lastYear':
        this.selectValue = this.dateRangeService.getLastYear();
        break;
      case 'allTime':
        this.selectValue = this.dateRangeService.getAllTime();
        break;
    }
    this.activeRange = range;
  }

  isActive(range: string): boolean {
    return this.activeRange === range;
  }
  isActiveFilter(filter: string): boolean {
    return this.selectedFilter === filter;
  }
  selectFilter(filter: string): void {
    this.selectedFilter = filter;
    // Perform actions based on the selected filter
    // Example: this.selectRange(filter);
  }
}
