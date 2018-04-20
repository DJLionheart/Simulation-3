select * from users u JOIN posts p on u.username = p.author
where posttitle like $1;