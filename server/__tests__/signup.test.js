/* eslint-disable no-undef */
import mongoose from 'mongoose';
import superset from 'supertest';
import server from '../src/server';
// import User from '../src/models/user';

const request = superset(server);
const databaseName = 'signuptest';
const urlEndpoint = '/wenote/api/v1/user';

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  mongoose.connect(url, { useNewUrlParser: true });
});

it('should create a new user', async (done) => {
  const res = await request.post(`${urlEndpoint}/signup`).send({
    fullname: 'John Doe',
    email: 'devaze007@gmail.com',
    password: 'incorrect',
  });
  expect(res.status).toBe(201);
  expect(typeof res.text).toBe('string');
  done();
});

it('should login a user with correct credentials', async (done) => {
//   const user = new User({
//     fullname: 'joe don',
//     email: 'devaze007@gmail.com',
//   });
  const res = await request.post(`${urlEndpoint}/login`).send({
    email: 'devaze007@gmail.com',
    password: 'incorrect',
  });
  expect(res.status).toBe(200);
  expect(typeof res.text).toBe('string');
  done();
});

async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  // eslint-disable-next-line no-restricted-syntax
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    // eslint-disable-next-line no-await-in-loop
    await collection.deleteMany();
  }
}

afterEach(async () => {
  await removeAllCollections();
});
