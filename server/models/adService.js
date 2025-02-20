const ntlm = require('express-ntlm');
const ActiveDirectory = require('activedirectory2')
const adConfig = require('../config/adConfig')


exports.getUserDetailsAD = (req, res) => {
    const ad = new ActiveDirectory(adConfig)

    if (!req.ntlm) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const username = req.ntlm.UserName; // 🔥 Отримуємо ім'я користувача з NTLM
    const domain = req.ntlm.DomainName; // 🔥 Отримуємо домен користувача
    const ouPathGroup = "HelpDesk (Nemiroff)"

    console.log(`User authenticated: ${domain}\\${username}`);

    // 🔹 Перевіряємо чи користувач існує в Active Directory
    ad.findUser(username, (err, user) => {
        if (err) {
            console.error("Помилка при отриманні груп:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        if (!user) {
             return res.json({ message: "Користувача не знайдено" });
        }

        ad.isUserMemberOf(username, ouPathGroup, (err, isMember) => {
            if (err) return;
            res.json({
                username: user.sAMAccountName,
                fullName: user.displayName,
                email: user.mail,
                department: user.department,
                group: ouPathGroup,
                isMember: isMember,
            });
        })
    

        // ad.isUserMemberOf(username, groupName, (err, isMember) => {
        //     if (err) {
        //         console.error('Error searching for user in AD:', err);
        //         return res.status(500).json({ error: "Internal Server Error" });
        //     }
        //     // 🔹 Відправляємо відповідь
            
            
        // })
    });
}

exports.getUserGroupAD = (req, res) => {
    if (!req.ntlm) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const username = req.ntlm.UserName


}