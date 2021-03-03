'use strict';

const repository = require('../repositories/customer-repository');
const guid = require('guid');
const md5 = require('md5');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch(e) {
        res.status(400).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });
        res.status(201).send({ message: 'Cliente cadastrado com sucesso!'});
    } catch(e) {
        res.status(400).send({ 
            message: 'Falha ao cadastrar o cliente!',
            data: e
        });
    }
};

