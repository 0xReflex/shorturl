const express = require('express');
const router = express.Router();
const {createShortUrl} = require('../controllers/shortner');

// saving the URL
router.post('/',createShortUrl);



// Deleting the already made URL
// router.delete('/:short', (req, res) =>{
//     const found = arr.findIndex( c => c.id === parseInt(req.params.short, 10));

//     if(found === -1)
//     {
//         return res.status(200).send('Does Not exist');
//     }
//     arr.splice(found, 1);
//     return res.status(200).send('Deleted');

// })


module.exports = router;