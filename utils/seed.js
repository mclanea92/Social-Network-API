const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await Thought.deleteMany({});

  await User.deleteMany({});

  const users = [];
  const username = getRandomName();
  const email = getRandomEmail();

  console.log(username);
  console.log(email);

  User.push({
    username,
    email
  });

  await User.collection.insertMany(users);

  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});