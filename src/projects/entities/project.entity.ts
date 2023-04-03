import { IProject } from 'interfaces/project.interface';
import { BaseEntity } from '../../config/base.entity';
import { UsersProjectsEntity } from '../../users/entities/userProjects.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity({
  name: 'projects',
})
export class ProjectsEntity extends BaseEntity implements IProject {
  @Column()
  name: string;
  @Column()
  description: string;
  @OneToMany(
    () => UsersProjectsEntity,
    (usersProjects) => usersProjects.project,
  )
  usersInclude: UsersProjectsEntity[];
}
