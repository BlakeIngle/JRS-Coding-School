class Tweet {
    
    id;
    body; // max 256
    user;
    replies;
}

class User {
    id;
    userName;
    screenName;
    bio;
    website;
    birthDate;
    dateJoined;
    pinnedTweet;
    profilePic;
    profileBanner;

    likes;
    tweets;
    following;
}

let user = new User();
let tweet = new Tweet();

tweet.user = user;
user.tweets = [tweet];

console.log(user)