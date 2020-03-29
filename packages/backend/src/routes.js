import express from 'express'

import OngController from './app/controllers/OngController'
import IncidentController from './app/controllers/IncidentController'
import ProfileController from './app/controllers/ProfileController'
import SessionController from './app/controllers/SessionController'

import OngStoreValidation from './app/validators/OngStore'
import SessionStoreValidation from './app/validators/SessionStore'
import IncidentIndexValidation from './app/validators/IncidentIndex'
import IncidentStoreValidation from './app/validators/IncidentStore'
import IncidentDeleteValidation from './app/validators/IncidentDelete'

import authMiddleware from './app/middlewares/auth'

const routes = express()

routes.post('/session', SessionStoreValidation, SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngStoreValidation, OngController.create)

routes.use(authMiddleware)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentIndexValidation, IncidentController.index)
routes.post('/incidents', IncidentStoreValidation, IncidentController.create)

routes.delete(
  '/incidents/:id',
  IncidentDeleteValidation,
  IncidentController.delete
)

export default routes
