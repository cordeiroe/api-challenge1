import { IsNotEmpty, IsString } from 'class-validator';

export class ReviewsDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    review: string;
}
