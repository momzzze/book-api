const express = require('express');
const router = require('./routes');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGODB_URI;

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'Book API',
          version: '1.0.0',
          description: 'API documentation Book API',
        },
        servers: [
          {
            url: 'https://book-api-05ci.onrender.com/',            
            description: 'Production server',
          },
          {
             url: 'http://localhost:3000',
             description: 'Development server',
          }
        ],        
    },
    apis: ['./routes.js','./controllers/*.js','./models/*.js'],
}
const specs=swaggerJsDoc(options);

const app = express();
app.use('/', swaggerUI.serve, swaggerUI.setup(specs));

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
});

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

mongoose.connect(uri).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB', err);
});
