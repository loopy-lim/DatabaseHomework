import { UserConsumer } from 'src/user/consumer/consumer.entity';
import { UserProvider } from 'src/user/provider/provider.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
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
    type: 'timestamp',
    name: 'INSPIRE_DATE',
    default: () => 'CURRENT_TIMESTAMP',
  })
  inspireDate: Date;

  @DeleteDateColumn({ name: 'sEXPIRE_DATE' })
  expireDate: Date;

  @OneToMany(() => UserConsumer, (userConsumer) => userConsumer.userConsumerPk)
  @JoinColumn({ name: 'USER_CONSUMER_PK' })
  userConsumer: UserConsumer[];

  @OneToMany(() => UserProvider, (UserProvider) => UserProvider.userProivderPk)
  @JoinColumn({ name: 'USER_PROVIDER_PK' })
  UserProvider: UserProvider[];
}
