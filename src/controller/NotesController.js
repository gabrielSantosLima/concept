const NotesService = require('../service/NotesService')

module.exports = {
	async get(req, res) {
		const notes = await NotesService.get()

		res.json(notes)
	},

	async del(req, res) {
		const id = req.params.noteId
		const rows = await NotesService.del(id)
		console.log(`Deleted row with id:${id}`)

		if(!rows) {
			res.sendStatus(404)
		} else {
			// res.json(rows)
			res.status(204).send()
		}
	},

	async post(req, res){
		const {title, content} = req.body
		const note = await NotesService.post(title, content);
		res.json(note)
	},

	async put(req, res){
		const id = req.params.noteId
		const {title, content} = req.body
		const note = await NotesService.put(id, title, content)
		res.json(note)
	}
}