const Entity = require('../models/user');

exports.getAll = (req, res) => {
  Entity.getAll((error, data) => {
		data ? res.status(200).json(data)
				 : res.status(404).json({msg:`There's not record at database, ${error}`})
  })
}

exports.getOne = ({params:{id}}, res) => {
  Entity.getOne(id,(error, data) => {
		console.info(data)
    data ? res.status(200).json(data)
				 : res.status(404).json({msg:`There's not record at database, ${error}`})
  })
}

exports.add = ({body}, res) => {
	Entity.add(body, (error,data) => {
		data ? res.status(200).json(data)
				 : res.status(404).json({msg:`Error: ${error}`})
	})
}

exports.update = ({body, params:{id}}, res) => {
	Entity.update(body, id, (error,data) => {
		data ? res.status(200).json(`Updated success: ${data.msg.message}`)
				 : res.status(404).json({msg:`Error: ${error}`})
	})
}

exports.destroy = ({params:{id}}, res) => {
	console.info(id)
	Entity.destroy(id, (error, data) => {
		data ? res.status(200).json(`Destroy success: ${data.msg.affectedRows}`)
				 : res.status(404).json({msg:`Error: ${error}`})
	})
}