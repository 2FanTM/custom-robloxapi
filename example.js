async function app_Main() {
    const RobloxAPI = require("custom-robloxapi") // 2. Loading Module

    let getUserInfoFromUsername = await RobloxAPI.getUserInfoFromUsername("ROBLOX") // 3. Requesting user info with ROBLOX username.

    // 4. Checking for errors below.
    if (getUserInfoFromUsername.error && getUserInfoFromUsername.message == "Invalid Username") {
        return console.log("Provided Username is invalid!")
    } else if (getUserInfoFromUsername.error) {
        return console.log("Error catched: " + getUserInfoFromUsername.message)
    }

    let getUserInfoFromID = await RobloxAPI.getUserInfoFromID(getUserInfoFromUsername.UserID) // 5. Requesting more user info with ROBLOX UserId.

    // 6. Checking for errors below.
    if (getUserInfoFromID.error && getUserInfoFromID.message == "Invalid UserID") {
        return console.log("Provided UserID is invalid!")
    } else if (getUserInfoFromID.error) {
        return console.log("Error catched: " + getUserInfoFromID.message)
    }

    console.log(getUserInfoFromID) // 7. Logging whole info to console.
}
app_Main() // 1. Calling function first.