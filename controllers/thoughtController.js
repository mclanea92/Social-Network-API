const { Schema, Types } = require('mongoose');
const { User, Thought } = require('../models');

module.exports = {
    // Get all thoughts
    getAllThoughts(req, res) {
      Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => {
          console.log(err)
          res.status(500).json(err)
        });
    },
    // Get a thought by _id
    getSingleThought(req, res) {
      Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with this ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create a thought
    createThought(req, res) {
      Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
  
      // Update a thought
      updateThought(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id' })
              : res.status(200).json('Thought updated')
          )
          .catch((err) => res.status(500).json(err));
      },
  
    // Delete a thought by id 
    deleteThought(req, res) {
      Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with this ID' })
            : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { runValidators: true, new: true }
            )
        )
        .then(() => res.json({ message: 'Thought deleted' }))
        .catch((err) => res.status(500).json(err));
    },
  
    //Create a Reaction
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
        .then((thought) => 
            !thought
                ? res.status(404).json({ message: 'No thought with this ID' })
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
  
    //Delete a Reaction
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { _id: Types.ObjectId(req.params.reactionId) } } },
            { runValidators: true, new: true }
        )
        .then((thought) => 
            !thought
                ? res.status(404).json({ message: 'No thought with this ID' })
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    }
  };