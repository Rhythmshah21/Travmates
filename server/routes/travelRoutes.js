const express = require('express');
const {getTravel,createTravel} = require('../controllers/travelController');
const router = express.Router();


router.route('/').get(getTravel)
router.route('/newtravel').post(createTravel);
// router.route('/:id').get(getNoteById).put(updateNote).delete(deleteNote);

module.exports=router;