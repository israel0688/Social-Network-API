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
        // not sure if the below is correct
        // Array of _id values referencing the Thought model
        thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Thought'
            }
          ],
        //not sure if the below is correct
        //Array of _id values referencing the User model (self-reference)
        friends: [
            {
              type: Schema.Types.ObjectId,
              ref: 'User'
            }
          ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

//Create a virtual called friendCount that retrieves the length 
//of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;