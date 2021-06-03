import express from 'express'
const app = express()
const port = 2100

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Rotas
import bookRoutes from './routes/book'
app.use('/api/books', bookRoutes)

import userRoutes from './routes/user'
app.use('/api/users', userRoutes)

import reviewRoutes from './routes/review'
app.use('/api/reviews', reviewRoutes)

app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`)
})