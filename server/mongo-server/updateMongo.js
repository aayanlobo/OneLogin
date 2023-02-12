const { MongoClient } = require("mongodb");
const updateMongo =  async (usr, pswdArr) => {
    let mongodb_uri="mongodb+srv://admin:admin@cluster0.y0zrrdl.mongodb.net/?retryWrites=true&w=majority";
    const { MongoClient } = require("mongodb");
    const client = new MongoClient(mongodb_uri);

    await client.connect();
    const db = client.db("Users");
    const collection = db.collection("Users");
    const data = {}; data["pswdArr"] = pswdArr; data["usr"]=usr;
    console.log(await collection.insertOne(data));
    client.close();
}

module.exports = {
    updateMongo
}