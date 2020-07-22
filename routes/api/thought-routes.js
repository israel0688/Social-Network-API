const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThought);

// /api/thoughts/<userId>
router  
    .route('/:userId')
    .post(addThought);

// /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/<userId>/<thoughtId
router
    .route('/:userId/:thoughtId')
    .put(addReaction);

// /api/thoughts/<userId>/<commentId>/<replyId>
router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;

