import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { databaseConfig } from 'private/database.config';
import { UsersModule } from 'src/modules/users/users.module';
import { AppService } from 'src/services/app.service';
import { DataSource } from 'typeorm';

function getDBConfig(host: 'local' | 'develop'): TypeOrmModuleOptions {
  console.log(`INITIALIZING API WITH ${databaseConfig.mysql_server.host.toUpperCase()} DATA`);
  switch (host) {
    case 'local':
      return databaseConfig.mysql_local as TypeOrmModuleOptions;
    case 'develop':
      return databaseConfig.mysql_server as TypeOrmModuleOptions;
  }
}

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(getDBConfig('develop'))],
  controllers: [],
  providers: [AppService]
})
export class AppModule implements OnModuleInit {
  constructor(private readonly appService: AppService, private dataSource: DataSource) {}
  onModuleInit() {
    // console.log('Initializing API');
  }
}
