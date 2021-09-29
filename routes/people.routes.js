const router = require('express').Router();

const {
    routGet,
    routPost,
    routDelete,
    routUpdate
} = require('../controller/people.controller');


router.post('/', routPost)
router.get('/', routGet)
router.update('/', routUpdate)
router.delete('/', routDelete)

module.exports = router;