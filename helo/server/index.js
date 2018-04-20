require('dotenv').config();
const express = require('express')
    , massive = require('massive')
    , session = require('express-session')
    , ctrl = require('./controllers');


const app = express();


app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db)
}).catch(err => console.log(err));


app.post('/api/register', ctrl.register);

app.post('/api/login', ctrl.login);

app.get('/api/posts/', ctrl.getPosts);

app.post('/api/auth/logout', ctrl.logout)

const port = process.env.YE_OLDE_PORTE
app.listen(port, () => { console.log(`Ye olde server doth lend an ear at porte ${port}, my lord!`);
})