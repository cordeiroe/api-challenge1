import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReviewsDto } from '../dtos/createReview.dto';
import { CreateReviewRepository } from '../repository/createReview.repository';

@Controller('/reviews')
export class ReviewsController {
    constructor(private readonly reviewRepository: CreateReviewRepository) {}

    @Post()
    async createDepo(@Body() depoData: ReviewsDto) {
        console.log(depoData);
        return this.reviewRepository.createReview(depoData);
    }

    @Get()
    async findAllDepositions() {
        return this.reviewRepository.findAllReviews();
    }
}
