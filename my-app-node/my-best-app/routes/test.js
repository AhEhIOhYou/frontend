let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {

    let response = {
        title: "Test",
        items : {
            item1 : {
                name: "a1",
                description: "d1",
            },
            item2 : {
                name: "a2",
                description: "d2",
            }
        }
    };

    res.render('layout', response);
});

module.exports = router;