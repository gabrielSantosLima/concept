const routes = require('express').Router()

const NotesController = require('./controller/NotesController')

routes.get('/', NotesController.get)

routes.delete('/:noteId(\\d+)', NotesController.del)

routes.post('/', NotesController.post)

routes.put('/:noteId(\\d+)', NotesController.put)

module.exports = routes