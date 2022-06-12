import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Board } from './board.entity';

@Entity('BOARD_INFO')
export class BoardInfo {
  @PrimaryColumn()
  boardInfoPk: number;

  @Column({ type: 'varchar', name: 'TITLE' })
  title: string;

  @Column({ type: 'varchar', name: 'CONTENT' })
  content: string;

  @OneToOne(() => Board)
  @JoinColumn({ name: 'BOARD_PK' })
  board: Board;
}
