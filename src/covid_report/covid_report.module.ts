import { Module } from '@nestjs/common';
import { CovidReportController } from './covid_report.controller';
import { CovidReportService } from './covid_report.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CovidReport } from './covid_report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CovidReport])],
  controllers: [CovidReportController],
  providers: [CovidReportService]
})
export class CovidReportModule {}
