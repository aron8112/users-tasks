import { IProject } from 'interfaces/project.interface';
import { BaseEntity } from 'src/config/base.entity';
import { Entity, Column } from 'typeorm';

@Entity({
  name: 'projects',
})
export class ProjectEntity extends BaseEntity implements IProject {
  @Column()
  name: string;
  @Column()
  description: string;
}
