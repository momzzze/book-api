const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        default: 'No name provided'
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2017/06/09/23/22/avatar-2388584_1280.png'
    },
    info: {
        type: String,
        trim: true,
        default: 'No info provided'
    },
    address: {
        type: String,
        default: 'No address provided'
    },
    role: {
        type: String,
        default: 'user'
    },
}, {
    timestamps: true
})

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});
userSchema.virtual('rePassword')
.set(function (value) {
    if(this.password !== value){
        throw new mongoose.MongooseError('Passwords  don\'t match');
    }
})

module.exports = mongoose.model('User', userSchema);   