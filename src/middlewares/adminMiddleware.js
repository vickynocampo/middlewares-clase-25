
function adminMiddleware(req, res, next) {
    let queryUser = req.query.user;
    let adminUsers = ["Ada", "Greta", "Vim", "Tim"];

    /*const adminUsersLowerCase =  adminUsers.map((usuario) => usuario.toLowerCase())*/

    if (adminUsers
        .map((usuario) => usuario.toLowerCase())
        .includes(queryUser.toLowerCase())
    ) {
        next();
    } else {
        res.send("No tienes los privilegios para ingresar")
    };

    /*let isUserFinded = false;
    for (let i = 0; i < adminUsers.length; i++) {
        if (adminUsers[i].toLowerCase() === queryUser.toLowerCase()) {
            isUserFinded = true;
        }
    }
    if (isUserFinded) {
        next();
    } else {
        res.send("No tienes los privilegios para ingresar")
    }*/
}

module.exports = adminMiddleware;