const { Schema, model } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            require: 'You need a username!',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            require: 'You need a valid email!',
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        thoughts: [

        ],
        friends: [

        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

const User = model('User', UserSchema);

module.exports = User;