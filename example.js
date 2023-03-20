async function example_UserInfoFromUsername() {
    const RobloxAPI = require("custom-robloxapi") // 2. Loading Module

    let getUserInfoFromUsername = await RobloxAPI.getUserInfoFromUsername("ROBLOX") // 3. Requesting user info with ROBLOX username.

    // 4. Checking for errors below.
    if (getUserInfoFromUsername.error && getUserInfoFromUsername.message == "Invalid Username") {
        return console.log("Provided Username is invalid!")
    } else if (getUserInfoFromUsername.error) {
        return console.log("Error catched: " + getUserInfoFromUsername.message)
    }

    console.log(getUserInfoFromUsername) // 5. Logging whole info to console.
}
example_UserInfoFromUsername() // 1. Calling function first.

async function example_UserRankInfo() {

    const RobloxAPI = require("custom-robloxapi") // 2. Loading Module

    // 3. Requesting rank info with ROBLOX UserID + ROBLOX GroupID.
    let getUserRankInGroupFromID = await RobloxAPI.getUserRankInGroupFromID({ UserID: "1", GroupID: "7" }) 

    // 4. Checking for errors below.
    if (getUserRankInGroupFromID.error && getUserRankInGroupFromID.message == "Invalid UserID") {
        return console.log("Provided UserID is invalid!")
    } else if (getUserRankInGroupFromID.error) {
        return console.log("Error catched: " + getUserRankInGroupFromID.message)
    } else if (getUserRankInGroupFromID.error && getUserRankInGroupFromID.message == "GroupID is not a number!") {
        return console.log("Provided GroupID is not a ID")
    } else if (!getUserRankInGroupFromID.Group) {
        return console.log("User is not a member of provided group!")
    }

    console.log(getUserRankInGroupFromID) // 5. Logging whole info to console.
}
example_UserRankInfo() // 1. Calling function.

async function example_UserInfoFromID() {

    const RobloxAPI = require("custom-robloxapi") // 2. Loading Module

    let getUserInfoFromID = await RobloxAPI.getUserInfoFromID("1") // 3. Requesting more user info with ROBLOX UserId.

    // 4. Checking for errors below.
    if (getUserInfoFromID.error && getUserInfoFromID.message == "Invalid UserID") {
        return console.log("Provided UserID is invalid!")
    } else if (getUserInfoFromID.error) {
        return console.log("Error catched: " + getUserInfoFromID.message)
    }

    console.log(getUserInfoFromID) // 5. Logging whole info to console.

}
example_UserInfoFromID() // 1. Calling function.