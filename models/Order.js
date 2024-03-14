const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    orderDate:{
        type: Date,
        required: true,
    },
    state: {
        type: String,
        required: true,
        enum: ['pending', 'shipped', 'delivered'],
    },
    items: [
        {
            productId:{
                type: mongoose.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            }
        }
    ],
    shipper: {
        type: mongoose.Types.ObjectId,
        ref: 'Shipper',
        required: true,
    },
});


const Order = mongoose.model('Author', orderSchema);
module.exports = Order;