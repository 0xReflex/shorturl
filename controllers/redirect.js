const URL = require('../models/url');

function schemaCheck(req){
    if( !req.params.short || req.params.short.length < 6){
        return {err : 'Bad Request'};
    }
    return {short: req.params.short};
}


async function redirectingToUrl(req, res) {
    const request = schemaCheck(req);

    if(request.err){
        return res.status(400).json({err:'Bad request'});
    }

    try{
        const result = await URL.findOne({shortId : request.short});
        if(!result){
            return res.status(404).json({err: 'URL not found'});
        }
        result.clicks += 1;
        await result.save();

        return res.redirect(result.redirectUrl);
    }catch(err){
        return res.status(500).json({err:'server error'});
    }
}

module.exports = {
    redirectingToUrl,
}