const controller = require('./controller');

module.exports = (req,res) => {
    const mainUrl = req.url.split('/')[1];
    const optUrl = req.url.split('/')[2];    
    const method = req.method;
    const isGetById = method == 'GET' && optUrl !== 'all';
    const isDeleteById = method == 'DELETE' && optUrl !== 'all';
    try {
        return controller[method][mainUrl][isGetById || isDeleteById ? 'one' : optUrl](req,res);
    } catch (err) {
        return res.status(400).json('Route can not found for this URL');
    }
}

// 
