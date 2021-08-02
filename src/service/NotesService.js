const db = require('../database/connection')

module.exports = {

	async get() {
		try {
			const notes = await db('notes')
			return notes
		} catch (error) {
			console.error(error)
		}
	},
	/* 
    get(id){
        db('notes')
        .where('id', id)
        .then(notes => { return notes[0] })
        .catch(error => { console.error(error) })
    },
 */
	async del(id) {
		const rows = await db('notes').where('id', id).del()
		return rows
	}
}