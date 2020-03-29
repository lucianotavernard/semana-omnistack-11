import request from 'supertest'

import app from '../../src/app'
import connection from '../../src/database/connection'
import generateToken from '../../src/utils/generateToken'
import generateUniqueId from '../../src/utils/generateUniqueId'

describe('INCIDENT', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterEach(async () => {
    await connection.destroy()
  })

  it('should be able to create a new INCIDENT', async () => {
    const ongPayload = {
      id: generateUniqueId(),
      name: 'ONG',
      email: 'ong@org.com',
      whatsapp: '84999999999',
      city: 'Natal',
      uf: 'RN',
    }

    const [ong] = await connection('ongs').insert(ongPayload)
    const token = generateToken(ong.id)

    const incidentPayload = {
      title: 'Caso Teste',
      description: 'Detalhes do caso teste',
      value: 130,
    }

    await request(app)
      .post('/incidents')
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .send(incidentPayload)
  })
})
