import { Module } from '@nestjs/common';
import { DepositionsController } from '../controllers/createDepo.controller';
import { CreateDepoRepository } from 'src/repository/createDepo.repository';

@Module({
    imports: [],
    controllers: [DepositionsController],
    providers: [CreateDepoRepository]
})
export class AppModule {}
