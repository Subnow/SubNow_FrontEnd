import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateRangeService {
  getToday(): Date[] {
    const today = new Date();
    return [today, today];
  }

  getYesterday(): Date[] {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return [yesterday, yesterday];
  }

  getThisWeek(): Date[] {
    const today = new Date();
    const firstDay = today.getDate() - today.getDay();
    const lastDay = firstDay + 6;
    const startOfWeek = new Date(today.setDate(firstDay));
    const endOfWeek = new Date(today.setDate(lastDay));
    return [startOfWeek, endOfWeek];
  }

  getLastWeek(): Date[] {
    const today = new Date();
    const startOfLastWeek = new Date(today.setDate(today.getDate() - today.getDay() - 7));
    const endOfLastWeek = new Date(today.setDate(startOfLastWeek.getDate() + 6));
    return [startOfLastWeek, endOfLastWeek];
  }

  getThisMonth(): Date[] {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return [startOfMonth, endOfMonth];
  }

  getLastMonth(): Date[] {
    const today = new Date();
    const startOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    return [startOfLastMonth, endOfLastMonth];
  }

  getThisYear(): Date[] {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const endOfYear = new Date(today.getFullYear(), 11, 31);
    return [startOfYear, endOfYear];
  }

  getLastYear(): Date[] {
    const today = new Date();
    const startOfLastYear = new Date(today.getFullYear() - 1, 0, 1);
    const endOfLastYear = new Date(today.getFullYear() - 1, 11, 31);
    return [startOfLastYear, endOfLastYear];
  }

  getAllTime(): Date[] {
    const startDate = new Date(1970, 0, 1); // Arbitrary start date
    const today = new Date();
    return [startDate, today];
  }
}
