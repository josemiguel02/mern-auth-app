const app = require('./app')
const db = require('./lib/db');

async function init() {
  try {
    await db.authenticate()
    console.log('⚙️ Successful connection to the database')

    app.listen(app.get('port'))
    console.log(`Server on -> http://localhost:${app.get('port')}`)
  } catch (error) {
    console.log('Wrong connection to the database', error.message)
  }
}

init()
