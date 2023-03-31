import { Test, TestingModule } from '@nestjs/testing';
import { CovidReportService } from './covid_report.service';

describe('CovidReportService', () => {
  let service: CovidReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CovidReportService],
    }).compile();

    service = module.get<CovidReportService>(CovidReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
