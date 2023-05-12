import { BadRequestException, Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Posts, postType } from './entities/posts.entity';
import { User } from 'src/commons/user/entities/user.entity';
import { Certificate } from 'crypto';



@Injectable()
export class postsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postRepository: Repository<Posts>,
  ) {}

  async create(createPostDto: any, file) {
    try {

      createPostDto.image = (file) ? file.filename : '';
    
      console.log(createPostDto);
      
      const s = await this.postRepository.save(
        this.postRepository.create(createPostDto),
      );
        
      return s
    } catch (error) {
      console.log(error);
      
      throw new BadRequestException() ;
      ;
    }
  }

  async page(filter: FindManyOptions<Posts>) {
    try {
      const [data, total] = await this.postRepository.findAndCount(filter);

      return {
        total,
        data,
      };
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async filter(filter?: FindManyOptions<Posts>) {
    try {
      return await this.postRepository.findAndCount(filter);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findByAll(postType : any, cost: number, region: string, district: string) {


    try {
      let all = await this.postRepository.find({
        where: {
          postType: postType,
          cost: cost,
          region: region,
          district: district
        },
        relations: {
          user: true
        }
      })
      return all
    } catch (error) {
      console.log(error);
      
    }
  }

  async findById(id: number,) {
    return await this.postRepository.find({
        where: {
            id: id
        },
        relations: {
          user: true
        }
    });
  }

  async update(id: number, Body: UpdatePostDto) {
    return this.postRepository.update({id}, Body)
  }

  async delete(id: number) {
    return this.postRepository.delete({id})
  }
}
