const shortner = require('./routes/shortner');
// const redirecting = require('./routes/redirecting.js');


const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


app.use('/', shortner);
// app.use('/', redirecting);

app.listen(3000, ()=>{
    console.log('server started at port 3000');
})
