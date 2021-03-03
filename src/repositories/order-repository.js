'use strict'

const mongose = require('mongoose');
const Order = mongose.model('Order');

exports.get = async(data) => {
    const res = await Order.find({}, 'number status, customer items')
    .populate('customer', 'name')
    .populate('items.product', 'title');
    return res;
}

exports.create = async (data) => {
    var order = new Order(data);
    await order.save();
}

