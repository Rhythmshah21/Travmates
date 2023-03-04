const express = require('express');
const { getUser,createUser} = require('../controllers/userController');
const router = express.Router();


router.route('/').get(getUser)
router.route('/newuser').post(createUser);
// router.route('/:id').get(getNoteById).put(updateNote).delete(deleteNote);

module.exports=router;