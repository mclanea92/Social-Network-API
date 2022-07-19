
// creating the server to run though insomina
const express = require('express');
const routes = require('./routes');
const db = require('./config/connection');

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
})