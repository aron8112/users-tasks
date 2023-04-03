import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { ACCESS_LEVEL } from '../../constants/roles';
import { UserEntity } from './user.entity';
import { ProjectsEntity } from '../../projects/entities/project.entity';

@Entity({
  name: 'users_projects',
})
export class UsersProjectsEntity extends BaseEntity {
  @Column({ type: 'enum', enum: ACCESS_LEVEL })
  accessLevel: ACCESS_LEVEL;

  // RELACIONES
  @ManyToOne(() => UserEntity, (user) => user.projectsInclude)
  user: UserEntity;

  @ManyToOne(() => ProjectsEntity, (project) => project.usersInclude)
  project: UserEntity;
}
