const router = require('express').Router();

router.route('/').get((req, res) => {
    User.find()
        .then(yeets => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/Add').post((req, res) => {

    const Name = req.body.name;
    const Preferredjob = req.body.preferredjob;
    const DOB = req.body.DOB;

    const newUser = new User({

        Name,
        Preferredjob,
        DOB,

    })

    newUser.save()
        .then(() => res.json('user added'))
        .catch(err => res.status(400).json('Error ' + err));

});

router.route('/:id').delete((req, res) => {
    Yeet.findByIdAndDelete(req.params.id)
      .then(() => res.json('User deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;