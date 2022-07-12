const fs = require('fs');
const path = require('path');

const controller = {
    dashboard: (req, res) => {
        let userQuery = req.query.user;
        res.send("Hola Admin:" + userQuery)
        

    }
}

module.exports = controller;