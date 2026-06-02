import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { BookmarksService } from './bookmarks.service';
import { BookmarksController } from './bookmarks.controller';

@Module({
    imports: [PrismaModule],
    providers: [BookmarksService],
    controllers: [BookmarksController],
})
export class BookmarksModule {}
