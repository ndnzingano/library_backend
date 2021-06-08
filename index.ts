import express from 'express'
import { validateToken } from './controller/userController'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi  from 'swagger-ui-express'
const app = express()
const port = 2100

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Bookster API',
      description: 'Bookster API information',
      contact: {
        name: 'Nadine Zíngano'
      },
      version: '1.0',
      servers: ['http://localhost:2100']
    }
  },
  apis: ['index.js', './routes/*ts']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 


import auth from './routes/auth'
app.use('/api/auth', auth)

//Middleware 
app.use(validateToken)

// Routes
import bookRoutes from './routes/book'
app.use('/api/books', bookRoutes)

import userRoutes from './routes/user'
app.use('/api/users', userRoutes)

import reviewRoutes from './routes/review'
app.use('/api/reviews', reviewRoutes)

app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`)
})