import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';


@Injectable()
export class TimeSeriesIntradayService {
  constructor(private readonly httpService: HttpService) { }

  async fetch_intraday(page?: number): Promise<any> {
    const response = await lastValueFrom(this.httpService.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=EUR&apikey=${process.env.API_KEY}`));
    const items = response.data['Time Series (Digital Currency Weekly)'];
    const pgStart = (page - 1) * 10;
    const pgFinish = pgStart + 10;
    const pageIndexes = Object.keys(items).slice(pgStart, pgFinish);
    const responseObj = { timeSeries: {}, pages: null, currentPage: null, totalItems: null };
    for (const day of pageIndexes) {
      responseObj.timeSeries[`${day}`] = items[`${day}`]
    }
    responseObj.currentPage = page;
    responseObj.totalItems = Object.keys(items).length
    responseObj.pages = Math.floor(responseObj.totalItems / 10);
    return responseObj;
  }
}
