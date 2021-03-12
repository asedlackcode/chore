const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    frontyard : {
        type: Number,
        default: 0
    },
    backyard : {
        type: Number,
        default : 0
    },
    dailytrash : {
        type: Number,
        default: 0
    },
    trash2curb : {
        type: Number,
        default: 0
    },
    sweepmop : {
        type: Number,
        default: 0
    },
    livingroom : {
        type: Number,
        default: 0
    },
    bath : {
        type: Number,
        default: 0
    },
    chores: [{type: mongoose.Schema.Types.ObjectId, ref: 'Chore'}]
});

UserSchema.pre('save', function(next) {
    if(!this.isModified('password'))
        return next();
    bcrypt.hash(this.password,10,(err, passwordHash) => {
        if(err)
            return next(err);
        this.password = passwordHash;
        next();
    });
}); 

UserSchema.methods.comparePassword = function(password, cb) {
    bcrypt.compare(password,this.password,(err, isMatch) =>{
        if(err)
            return cb(err);
        else{
            if(!isMatch)
                return cb(null, isMatch);
            return cb(null,this); 
        }
    });
};

module.exports = mongoose.model('User', UserSchema);
