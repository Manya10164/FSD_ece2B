function getUser(id, callback) {
    setTimeout(() => {
        console.log("User fetched");
        const user = {
            id: id,
            name: "Manya Chahal"
        };
        callback(null, user);
    }, 1000);
}

function getProfile(userId, callback) {
    setTimeout(() => {
        console.log("Profile fetched");
        const profile = {
            id: userId,
            username: "Mishti Gupta"
        };
        callback(null, profile);
    }, 1000);
}

function getPosts(username, callback) {
    setTimeout(() => {
        const posts = ["Post 1", "Post 2", "Post 3"];
        callback(null, posts);
    }, 1000);
}

getUser(1, function (error, user) {
    if (error) {
        console.error(error);
        return;
    }
    
    getProfile(user.id, function (error, profile) {
        if (error) {
            console.error(error);
            return;
        }

        getPosts(profile.username, function (error, posts) {
            if (error) {
                console.error(error);
                return;
            }
            console.log(`Posts fetched ${posts}`);
        });
    });
});
