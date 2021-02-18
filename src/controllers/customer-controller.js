'use strict';

const repository = require('../repositories/customer-repository');

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
        await repository.create(req.body);
        res.status(201).send({ message: 'Cliente cadastrado com sucesso!'});
    } catch(e) {
        res.status(400).send({ 
            message: 'Falha ao cadastrar o cliente!',
            data: e
        });
    }
};

