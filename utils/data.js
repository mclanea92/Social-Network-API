const username = [
    'mclanea92',
    'test',
    'fake'
  ];
  
  const email = [
    'mclanea92@gmail.com',
    'example@test.com',
    'fakeemail@email.com'
  ];
  
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const getRandomName = () =>
    ` ${getRandomArrItem(username)}`;
  
    const getRandomEmail = () =>
    ` ${getRandomArrItem(email)}`;
  
  
  module.exports = { getRandomName, getRandomEmail};