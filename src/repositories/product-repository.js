'use strict'

const mongose = require('mongoose');
const Product = mongose.model('Product');

exports.get = async() => {
    const res = await Product.find({
            active: true,
        }, 'title price slug');
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Product.findOne({
        slug: slug,
        active: true
    }, 'title description price slug tags');
    return res;
}

exports.getById = async(id) => {
    const res = await Product.findById(id);
    return res;
}

exports.getByTag = async(tag) => {
    const data = await Product.findOne({
        tags: tag,
        active: true
    }, 'title description price slug tags');
    return data;
}

exports.create = async (data) => {
    var product = new Product(data);
    await product.save();
}

exports.update = async(id, data) => {
    await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            slug: data.slug,
            price: data.price
        }   
    });
}

exports.delete = async(id) => {
    await Product.findOneAndRemove(id);
}