import { Controller, Get, Post } from '@nestjs/common';

@Controller('/depositions')
export class DepositionsController {
  @Get()
  findAll(): string {
    return 'This action returns all depositions';
  }

  // @Post('/create')
}
