import jwt from 'jsonwebtoken'

import authConfig from '../config/auth'

export default function generateToken(id) {
  const { secret, expiresIn } = authConfig

  return jwt.sign({ id }, secret, { expiresIn })
}
