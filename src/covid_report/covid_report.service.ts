import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CovidReport } from './covid_report.entity';


@Injectable()
export class CovidReportService {

    constructor(
        @InjectRepository(CovidReport)
        private covidReportRepository: Repository<CovidReport>,
        ) {}
    
        // Get all reports
        async findAll(): Promise<CovidReport[]> {
            return await this.covidReportRepository.find();
        }

        // Get one report
        async findOne(psu_passport: string): Promise<CovidReport> {
            return await this.covidReportRepository.findOne({ where : { psu_passport } });
        }

        // Create report
        async create(covidReport: CovidReport): Promise<CovidReport> {
            const newCovidReport = this.covidReportRepository.create(covidReport);
            newCovidReport.timestamp = new Date().toISOString();
            return await this.covidReportRepository.save(newCovidReport);
        }

        // Update report
        async update(psu_passport: string, covidReport: CovidReport): Promise<CovidReport> {
            await this.covidReportRepository.update(psu_passport, covidReport);
            return await this.covidReportRepository.findOne( { where : { psu_passport } } );
        }

        // Delete report
        async delete(psu_passport: string): Promise<void> {
            await this.covidReportRepository.delete(psu_passport);
        }
}
