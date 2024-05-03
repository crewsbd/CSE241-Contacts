const swagger = require('swagger-autogen')();

const document = {
  info: {
    title: 'Contacts API',
    description: 'An API to perform CRUD operations on a contacts database.',
  },
  host: 'cse341-contacts-93ok.onrender.com',
  schemes: ['https'],
  definitions: {
    Contact: {
      firstName: 'First',
      lastName: 'Last',
      email: 'a@b.com',
      favoriteColor: 'Red',
      birthday: 'Now',
    },
  },
};

swagger('../swagger/swagger-document.json', ['../routes/index.js'], document);
