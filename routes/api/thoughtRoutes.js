
// all routes for thoughts & reactions
const router = require('express').Router();

const { getAllThoughts, getSingleThought, createThought, updateThought, deleteThought, createReaction, deleteReaction } = require('../../controllers/thoughtController');

router.route('/')
.get(getAllThoughts)
.post(createThought);

router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

router.route('/:thoughtId/reactions')
.post(createReaction);


module.exports = router;