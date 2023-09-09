const mongoose = require('mongoose')

module.exports = async() =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/url')
        console.log('database connection');
    } catch (error) {
        console.log(error);
    }
}