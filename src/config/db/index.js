const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/pqshop');
        console.log('connect sucessfully!!!')
    }
    catch(error)
    {
        console.log('connect failure!!!')
    }
}

module.exports = {connect}
