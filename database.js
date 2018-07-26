import mongoose from 'mongoose';

const serverUrl = 'localhost:27017/test';
const mongoOptions = {
  useNewUrlParser: true,
};

class Database {
  constructor() {
    return this._connect();

  }
  _connect() {
    return mongoose.connect(`mongodb://${serverUrl}`, mongoOptions)
      .then(() => {
        console.log('Database connection successful');
      }, () => {
        console.error('Database connection error');
      });
  }
  _close() {
    console.log('====================================');
    console.log('Connection closed');
    mongoose.connection.close();
    console.log('====================================');
  }
}

export default new Database();
