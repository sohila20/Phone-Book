import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {PhoneBookRecord} from '../models';
import {PhoneBookRecordRepository} from '../repositories';

export class PhoneBookRecordController {
  constructor(
    @repository(PhoneBookRecordRepository)
    public phoneBookRecordRepository : PhoneBookRecordRepository,
  ) {}

  @post('/records')
  @response(200, {
    description: 'PhoneBookRecord model instance',
    content: {'application/json': {schema: getModelSchemaRef(PhoneBookRecord)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PhoneBookRecord, {
            title: 'NewPhoneBookRecord',
            exclude: ['phoneNumber'],
          }),
        },
      },
    })
    phoneBookRecord: Omit<PhoneBookRecord, 'phoneNumber'>,
  ): Promise<PhoneBookRecord> {
    return this.phoneBookRecordRepository.create(phoneBookRecord);
  }

  @get('/records/count')
  @response(200, {
    description: 'PhoneBookRecord model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PhoneBookRecord) where?: Where<PhoneBookRecord>,
  ): Promise<Count> {
    return this.phoneBookRecordRepository.count(where);
  }

  @get('/records')
  @response(200, {
    description: 'Array of PhoneBookRecord model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PhoneBookRecord, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PhoneBookRecord) filter?: Filter<PhoneBookRecord>,
  ): Promise<PhoneBookRecord[]> {
    return this.phoneBookRecordRepository.find(filter);
  }

  @patch('/records')
  @response(200, {
    description: 'PhoneBookRecord PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PhoneBookRecord, {partial: true}),
        },
      },
    })
    phoneBookRecord: PhoneBookRecord,
    @param.where(PhoneBookRecord) where?: Where<PhoneBookRecord>,
  ): Promise<Count> {
    return this.phoneBookRecordRepository.updateAll(phoneBookRecord, where);
  }

  @get('/records/{id}')
  @response(200, {
    description: 'PhoneBookRecord model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PhoneBookRecord, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(PhoneBookRecord, {exclude: 'where'}) filter?: FilterExcludingWhere<PhoneBookRecord>
  ): Promise<PhoneBookRecord> {
    return this.phoneBookRecordRepository.findById(id, filter);
  }

  @patch('/records/{id}')
  @response(204, {
    description: 'PhoneBookRecord PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PhoneBookRecord, {partial: true}),
        },
      },
    })
    phoneBookRecord: PhoneBookRecord,
  ): Promise<void> {
    await this.phoneBookRecordRepository.updateById(id, phoneBookRecord);
  }

  @put('/records/{id}')
  @response(204, {
    description: 'PhoneBookRecord PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() phoneBookRecord: PhoneBookRecord,
  ): Promise<void> {
    await this.phoneBookRecordRepository.replaceById(id, phoneBookRecord);
  }

  @del('/records/{id}')
  @response(204, {
    description: 'PhoneBookRecord DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.phoneBookRecordRepository.deleteById(id);
  }
}
