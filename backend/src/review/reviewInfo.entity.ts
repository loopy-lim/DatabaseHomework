import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Review } from './review.entity';

@Entity('REVIEW_INFO')
export class ReviewInfo {
  @PrimaryColumn()
  reviewInfoPk: number;

  @Column({ type: 'varchar', name: 'TITLE' })
  title: string;

  @Column({ type: 'varchar', name: 'CONTENT' })
  content: string;

  @OneToOne(() => Review)
  @JoinColumn({ name: 'REVIEW_PK' })
  review: Review;
}
