## OBJECTS

```
# Username         : Username in ROBLOX.
# UserID           : Id in ROBLOX.
# hasVerifiedBadge : State in ROBLOX.
# displayName      : Display name in ROBLOX.
```

## EXAMPLE

```js
async function app_Main() {
    const RobloxAPI = require("custom-robloxapi")

    let RobloxUserInfo = await RobloxAPI.getInfoFromUsername("ROBLOX")
    if (RobloxUserInfo.error) { return console.log("Error catched: " + RobloxUserInfo.message) }
    if (RobloxUserInfo == "Invalid username") { return console.log("Provided username is invalid!") }

    console.log(RobloxUserInfo)
}
app_Main()
```

## CHANGES

```
# Added error handler for undefined username.
# Some changes for example module.
```