import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeSeriesIntradayController } from './time_series_intraday/controller';
import { TimeSeriesIntradayService } from './time_series_intraday/service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, TimeSeriesIntradayController],
  providers: [AppService, TimeSeriesIntradayService],
})
export class AppModule {}
