import { UserConsumer } from 'src/user/consumer/consumer.entity';
import { UserProvider } from 'src/user/provider/provider.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('BOARD')
export class Board {
  @PrimaryGeneratedColumn({ type: 'int', name: 'BOARD_PK' })
  boardPk: number;

  @Column({ type: 'int', name: 'ALOWED' })
  exchangeState: number;

  @Column({
    type: 'datetime',
    name: 'INSPIRE_DATE',
    default: () => 'CURRENT_TIMESTAMP',
  })
  inspireDate: Date;

  @Column({
    type: 'datetime',
    name: 'EXPIRE_DATE',
    default: () => `99991231235959`,
  })
  expireDate: Date;

  @ManyToOne(() => UserProvider)
  @JoinColumn({ name: 'USER_PROVIDER_PK' })
  UserProvider: UserProvider;
}
