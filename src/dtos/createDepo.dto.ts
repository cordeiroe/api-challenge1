import { IsNotEmpty, IsString } from 'class-validator';

export class DepositionsDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    deposition: string;
}
