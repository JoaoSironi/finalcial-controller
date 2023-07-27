const express = require('express');
const routes = require('./routes');

const app = express();

const PORT = process.env.API_PORT || 3333;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});