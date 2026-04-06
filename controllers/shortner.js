// const {nanoid} = require('nanoid');
const URL = require('../models/url');
const { models } = require('mongoose');

function schemaCheck(req,res){
    if(!req.body || !req.body.url){
        return {err : 'NO URL PRESENT'};
    }
    let request = req.body.url.trim();

    if(!request.startsWith('http://') && !request.startsWith('https://'))
    {
        request = 'https://' + request;
    }
    
    if(request.length <= 3){
        return {err : 'INVALID URL'};
    }
    return {data: request};
}

async function createShortUrl(req,res){
    const request = schemaCheck(req);
    if(request.err){
        return res.status(400).send({err: request.err});
    }

    try{
        const { nanoid } = await import('nanoid');
        const shortUrl = nanoid(8);
        await URL.create({
            shortId: shortUrl,
            redirectUrl: request.data,
        })
    }catch(err){
        return res.send(500).send('Server error');
    }
    return res.send(shortUrl);
}

module.exports = {createShortUrl};
