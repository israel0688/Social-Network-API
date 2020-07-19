const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema(
    {
        reactionId: {

        },
        reactionBody: {
            type: String,
            require: true,
            maxlength: 280
        },
        username: {
            type: String,
            requre: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM DDD, YYYY [at] hh:mm a')
        }
    },
    {
        toJOSN: {
            virtuals: true,
            getters: true
        }
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM DDD, YYYY [at] hh:mm a')
        },
        username: {

        },
        reactions: [

        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;