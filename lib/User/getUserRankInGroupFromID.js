const axios = require("axios")

exports.run = async (UserID, GroupID) => {
    let response
    let groupsData = []

    await axios.get("https://groups.roblox.com/v2/users/" + UserID + "/groups/roles", {}).then(async function (get_Response) {

        if (GroupID) {
            const groupObject = await (get_Response.data.data).find(x => x.group.id === GroupID)

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
            } else if (!response) {
                response = {
                    Group: null,
                    Role: "Guest",
                    error: false,
                }
            }
        } else {
            get_Response.data.data.forEach(element => {
                groupsData.unshift({
                    Group: {
                        id: element.group.id,
                        Name: element.group.name,
                        memberCount: element.group.memberCount,
                        hasVerifiedBadge: element.group.hasVerifiedBadge,
                    },
                    Role: {
                        id: element.role.id,
                        Name: element.role.name,
                        Rank: element.role.rank,
                    },
                })
            });
            response = groupsData
        }


    }).catch(async function (error) {
        console.log(error.response)

        if (error.response && error.response.data.errors[0].message == "The user is invalid or does not exist.") {
            return response = { error: true, message: `Invalid UserID` }
        }

        response = { error: true, message: `${error}` }
    });

    if(groupsData[0]) response = { data: groupsData, error: false }
    return response
}
