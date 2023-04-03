import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { UsersModule } from './users/users.module';
import { DataSourceConfig } from './config/data.source';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    ProjectsModule,
  ],
})
export class AppModule {}
