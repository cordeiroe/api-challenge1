import { Module } from '@nestjs/common';
import { ReviewsController } from '../controllers/createReview.controller';
import { CreateReviewRepository } from 'src/repository/createReview.repository';

@Module({
    imports: [],
    controllers: [ReviewsController],
    providers: [CreateReviewRepository]
})
export class AppModule {}
