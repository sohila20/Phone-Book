import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class PhoneBookRecord extends Entity {
  @property({
    type: 'string',
    id:true,
    generated:true,
  })
  id: string;

  @property({
    type: 'string',
    index: {
      unique: true,
    },
    required: true,
  })
  phoneNumber: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PhoneBookRecord>) {
    super(data);
  }
}

export interface PhoneBookRecordRelations {
  // describe navigational properties here
}

export type PhoneBookRecordWithRelations = PhoneBookRecord & PhoneBookRecordRelations;
