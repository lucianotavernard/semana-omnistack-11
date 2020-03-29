import knex from 'knex'
import { test, development } from '../../knexfile'

const config = process.env.NODE_ENV === 'test' ? test : development

const connection = knex(config)

export default connection
