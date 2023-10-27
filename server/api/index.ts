import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

import postRoutes from '../src/routes/post.routes';
import projectRoutes from '../src/routes/project.routes';
import userRoutes from '../src/routes/user.routes';
import orderRoutes from '../src/routes/order.routes';


const app =  express();
app.use(express.json());
app.use(function (req, res, next) {
  // TODO: настроить cors
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// Routes
app.use('/api', postRoutes);
app.use('/api', projectRoutes);
app.use('/api', userRoutes);
app.use('/api', orderRoutes);

// Импорт .env
const PORT = Number(process.env.PORT);
const DB_URL = process.env.DB_URL;
const DEV_DB_URL = process.env.DEV_DB_URL;

if(!PORT){
  throw new Error('PORT is undefined');
}
if(!DB_URL){
  throw new Error('DB_URL is undefined');
}
if(!DEV_DB_URL){
  throw new Error('DEV_DB_URL is undefined');
}

// Подключение к БД
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connect to MongoDB");
  })
  .catch((error) => {
    console.log(`DB connection error: ${error}`);
  });

// Запуск сервера
app.listen(PORT,  () => {
  console.log(`Server has been started on ${PORT} port`);
});
app.on('error', (error) => {
  console.log(error);
})