import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { UsersModule } from './commons/user/users.module';
import { AuthModule } from './commons/auth/auth.module';
import { User } from './commons/user/entities/user.entity';
import { postsModule } from './modules/posts/posts.module';
import { Posts } from './modules/posts/entities/posts.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.dev',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        User,
        Posts
      ],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    postsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
