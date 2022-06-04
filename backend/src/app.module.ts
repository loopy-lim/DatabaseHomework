import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mysqlModule } from './database/mysql.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [mysqlModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
