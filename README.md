## OBJECTS

### getUserInfoFromUsername
``` 
# Username               : Username of ROBLOX user.
# UserID                 : UserID of ROBLOX user.
# hasVerifiedBadge       : Is ROBLOX user has Verified badge?
# displayName            : Display name of ROBLOX user.
```

### getUserInfoFromID
``` 
# UserID                 : UserID of ROBLOX user.
# Username               : Username of ROBLOX user.
# hasVerifiedBadge       : Is ROBLOX user has Verified badge?
# displayName            : Display name of ROBLOX user.
# externalAppDisplayName : Unknown, returns null everytime.
# isBanned               : Is ROBLOX user banned?
# CreatedAt              : Creation Date of ROBLOX user.
# Description            : Description of ROBLOX user.
```


## EXAMPLE

```js
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
```

## CHANGES

### v1.2.0
```
# Added new endpoint to get more user info.
# Now all error handlers now returning "error: true" status. So errors can be handled easily now.
# Some changes for example module.
```

### v1.1.9
```
# Added error handler for undefined username.
# Some changes for example module.
```