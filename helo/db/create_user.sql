INSERT INTO users (username, userpass, profilepic)
VALUES($1, $2, $3)
RETURNING *;