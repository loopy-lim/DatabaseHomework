import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ConsumerModule } from './consumer/consumer.module';
import { ProviderModule } from './provider/provider.module';
import { UserController } from './user.controller';

@Module({
  imports: [AdminModule, ConsumerModule, ProviderModule],
  controllers: [UserController],
})
export class UserModule {}
