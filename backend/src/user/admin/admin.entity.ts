import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user.entity';

@Entity('USER_ADMIN')
export class Admin {
  @PrimaryGeneratedColumn({ type: 'int', name: 'USER_ADMIN_PK' })
  userAdminPk: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'USER_PK' })
  user: User;
}
