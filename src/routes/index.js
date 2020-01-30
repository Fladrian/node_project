const express = require('express')
const route = express.Router()
const controllers = require('../controllers')

/* USERS */
const {	getAll,
				getOne,
				add,
				update,
				destroy } = controllers.users
route.get('/users/', getAll)
route.get('/users/:id', getOne)
route.post('/users/', add)
route.patch('/users/:id', update)
route.delete('/users/:id', destroy)



module.exports = route