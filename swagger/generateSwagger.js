const swagger = require('swagger-autogen')();

const document = {
    info: {
        title: 'Contacts API',
        description: 'An API to perform CRUD operations on a contacts database.'
    },
    host: 'http://cse341-contacts-93ok.onrender.com'
}

swagger('../swagger/swagger-document.json', [ '../routes/index.js'] );
