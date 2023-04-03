import { Entity, Column, OneToMany } from 'typeorm';
import { IUser } from 'interfaces/user.interface';
import { BaseEntity } from '../../config/base.entity';
import { ROLES } from '../../constants/roles';
import { UsersProjectsEntity } from './userProjects.entity';

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
  @Column({ unique: true })
  email: string;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
  @Column({ type: 'enum', enum: ROLES })
  role: ROLES;
  @OneToMany(() => UsersProjectsEntity, (usersProjects) => usersProjects.user)
  projectsInclude: UsersProjectsEntity[];
}
