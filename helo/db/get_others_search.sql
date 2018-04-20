select * from users JOIN posts on users.username = posts.author
where userid <> $1 AND posttitle like $2;