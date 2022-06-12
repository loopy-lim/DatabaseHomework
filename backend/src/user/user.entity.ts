import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('USER')
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'USER_PK' })
  userPk: number;

  @Column({ type: 'varchar', name: 'USER_NAME' })
  userName: string;

  @Column({
    type: 'timestamp',
    name: 'INSPIRE_DATE',
    default: () => 'CURRENT_TIMESTAMP',
  })
  inspireDate: Date;

  @DeleteDateColumn({ name: 'EXPIRE_DATE' })
  expireDate: Date;
}
