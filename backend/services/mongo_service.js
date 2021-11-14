const mongoose = require('mongoose');
class Database {
  constructor() {
    this._connect()
  }

_connect() {
     mongoose.connect(`mongodb+srv://ty12:ty12@cluster0.4qwao.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
         console.log('Database connection successful')
       })
       .catch((err) => {
         console.error('Database connection error')
         console.error(err)
       })
  }
}

module.exports = new Database()