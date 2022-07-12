const fs = require('fs');
const path = require('path');

const controller = {
    dashboard: (req, res) => {
        let queryUser = req.query.user;
        res.send("Hola Admin:" + queryUser)
    }
}

module.exports = controller;