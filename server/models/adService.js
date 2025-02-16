const ActiveDirectory = require('activedirectory2')
const adConfig = require('../config/adConfig')

const ad = new ActiveDirectory(adConfig)

function getUserDetails(username) {
    return new Promise((resolve, reject) => {
        ad.findUser(username, (err, user) => {
            if (err) return reject(`Помилка запиту до AD: ${err}`);
            if (!user) return reject('Користувача не знайдено');

            ad.isUserMemberOf(username, 'Domain Admins', (err, isMember) => {
                if (err) return reject(`Помилка перевірки групи: ${err}`);
                
                user.role = isMember ? 'admin' : 'user';
                resolve(user)
            })
        })
    })
}

module.exports = {getUserDetails}