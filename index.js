const axios = require("axios")

async function func(Username) {
    let response

    await axios.post("https://users.roblox.com/v1/usernames/users", {
        usernames: [Username],
    }).then(async function (get_Response) {
        response = {
            Username: get_Response.data.data[0].requestedUsername,
            hasVerifiedBadge: get_Response.data.data[0].hasVerifiedBadge,
            UserID: get_Response.data.data[0].id,
            displayName: get_Response.data.data[0].displayName
        }
    }).catch(async function (error) {
        console.log(error)
    });

    return response
}

exports.getInfoFromUsername = async function (Username ) {
    return await func(Username)
}