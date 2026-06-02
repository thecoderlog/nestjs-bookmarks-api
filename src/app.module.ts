import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BookmarksModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
