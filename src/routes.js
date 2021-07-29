const routes = require('express').Router()

const NotesController = require('./controller/NotesController')

routes.get('/', NotesController.get)

module.exports = routes