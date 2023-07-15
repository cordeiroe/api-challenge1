import { Module } from '@nestjs/common';
import { DepositionsController } from '../controllers/depositions.controller';

@Module({
  imports: [],
  controllers: [DepositionsController],
  providers: [],
})
export class AppModule {}
