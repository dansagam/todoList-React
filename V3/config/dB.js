const mongoose = require("mongoose");


const seedDB = async = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
        useCreateIndex: true,
    }).then(() => {
        console.log('💻 CONNECTED TO DB successfully')
    })
    .catch ((err) => {
        console.log(`Error: ${err.message}`.red)
        process.exit(1)
    });

}