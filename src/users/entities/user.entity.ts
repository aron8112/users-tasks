import { IUser } from 'interfaces/user.interface';
import { BaseEntity } from 'src/config/base.entity';
import { Entity, Column } from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity extends BaseEntity implements IUser {
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  age: number;
  @Column()
  email: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  role: string;
  @Column()
  projectsInclude: string;
}
