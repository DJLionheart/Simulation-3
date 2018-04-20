module.exports = {

    register: (req, res, next) => {
        const { username, password } = req.body;
        let profilePic = `https://robohash.org/${username}.png`; 
        const db = req.app.get('db');

        db.create_user( username, password, profilePic).then( user => {
            req.session.userid = user[0].userid;
            res.status(200).send(user[0]);
            console.log(req.session);

        }).catch(err => console.log(err));
    },

    login: (req, res, next) => {
        const { username, password } = req.body;
        const db = req.app.get('db');

        db.find_user(username, password).then( user => {
            req.session.userid = user[0].userid;
            console.log(req.session);
            
            res.status(200).send(user[0])
        }).catch(err => console.log(err));
    },

    getPosts: (req, res, next) => {
        const db = req.app.get('db');
        
        const { userposts, search } = req.query;

        switch( userposts ) {
            case 'true':
                if(search) {
                    db.get_usr_search([`%${search}%`]).then( posts => {
                        res.status(200).send(posts)
                        console.log('Filtered posts sent');
                    }).catch(err => console.log(err));
                    break;
                } else {
                    db.get_all_posts().then( posts => {
                        console.log('All posts sent');
                        res.status(200).send(posts)   
                    }).catch(err => console.log(err));
                    break;
                }

            case 'false': 
                if(search) {
                    db.get_others_search([req.session.userid, `%${search}`]).then( posts => {
                        res.status(200).send(posts)
                        console.log('User posts not included')
                    }).catch(err => console.log(err));
                    break;
                // } else {
                //     db.get_others_all([req.params.id]).then( posts => {
                //         res.status(200).
                //     })
                }

            default:
                db.get_all_posts().then( posts => {
                    console.log('All posts sent');
                    res.status(200).send(posts)
                    
                }).catch(err => console.log(err));
                break;
        }


    },

    logout: (req, res, next) => {
        req.session.destroy().then( res => {
            res.sendStatus(200)
        }).catch(err => console.log(err));
    }
}





//(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15)