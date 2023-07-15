import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDepoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  deposition: string;
}
