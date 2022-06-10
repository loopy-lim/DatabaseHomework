import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Admin } from 'src/user/admin/admin.entity';
import { Consumer } from 'src/user/consumer/consumer.entity';
import { Provider } from 'src/user/provider/provider.entity';

import { User } from 'src/user/user.entity';

dotenv.config();

const env = process.env;

export const mysqlModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: env.HOST,
  port: parseInt(env.PORT),
  username: env.USERNAME,
  password: env.PASSWORD,
  database: env.DATABASE,
  entities: [User, Admin, Consumer, Provider],
  synchronize: true,
  connectTimeout: 20000,
});
