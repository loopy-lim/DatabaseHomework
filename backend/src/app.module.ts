import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mysqlModule } from './database/mysql.config';

@Module({
  imports: [mysqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
