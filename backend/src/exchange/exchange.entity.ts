import { UserConsumer } from 'src/user/consumer/consumer.entity';
import { UserProvider } from 'src/user/provider/provider.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('EXCHANGE')
export class Exchange {
  @PrimaryGeneratedColumn({ type: 'int', name: 'EXCHANGE_PK' })
  exchangePk: number;

  @Column({ type: 'varchar', name: 'EXCHANGE_STATE' })
  exchangeState: string;

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

  @ManyToOne(() => UserConsumer)
  @JoinColumn({ name: 'USER_CONSUMER_PK' })
  userConsumer: UserConsumer;

  @ManyToOne(() => UserProvider)
  @JoinColumn({ name: 'USER_PROVIDER_PK' })
  UserProvider: UserProvider;
}
