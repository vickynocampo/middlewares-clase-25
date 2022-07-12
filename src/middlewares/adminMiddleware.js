const fs = require("fs");
const path = require("path");

function adminMiddleware(req, res, next) {
    let queryUser = req.query.user;
    let adminUsers = ["Ada", "Greta", "Vim", "Tim"];
   if(adminUsers.includes(queryUser)){
    next();
   }else{ 
    res.send("No tienes los privilegios para ingresar")
   }
}

module.exports = adminMiddleware;