async function maine(params) {
    const RobloxAPI = require("custom-robloxapi")

    let RobloxUserInfo = await RobloxAPI.getInfoFromUsername(" asdasd asd asa s")
    if (RobloxUserInfo.error == true) { return console.log("Error catched: " + RobloxUserInfo.message) }
    if (RobloxUserInfo == "Invalid username") { return console.log("Provided username is invalid!") }

    console.log(RobloxUserInfo.Username)
}
maine()