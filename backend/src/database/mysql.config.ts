import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Board } from 'src/board/board.entity';
import { BoardInfo } from 'src/board/boardInfo.entity';
import { Exchange } from 'src/exchange/exchange.entity';
import { Review } from 'src/review/review.entity';
import { ReviewInfo } from 'src/review/reviewInfo.entity';
import { UserAdmin } from 'src/user/admin/admin.entity';
import { UserConsumer } from 'src/user/consumer/consumer.entity';
import { UserProvider } from 'src/user/provider/provider.entity';

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
  entities: [
    User,
    UserAdmin,
    UserConsumer,
    UserProvider,
    Exchange,
    Board,
    BoardInfo,
    Review,
    ReviewInfo,
  ],
  synchronize: true,
  connectTimeout: 20000,
});
