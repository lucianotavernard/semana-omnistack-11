import request from 'supertest'

import app from '../../src/app'
import connection from '../../src/database/connection'
import generateToken from '../../src/utils/generateToken'
import generateUniqueId from '../../src/utils/generateUniqueId'

describe('SESSION', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterEach(async () => {
    await connection.destroy();
  });

  it('should response the POST method Session', async () => {
    const ongPayload = {
      id: generateUniqueId(),
      name: 'ONG',
      email: 'ong@org.com',
      whatsapp: '84999999999',
      city: 'Natal',
      uf: 'RN',
    }

    const [ong] = await connection('ongs').insert(ongPayload)

    const sessionPayload = {
      id: ong.id
    }

    await request(app)
      .post('/session')
      .send(sessionPayload)
      .expect('Content-Type', /json/)
      .expect(400)
  });
});
