CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    userName VARCHAR(40) NOT NULL UNIQUE,
    userPass VARCHAR(25) NOT NULL,
    profilePic TEXT NOT NULL
);

CREATE TABLE posts (
    postId SERIAL PRIMARY KEY,
    postTitle VARCHAR(40) NOT NULL
    author VARCHAR(40) REFERENCES users(userName) NOT NULL,
    postText VARCHAR(140)
    postPicture TEXT
);



INSERT INTO posts (postTitle, author, postText, postPicture)
VALUES('Cool Game!', 'pabloMan', 'Guys, I just started Skyrim. This game is super cool!', 'https://images-na.ssl-images-amazon.com/images/I/91Ky61-HXXL._SL1500_.jpg');

INSERT INTO posts (postTitle, author, postText)
VALUES('Re: Cool Game!', 'koolDude23', 'Awesome man! I havent played it yet!');

INSERT INTO posts (postTitle, author, postText, postPicture)
VALUES('Re: Cool Game!', 'aprilMayJune', 'I dunno... I would rather play Laura Croft...', 'http://www.gameinformer.com/cfs-filesystemfile.ashx/__key/CommunityServer-Components-SiteFiles/imagefeed-featured-crystaldynamics-tomb_2D00_raider-rise/RiseOfTheTombRaider_2D00_12_2D00_7_2D00_17_2D00_610.jpg');
