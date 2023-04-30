/*
@Changes made by Ridho 20223
Improving syntax from old style javascript to ECMA 6
 */

// Main modules
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';


// Route files
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import productRouter from './routes/product.js';

// Initialize Express JS
const app = express();
require('dotenv').config()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);

module.exports = app;
