async function main_App() {
    const RobloxAPI = require("custom-robloxapi")

    let RobloxUserInfo = await RobloxAPI.getInfoFromUsername("ROBLOX")
    console.log(RobloxUserInfo.Username)
}
main_App()