import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CovidReport{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    psu_passport: string;

    @Column()
    timestamp: string;

    @Column()
    covid_status: string;

    @Column()
    images_name: string;
    

}