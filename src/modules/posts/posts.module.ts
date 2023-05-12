import { Module } from '@nestjs/common';
import { postsService } from './posts.service';
import { postsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './entities/posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  controllers: [postsController],
  providers: [postsService]
})
export class postsModule {}
