const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('<h1>Hola Mundo</h1> <br> <p>Grupo6: Jacobo Frank, Savero Guillermo, Zevallos Araccelli</p>'))

app.listen(3000);
console.log('Server on port 3000');