const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const urls = [];

app.use(cors());
app.use(express.json());



app.post('/url',(req,res) => {
    if(!req.body.url) return res.status(400).send('bad request');
    const ur = {
        id: urls.length + 1,
        url: req.body.url,
    }
    urls.push(ur);
    res.send(ur);
})

app.get('/url/:id', (req,res) =>{
    const ur = urls.find(u => u.id === parseInt(req.params.id));
    if(!ur) return res.status(404).send('some error happened');
    res.redirect(ur.url);
})

app.listen(PORT, ()=>{
    console.log(`started on ${PORT}`);
});