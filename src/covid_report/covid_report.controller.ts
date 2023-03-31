
import { Controller, Get, Post, Body, Param, Delete, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CovidReportService } from './covid_report.service';
import { CovidReport } from './covid_report.entity';
import { diskStorage } from 'multer';


@Controller('covid-report')
export class CovidReportController {
    constructor(private readonly covidReportService: CovidReportService) { }

    // Get all covid reports
    @Get()
    async findAll(): Promise<CovidReport[]> {
        return await this.covidReportService.findAll();
    }

    // Get one covid report
    @Get(':psu_passport')
    async findOne(@Param('psu_passport') psu_passport: string): Promise<CovidReport> {
        const covidReport = await this.covidReportService.findOne(psu_passport);
        if (!covidReport) {
            throw new Error('Covid report not found');
        } else {
            return covidReport;
        }
    }

    // Create covid report
    @Post()
    async create(@Body() covidReport: CovidReport): Promise<CovidReport> {
        return await this.covidReportService.create(covidReport);
    }

//     @Post('upload')
//   @UseInterceptors(FileInterceptor('file', {
//     storage: diskStorage({
//       destination: '../../uploads', // replace with your desired path
//       filename: (req, file, cb) => {
//         const name = file.originalname.split('.')[0];
//         const fileExtension = file.originalname.split('.')[1];
//         const newFileName = name.split(" ").join("_") + '_' + Date.now() + '.' + fileExtension;
//         return cb(null, newFileName);
//       },
//     }),
//     fileFilter: (req, file, cb) => {
//       if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
//         cb(null, true);
//       } else {
//         cb(new Error('Only image files are allowed!'), false);
//       }
//     }
//   }))
//   async uploadFile(@UploadedFile() file: Express.Multer.File) {
//     console.log(file);
//   }

    // Update covid report
    @Put(':psu_passport')
    async update(@Param('psu_passport') psu_passport: string, @Body() covidReport: CovidReport): Promise<CovidReport> {
        return await this.covidReportService.update(psu_passport, covidReport);
    }

    // Delte covid repost
    @Delete(':psu_passport')
    async delete(@Param('psu_passport') psu_passport: string): Promise<void> {
        const covidReport = await this.covidReportService.findOne(psu_passport);

        if (!covidReport) {
            throw new Error('Covid report not found');
        } else {
            return await this.covidReportService.delete(psu_passport);
        }
    }
}
