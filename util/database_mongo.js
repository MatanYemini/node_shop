// // const MongoClient = require('mongodb').MongoClient;
// // const uri = 'mongodb+srv://Yemini:316386366@clusternode-gbgoy.mongodb.net/test?retryWrites=true&w=majority';
// // const client = new MongoClient(uri, {useNewUrlParser: true});

// // const mongoConnect = (callback) => {
// //     client.connect()
// //     .then(client => {
// //         console.log('Connected');
// //         callback(client);
// //     })
// //     .catch(err => {
// //         console.log(err);
// //     });
// // };

// // module.exports = mongoConnect;

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = (callback) => {
//     MongoClient.connect('mongodb+srv://Yemini:316386366@clusternode-gbgoy.mongodb.net/test?retryWrites=true&w=majority')
//     .then(client => {
//         console.log('Connected!');
//         _db = client.db('test');
//         callback();
//     })
//     .catch(err => {
//         console.log(err);
//         throw err;
//     });
// };

// const getDb = () => {
//     if(_db) {
//         return _db;
//     }
//     throw 'No Database Found';
// };

// module.exports.mongoConnect = mongoConnect;
// module.exports.getDb = getDb;
