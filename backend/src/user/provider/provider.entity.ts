import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user.entity';

@Entity('USER_PROVIDER')
export class UserProvider {
  @PrimaryGeneratedColumn({ type: 'int', name: 'USER_PROVIDER_PK' })
  userPk: number;

  @Column({ type: 'varchar', name: 'PROFILE_IMG' })
  profileImg: string;

  @Column({ type: 'varchar', name: 'LOCATION' })
  location: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'USER_PK' })
  user: User;
}
