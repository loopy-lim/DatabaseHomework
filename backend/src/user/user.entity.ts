import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({
    type: 'datetime',
    name: 'EXPIRE_DATE',
    default: () => `99991231235959`,
  })
  expireDate: Date;
}
