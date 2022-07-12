const fs = require("fs");
const path = require("path");

function logMiddleware (req, res, next) {

    let logPathFile = path.resolve(__dirname, "../logs/userLogs.txt")
    console.log("logPathFile")
    console.log(logPathFile)

    fs.appendFileSync(logPathFile, "El usuario ingresó a la ruta:" + req.url + "\n");
    next();
}

module.exports = logMiddleware;