async function app_Main() {
    const RobloxAPI = require("custom-robloxapi")

    let RobloxUserInfo = await RobloxAPI.getInfoFromUsername("ROBLOX")
    if (RobloxUserInfo.error == true) { return console.log("Error catched: " + RobloxUserInfo.message) }
    if (RobloxUserInfo == "Invalid username") { return console.log("Provided username is invalid!") }

    console.log(RobloxUserInfo.Username)
}
app_Main()