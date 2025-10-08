//connecting mongodb
// const mongodb = require('mongodb'); -r for mongodb
// const MongoClient = mongodb.MongoClient; //driver -r for mongodb
// const ObjectID = mongodb.ObjectId; -r for mongodb

//mongoose
const mongoose = require('mongoose');

// let database; -r for mongodb

async function getDatabase() {
    // const client = await MongoClient.connect('mongodb://127.0.0.1:27017')
    // database = client.db('library');

    // if(!database) {
    //     console.log("Dtabase not connected");
    // }
    // return database; -r for mongodb
    mongoose.connect('mongodb://127.0.0.1:27017/library')
}

module.exports = {
    getDatabase,
    ObjectID
}