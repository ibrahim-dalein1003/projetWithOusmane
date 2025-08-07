const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type: String,
        required: true,
        enum: ['admin', 'user'],
        default: 'user'
    },
    resetToken : String,
    resetTokenExpire : Date
}, {timestamps: true});

userSchema.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
