const mongoose = require('mongoose')

module.exports = async() =>{
    try {
        await mongoose.connect('mongodb+srv://billal:sTVW7vpckkVHuHFV@cluster0.x9zv7hr.mongodb.net/URL?retryWrites=true&w=majority')
        console.log('database connection');
    } catch (error) {
        console.log(error);
    }
}