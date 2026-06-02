import {Injectable, NotFoundException} from '@nestjs/common';
import {PrismaService} from '../prisma/prisma.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';

@Injectable()
export class BookmarksService {
    constructor(private prisma: PrismaService) {}
    async findAll(tag?: string) {
    const bookmarks = await this.prisma.bookmark.findMany({
      orderBy: { createdAt: 'desc' },
    });
    const result = bookmarks.map(b => this.deserialize(b));
    return tag ? result.filter(b => b.tags.includes(tag)) : result;
  }

  async findOne(id: string) {
    const bookmark = await this.prisma.bookmark.findUnique({ where: { id } });
    if (!bookmark) {
      throw new NotFoundException(`Bookmark ${id} not found`);
    }
    return this.deserialize(bookmark);
  }

  async create(data: CreateBookmarkDto) {
    const bookmark = await this.prisma.bookmark.create({
      data: {
        url: data.url,
        title: data.title,
        description: data.description,
        tags: JSON.stringify(data.tags ?? []),
      },
    });
    return this.deserialize(bookmark);
  }

  async update(
    id: string,
    data: UpdateBookmarkDto,
  ) {
    await this.findOne(id);
    const bookmark = await this.prisma.bookmark.update({
      where: { id },
      data: {
        ...data,
        tags: data.tags ? JSON.stringify(data.tags) : undefined,
      },
    });
    return this.deserialize(bookmark);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.bookmark.delete({ where: { id } });
    return { deleted: true };
  }

  private deserialize(bookmark: { tags: string } & Record<string, any>) {
    return { ...bookmark, tags: JSON.parse(bookmark.tags) as string[] };
  }
}