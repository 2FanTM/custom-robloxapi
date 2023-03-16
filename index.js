const axios = require("axios")

async function function_getUserInfoFromUsername(Username) {
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

async function function_getUserInfoFromID(UserID) {
    let response

    if (!UserID) return { error: true, message: `UserID is undefined.` }

    await axios.get("https://users.roblox.com/v1/users/" + UserID, {
    }).then(async function (get_Response) {

        if (!get_Response.data) return response = { error: true, message: `UserID is undefined.` }

        response = {
            UserID: get_Response.data.id,
            Username: get_Response.data.name,
            hasVerifiedBadge: get_Response.data.hasVerifiedBadge,
            displayName: get_Response.data.displayName,
            externalAppDisplayName: get_Response.data.externalAppDisplayName,
            isBanned: get_Response.data.isBanned,
            CreatedAt: get_Response.data.created,
            Description: get_Response.data.description,
            error: false,
        }

    }).catch(async function (error) {

        if (error.response.data.errors[0].message == "NotFound") {
            return response = { error: true, message: `Invalid UserID` }
        }

        if (error.data.errors[0])
            response = { error: true, message: `${error}` }
    });

    return response
}

exports.getUserInfoFromUsername = async function (Username) {
    return await function_getUserInfoFromUsername(Username)
}

exports.getUserInfoFromID = async function (UserID) {
    return await function_getUserInfoFromID(UserID)
}