import { Injectable, OnModuleInit } from '@nestjs/common';
import { databaseConfig } from 'private/database.config';
import { DataSourceOptions } from 'typeorm';
import { createDatabase } from 'typeorm-extension';
// import { AutoImportWishService } from 'src/modules/wish-history/services/auto-import-wish/auto-import-wish.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor() {
    this._createDatabase();
  }

  private async _createDatabase() {
    await createDatabase({ ifNotExist: true, options: databaseConfig.mysql_server as DataSourceOptions });
  }

  async onModuleInit() {
    console.log('>>>>> Initializing AppService <<<<<');
    // console.log('### Launch wish history import ###');
    // this._autoImportWishService.readExcel();
  }
}
