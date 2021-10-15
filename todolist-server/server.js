const cors = require('cors');
const express = require('express');
const app = express();
const pool = require('./config');
const todoRoutes = require('./routes/todo-routes');

app.use(cors());
app.use(express.json());

app.use('/api', todoRoutes);

app.listen(process.env.PORT || 8000, ()=> {
    console.log("server is online!");
});