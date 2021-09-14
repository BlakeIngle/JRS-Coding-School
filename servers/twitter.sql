drop schema if exists twitter;
CREATE SCHEMA `twitter` DEFAULT CHARACTER SET utf8 ;

-- make the users table (without 'pinnedtweet')
CREATE TABLE `twitter`.`users` (
    id int unique not null auto_increment,
    userName varchar(25) unique not null,
    screenName varchar(50) not null,
    bio varchar(255),
    website varchar(255),
    birthDate Date not null,
    dateJoined Datetime not null DEFAULT (current_date()),
    -- profile pi img 
    -- banner img
    primary key (id)
);

-- make the 'tweets' table
CREATE TABLE `twitter`.`tweets` (
    id int unique not null auto_increment,
    body varchar(140) not null,
    userId int not null,
    dateAndTime datetime not null default now(),
    -- check if 'now()' is global time or system time
    repostCount int not null default 0,
    likeCount int not null default 0,
    replyTo int,
    -- img img,

    primary key (id),
    foreign key (userId) references users(id),
    foreign key (replyTo) references tweets(id)
);
    -- append the 'pinned tweet' col to users
    -- pinnedTweet int -> foreign key in tweet table
alter table twitter.users 
add pinnedTweet int;

alter table twitter.users
add foreign key (pinnedTweet) references tweets(id);

-- make the likes table 
CREATE TABLE `twitter`.`likes` (
    id int unique not null auto_increment,
    userId int not null,
    tweetId int not null,

    primary key (id),
    foreign key (userId) references users(id),
    foreign key (tweetId) references tweets(id)
);

-- make the RT table
CREATE TABLE `twitter`.`reposts` (
    id int unique not null auto_increment,
    userId int not null,
    tweetId int not null,

    primary key (id),
    foreign key (userId) references users(id),
    foreign key (tweetId) references tweets(id)
);

-- make the follows tabls
CREATE TABLE `twitter`.`follows` (
    id int unique not null auto_increment,
    followerId int not null,
    followingId int not null,

    primary key (id),
    foreign key (followerId) references users(id),
    foreign key (followingId) references users(id)
);

