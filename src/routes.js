const routes = require('express').Router()

const NotesController = require('./controller/NotesController')
// const NotesService = require('./service/NotesService')

routes.get('/', NotesController.get)

routes.delete('/:noteId(\d+)', NotesController.del)

routes.post('/', NotesController.post)

routes.put('/:noteId(\d+)', NotesController.put)
/* 
 routes.param('noteId', function(req, res, next, id) {
    NotesService.get(id)
})
*/

module.exports = routes