import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { ConsumerModule } from './consumer/consumer.module';
import { ProviderModule } from './provider/provider.module';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [
    AdminModule,
    ConsumerModule,
    ProviderModule,
    TypeOrmModule.forFeature([User]),
  ],
  exports: [TypeOrmModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
