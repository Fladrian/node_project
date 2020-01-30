const node_env = process.env.NODE_ENV || 'dev'

const config = {
	"dev": {
		"server": "dev",
		"port": "8888",
		"db": {
			connectionLimit: 5,
			host: '127.0.0.1',
			user: 'root',
			password: '',
			database: 'db_project_node'
		}
	}
}


module.exports = config[node_env];