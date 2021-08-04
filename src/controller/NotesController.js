const { post } = require('../service/NotesService')
const NotesService = require('../service/NotesService')

module.exports = {

	async get(req, res) {
		const notes = await NotesService.get()

		res.json(notes)
	},

	async del(req, res) {
		const id = req.params.noteId
		//Chama a funçao del da classe notes service
		const rows = await NotesService.del(id)
		console.log(`Deleted ${rows} rows`)

		if(rows) {
			res.sendStatus(404)
		} else {
			res.sendStatus(200)
			// res.status(204).send()
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