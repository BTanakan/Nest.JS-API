import { Test, TestingModule } from '@nestjs/testing';
import { CovidReportController } from './covid_report.controller';

describe('CovidReportController', () => {
  let controller: CovidReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CovidReportController],
    }).compile();

    controller = module.get<CovidReportController>(CovidReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
