import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException,ParseIntPipe,
  Query,
  HttpCode,
  HttpStatus,
  UploadedFile,
  UseInterceptors, } from '@nestjs/common';
import { postsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Auth } from 'src/commons/decorators/auth.decorator';
import { PagePipe } from 'src/commons/pipes/PagePipe';
import { PerPagePipe } from 'src/commons/pipes/PerPagePipe';
import { UpdatePostDto } from './dto/update-post.dto';
import { extname } from 'path';
import { diskStorage } from 'multer';
import {FileInterceptor} from '@nestjs/platform-express';
import { postType } from './entities/posts.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('Posts')
export class postsController {

  constructor(private readonly postsService: postsService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => 
      (Math.round(Math.random() * 16)).toString(16)).join('');
        return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
      }))
    create(
    @Body() CreatePostDto: CreatePostDto, 
    @UploadedFile() file: Express.Multer.File)  {
        return this.postsService.create(CreatePostDto, file);
    }


  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(
    @Query('page', PagePipe) page: number,
    @Query('per_page', PerPagePipe) perPage: number,
  ) {
    return this.postsService.page({
      skip: perPage * page,
      take: perPage,
      order: {
        id: 'DESC',
      },
      relations: {
        user: true
      }
    });
  }


  @HttpCode(HttpStatus.OK)
  @Get('all')
  FindBY(
    @Query('postType') postType: string,
    @Query('cost',) cost: number,
    @Query('region') region: string,
    @Query('district') district : string,
  ) {
    return this.postsService.findByAll(postType, cost, region, district)
  }



  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findById(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.postsService.findById(id)
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() Body: UpdatePostDto,
  ) {
    return this.postsService.update(id, Body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  delete(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.postsService.delete(id);
  }

}
