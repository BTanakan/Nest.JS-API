import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    psu_passport: string;

    @Column()
    user_password: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    user_role: string;
}