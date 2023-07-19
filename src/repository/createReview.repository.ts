import { Injectable } from '@nestjs/common';
import { ReviewsDto } from '../dtos/createReview.dto';

@Injectable()
export class CreateReviewRepository {
    private readonly review: ReviewsDto[] = [];

    createReview(depoData: ReviewsDto): ReviewsDto {
        const newReview = { ...depoData };
        this.review.push(newReview);
        return newReview;
    }

    findAllReviews(): ReviewsDto[] {
        return this.review;
    }
}
