import request from 'supertest'

import app from '../../src/app'
import connection from '../../src/database/connection'

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const ongPayload = {
      name: "Casa da Vovózinha",
      email: "contato@vovzinha.org",
      whatsapp: "84988888888",
      city: "Natal",
      uf: "RN",
    }

    const response = await request(app)
      .post('/ongs')
      .send(ongPayload);

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
