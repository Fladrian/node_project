const Query = require('./utils/query.util')
const Validate = require('./utils/validate.util')
const table = "users"

const get = `SELECT * FROM ${table} `
const getOne = `SELECT * FROM ${table} WHERE user_id = ?`
const edit = `UPDATE ${table} SET ? WHERE user_id = ?`
const insert = `INSERT INTO ${table} SET ?`
const destroy = `DELETE FROM ${table} WHERE user_id = ?;`


module.exports = Model_User = {

	async getAll(cb) {
		const data = await Query.find(get)
		data ? cb(undefined, data)
				 : cb(error, undefined)
	},
	async getOne(id, cb) {
		const data = await Query.findOne(getOne, id)
		data ? cb(undefined, data)
			: cb(error, undefined)
	},
	async add(body, cb) {
		const fields = ['user_name']
		const {valid,error} = await Validate.fieldValidate(body, fields)
		if(valid){
			const data = await Query.save(insert,body)
			cb(undefined,{insertId: data.insertId})
		}else if(error){
			cb(error,undefined)
		}
	},
	async update(body, id,  cb) {
		const data = await Query.update(edit, body, id)
		data ? cb(undefined, {msg: data})
				 : cb(error, undefined)
	},
	async destroy(id, cb) {
		const data = await Query.destroy(destroy, id)
		console.info(data)
		data ? cb(undefined, {msg: data})
				 : cb(error, undefined)
	}

}
