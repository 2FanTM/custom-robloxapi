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

### getUserRankInGroupFromID
``` 
# Group.id               : ID of ROBLOX group.
# Group.Name             : Name of ROBLOX group.
# Group.memberCount      : Member count of ROBLOX group.
# Group.hasVerifiedBadge : Is ROBLOX group has Verified badge?
# Role.id                : Role id in ROBLOX group.
# Role.Name              : Role name in ROBLOX group.
# Role.Rank              : Role rank in ROBLOX group.
```

## EXAMPLES

### getUserInfoFromUsername Function

```js
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
```

### getUserRankInGroupFromID Function
```js
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
```

### getUserInfoFromID Function
```js
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
```

## CHANGE NOTES

### v1.2.4
```
# Oof its too late, my brain is gone. I fixed something, nvm.
```

### v1.2.3
```
# Added getUserRankInGroupFromID function export info to Objects in README.md file.
```

### v1.2.2
```
# Some changes for better error handling in getUserRankInGroupFromID function.
# Made a change in getUserRankInGroupFromID function to handle string ids.
# Made a handler change for getUserRankInGroupFromID function in example module.
```

### v1.2.1
```
# New endpoint for getting user rank in a group.
# Some changes for example module.
# LICENSE changes woooo
```

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