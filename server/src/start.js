import mongoose from 'mongoose';
import server from './server';

const PORT = 5000 || process.env.PORT;

// Db connection data
const dbUser = process.env.dbUsername;
const { dbPassword } = process.env;
const dbURI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0-2ebjr.mongodb.net/seamsville?retryWrites=true&w=majority`;

const startServer = async () => {
  if (process.env.NODE_ENV === 'development') {
    // Databae connection
    await mongoose.connect('mongodb://localhost:27017/wenote', { useNewUrlParser: true })
      .then(() => {
        console.log('app now listening to development db');
      }).catch((err) => {
        console.log(err);
      });
  }
  if (process.env.NODE_ENV === 'production') {
    // Databae connection
    await mongoose.connect(dbURI, { useNewUrlParser: true })
      .then(() => {
        console.log('app now listening to production database');
      }).catch((err) => {
        console.log(err);
      });
  }
  server.listen(PORT, () => {
    console.log(`app now listening to port ${PORT}`);
  });
};

startServer();
