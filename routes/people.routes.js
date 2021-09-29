const router = require('express').Router();

const {
    routGet,
    routPost,
    routDelete,
    routPut
} = require('../controller/people.controller');


router.post('/', routPost)
router.get('/', routGet)
router.put('/', routPut)
router.delete('/', routDelete)

module.exports = router;