const NotesService = require('../service/NotesService')

module.exports = {

	async get(req, res) {
		const notes = await NotesService.get()

		res.json(notes)
	},

	async del(req, res) {
		const id = req.params.noteId
		const rows = await NotesService.del(id)
		console.log(`Deleted ${rows} rows`)

		if(rows) {
			res.sendStatus(404)
		} else {
			res.sendStatus(200)
			// res.status(204).send()
		}
	}
}