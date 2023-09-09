const shortid = require('shortid')
const Url = require('../models/url')

module.exports.hadnleShortUrl = async(req,res)=>{
    try {
        const {url} = req.body
        const shortID = shortid.generate()
console.log(shortID);
console.log(url);
        const URL =  await Url.create({
            shortId :shortID,
            redirectUrl:url,
            visitHistory:[]
        })
        res.status(201).json(URL)
    } catch (error) {
        console.log(error);
    }
}
module.exports.getSingleUrl = async(req,res)=>{
    try {
        const url = await Url.findById(req.params.id)
        if(!url){
            res.status(404).json({ message:"Invalid URL"})
        }
        res.status(201).json(url)
    } catch (error) {
        console.log(error);
    }
}