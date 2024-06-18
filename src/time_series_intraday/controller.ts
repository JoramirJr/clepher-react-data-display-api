import { Controller, Get, Query } from '@nestjs/common';
import { TimeSeriesIntradayService } from './service';
import { Observable } from 'rxjs';

@Controller('intraday')
export class TimeSeriesIntradayController {
  constructor(
    private readonly timeSeriesIntradayService: TimeSeriesIntradayService,
  ) { }

  @Get()
  async fetch_intraday(@Query('page') page: number) {
    return await this.timeSeriesIntradayService.fetch_intraday(page);
  }
}
