const URL = require('../models/url')

function schemaCheck(req){
    if(!req.params || req.params.short < 6){
        return {err:'Bad Request'};
    }
    return {short: req.params.short};
}

async function liveAnalytics(req,res){
    const request = schemaCheck(req);
    if(request.err){
        res.status(400).json({err:request.err});
    }
    request.short = request.short.trim();
    try{
        const result = await URL.findOne({shortId: request.short});
        if(!request){
            res.send(400).json('Bad Request');
        }
        return res.json({clicks:result.clicks});
    }catch(err){
        return res.status(500).json({err:'Internal Server Error'});
    }
}

module.exports = {
    liveAnalytics,
}