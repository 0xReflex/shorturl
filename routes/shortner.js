const express = require('express');
const router = express.Router();

const arr = [];

// saving the URL
router.post('/v1/', (req, res) =>{
    const request = req.body.url.trim();
    if(request.length <= 3 || request.length == 0)
    {
        return res.status(400).send('There is something wrong with given url');
    }

    const parameter = {
        id: arr.length + 1,
        url: request
    }

    arr.push(parameter);
    console.log(`${request}`);
    res.json(parameter);
})


// Deleting the already made URL
router.delete('/:short', (req, res) =>{
    const found = arr.findIndex( c => c.id === parseInt(req.params.short, 10));

    if(found === -1)
    {
        return res.status(200).send('Does Not exist');
    }
    arr.splice(found, 1);
    return res.status(200).send('Deleted');

})


// Re directing the url with 
router.get('/:short', (req, res) => {
    const link = parseInt(req.params.short, 10); // the link
   
    if(link < arr.length && link > 0){
        console.log(`The url is ${arr[link].url}`);
        res.redirect(arr[link].url);
    }else{
        return res.status(400).send('Wrong url');
    }
})


module.exports = router;
