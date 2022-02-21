const path = require('path');
const mainControllers = {

    index:  (req, res)=>{
        res.sendFile(path.resolve(__dirname,'../views/home.html'));
    }
}
module.exports= mainControllers;