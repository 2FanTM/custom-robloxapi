## USAGE

```js
async function main_App() {
    const RobloxAPI = require("custom-robloxapi")
    
    let RobloxUserInfo = await RobloxAPI.getInfoFromUsername("ROBLOX")

    console.log(RobloxUserInfo.Username)
}
main_App()
```

## OBJECTS

```
# Username         : Username in ROBLOX.
# UserID           : Id in ROBLOX.
# hasVerifiedBadge : State in ROBLOX.
# displayName      : Display name in ROBLOX.
```