import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() { }

  /**
   * Converts a SQL DATETIME value into a JS Date object
   * @param sqlTime SQL DATETIME string 'YYYY-MM-DDThh:mm:ss.mmmZ'
   * @returns JS Date object with the same date and time as the SQL DATETIME value
   */
  convertSQLDateTimeToJSDate(sqlTime: string): Date {

    let t = sqlTime.split(/[-T:]/);
    let date = new Date(Number(t[0]), Number(t[1]) - 1, Number(t[2]), Number(t[3]), Number(t[4]));
    date.setHours(date.getHours() - (date.getTimezoneOffset() / 60 * 2))

    return date;
  }
}
