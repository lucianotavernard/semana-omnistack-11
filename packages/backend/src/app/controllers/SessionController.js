import connection from '../../database/connection'
import generateToken from '../../utils/generateToken'

export default {
  async create(request, response) {

    const { id } = request.body

    const ong = await connection('ongs').where('id', id).select('name').first()

    if (!ong) {
      return response.status(400).json({ error: 'No ONG found with this ID' })
    }

    const token = generateToken(id)

    return response.json({ token, ong })
  },
}
