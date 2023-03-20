const axios = require("axios")

function isAllDigits(inputString) {
    return /^\d+$/.test(inputString);
}

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

async function function_getUserRankInGroupFromID(UserID, GroupID) {
    let response

    await axios.get("https://groups.roblox.com/v2/users/" + UserID + "/groups/roles", {
    }).then(async function (get_Response) {

        if (!isAllDigits(GroupID)) {
            return response = { error: true, message: `GroupID is not a number!` }
        }

        let numGroupID = parseInt(GroupID)

        const groupObject = await (get_Response.data.data).find(x => x.group.id === numGroupID)

        if (!response && groupObject) {
            response = {
                Group: {
                    id: groupObject.group.id,
                    Name: groupObject.group.name,
                    memberCount: groupObject.group.memberCount,
                    hasVerifiedBadge: groupObject.group.hasVerifiedBadge,
                },
                Role: {
                    id: groupObject.role.id,
                    Name: groupObject.role.name,
                    Rank: groupObject.role.rank,
                },
                error: false,
            }
        }else if (!response) {
            response = {
                Group: null,
                Role: "Guest",
                error: false,
            }
        }

        return response

    }).catch(async function (error) {
        console.log(error)

        if (error.response && error.response.data.errors[0].message == "The user is invalid or does not exist.") {
            return response = { error: true, message: `Invalid UserID` }
        }

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

exports.getUserRankInGroupFromID = async function ({ UserID, GroupID }) {
    if (!UserID) return { error: true, message: `UserID is undefined.` }
    if (!GroupID) return { error: true, message: `GroupID is undefined.` }

    return await function_getUserRankInGroupFromID(UserID, GroupID)
}