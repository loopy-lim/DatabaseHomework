import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Board } from './board.entity';

@Entity('BOARD_INFO')
export class BoardInfo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'BOARD_INFO_PK' })
  boardInfoPk: number;

  @Column({ type: 'varchar', name: 'TITLE' })
  title: string;

  @Column({ type: 'varchar', name: 'CONTENT' })
  content: string;

  @OneToOne(() => Board)
  @JoinColumn({ name: 'BOARD_PK' })
  board: Board;
}
