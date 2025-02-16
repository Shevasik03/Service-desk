module.exports = function (req, res, next) {

    const authUser = req.headers[`x-iisnode-auth_user`]
    if (authUser) {
        req.user = authUser.split(`\\`).pop(); 
    }
    next()
}