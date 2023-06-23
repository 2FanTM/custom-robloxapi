const axios = require("axios")

exports.run = async (Username) => {
    let response

    if (!Username) return { error: true, message: `Username is undefined.` }

    await axios.post("https://users.roblox.com/v1/usernames/users", {
        usernames: [Username],
    }).then(async function (get_Response) {

        if (!get_Response.data.data[0]) return response = { error: true, message: `Invalid Username` }

        response = {
            Username: get_Response.data.data[0].requestedUsername,
            hasVerifiedBadge: get_Response.data.data[0].hasVerifiedBadge,
            UserID: get_Response.data.data[0].id,
            displayName: get_Response.data.data[0].displayName,
            error: false,
        }

    }).catch(async function (error) {
        console.log(error)

        response = { error: true, message: `${error}` }
    });

    return response
}