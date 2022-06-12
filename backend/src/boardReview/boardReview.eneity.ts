import { Board } from 'src/board/board.entity';
import { Exchange } from 'src/exchange/exchange.entity';
import { Review } from 'src/review/review.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('BOARD_REVIEW')
export class BoardReview {
  @PrimaryGeneratedColumn({ type: 'int', name: 'BOARD_REVIEW_PK' })
  boardReview: number;

  @ManyToOne(() => Board)
  @JoinColumn({ name: 'BOARD_PK' })
  board: Board;

  @ManyToOne(() => Review)
  @JoinColumn({ name: 'REVIEW_PK' })
  review: Review;

  @ManyToOne(() => Exchange)
  @JoinColumn({ name: 'EXCHANGE_PK' })
  exchange: Exchange;
}
