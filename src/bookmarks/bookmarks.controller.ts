import {
  Body, Controller, Delete, Get, Param, Patch, Post, Query,
} from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly bookmarks: BookmarksService) {}

  @Get()
  findAll(@Query('tag') tag?: string) {
    return this.bookmarks.findAll(tag);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookmarks.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateBookmarkDto) {
    return this.bookmarks.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateBookmarkDto) {
    return this.bookmarks.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookmarks.remove(id);
  }
}