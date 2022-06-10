import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USER')
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'USER_PK' })
  userPk: number;

  @Column({ type: 'varchar', name: 'USER_NAME' })
  userName: string;

  @Column({ type: 'timestamp', name: 'USER_INSPIRE_DATE' })
  inspireDate: Date;

  @Column({ type: 'timestamp', name: 'USER_EXPIRED_DATE' })
  expireDate: Date;
}
