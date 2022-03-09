import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {PhoneBookRecord, PhoneBookRecordRelations} from '../models';

export class PhoneBookRecordRepository extends DefaultCrudRepository<
  PhoneBookRecord,
  typeof PhoneBookRecord.prototype.id,
  PhoneBookRecordRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(PhoneBookRecord, dataSource);
  }
}
