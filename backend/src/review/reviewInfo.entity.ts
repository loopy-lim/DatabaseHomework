import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Review } from './review.entity';

@Entity('REVIEW_INFO')
export class ReviewInfo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'REVIEW_INFO_PK' })
  reviewInfoPk: number;

  @Column({ type: 'varchar', name: 'TITLE' })
  title: string;

  @Column({ type: 'varchar', name: 'CONTENT' })
  content: string;

  @OneToOne(() => Review)
  @JoinColumn({ name: 'REVIEW_PK' })
  review: Review;
}
