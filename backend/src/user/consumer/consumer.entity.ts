import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('USER_CONSUMER')
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'USER_CONSUMER_PK' })
  userConsumerPk: number;

  @Column({ type: 'varchar', name: 'PROFILE_IMG' })
  profileImg: string;

  @Column({ type: 'varchar', name: 'LOCATION' })
  location: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'USER_PK' })
  user: User;
}
