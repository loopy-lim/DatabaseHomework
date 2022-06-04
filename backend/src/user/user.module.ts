import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ConsumerModule } from './consumer/consumer.module';
import { ProviderModule } from './provider/provider.module';

@Module({ imports: [AdminModule, ConsumerModule, ProviderModule] })
export class UserModule {}
