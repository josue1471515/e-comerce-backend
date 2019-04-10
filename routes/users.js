const router = require('express').Router();
const User = require('../models/Users');


router.get('/', (req, res) => {
    User.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    }
    );
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    }
    );
});

router.post('/add', (req, res) => {
    const id = req.params.id;
    const user = new User(req.body);
    user.save()
    .then(user=> res.status(200).json({'user':'User added successfuly'}))
    .catch(err=> {
        res.status(400).send(err);
    });
    
});

router.post('/update/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id, function (err, user) {
        if (!user) {
            res.status(404).send('data not found')
        } else {
            user.userName = req.body.userName;
            user.userEmail = req.body.userEmail;
            user.userPassword = req.body.userPassword;
            user.userState = req.body.userState;

            user.save()
            .then(user=> res.json('updated'))
            .catch(err=> {
                res.status(400).send('Updated not posible');
            });
            
        }
    }
    );
});


module.exports = router;