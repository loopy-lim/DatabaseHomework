import { Exchange } from 'src/exchange/exchange.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('REVIEW')
export class Review {
  @PrimaryGeneratedColumn({ type: 'int', name: 'REVIEW_PK' })
  reviewPk: number;

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

  @OneToOne(() => Exchange)
  @JoinColumn({ name: 'Exchange_PK' })
  exchangePk: Exchange;
}
