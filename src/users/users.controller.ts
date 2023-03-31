import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    //get all users
    @Get()
    async findAll(): Promise<User[]> {
        return await this.usersService.findall();
    }

    @Get(':psu_passport')
    async findOne(@Param('psu_passport') psu_passport: string): Promise<User> {
        const user = await this.usersService.findOne(psu_passport);
        if (!user) {
            throw new Error('User not found');
        } else {
            return user;
        }
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return await this.usersService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() user: User): Promise<User> {
        return await this.usersService.update(id, user);
    }

    // @Delete(':id')
    // async delete(@Param('id') id: number): Promise<void> {
    //     const user = await this.usersService.findOne(id);

    //     if (!user) {
    //         throw new Error('User not found');
    //     } else {
    //         return await this.usersService.delete(id);
    //     }
    // }


}
