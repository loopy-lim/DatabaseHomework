import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

const env = process.env;

export const mysqlModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: env.HOST,
  port: parseInt(env.PORT),
  username: env.USERNAME,
  password: env.PASSWORD,
  database: env.DATABASE,
  entities: [join(__dirname, '/**/*.entity.ts')],
  synchronize: true,
  connectTimeout: 20000,
});
