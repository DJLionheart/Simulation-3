require('dotenv').config();
const express = require('express')
    , massive = require('massive')
    , ctrl = require('./controllers');


const app = express();


app.use(express.json());

massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db)
}).catch(err => console.log(err));


app.post('/api/register', ctrl.register);

app.post('/api/login', ctrl.login);

app.get('/api/posts/:id', ctrl.getPosts);

const port = process.env.YE_OLDE_PORTE
app.listen(port, () => { console.log(`Ye olde server doth lend an ear at porte ${port}, my lord!`);
})