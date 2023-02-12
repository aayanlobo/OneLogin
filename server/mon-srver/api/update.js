const {updateMongo} = require("../mongoUpdate.js");
export default function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body);
    } else {
        res.send("try post");
    }
}
  