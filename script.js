const shortner = require('./routes/shortner');
const redirecting = require('./routes/redireting');
const {connectToMongoDB} = require('./connect')
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const app = express();

dotenv.config();

connectToMongoDB(process.env.MONGODB_URI)
    .then(()=>{console.log('connected to mongodb')});

app.use(cors());
app.use(express.json());


app.use('/v1/', shortner);
app.use('/', redirecting);

app.listen(3000, ()=>{
    console.log('server started at port 3000');
})
