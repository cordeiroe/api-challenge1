import { Body, Controller, Get, Post } from '@nestjs/common';
import { DepositionsDto } from '../dtos/createDepo.dto';
import { CreateDepoRepository } from '../repository/createDepo.repository';

@Controller('/depositions')
export class DepositionsController {
    constructor(private readonly depositionsRepository: CreateDepoRepository) {}

    @Post()
    async createDepo(@Body() depoData: DepositionsDto) {
        return this.deposRepository.createDeposition(depoData);
        return depo;
    }

    @Get()
    async findAllDepositions() {
        return this.deposRepository.findAllDepositions();
    }
}
