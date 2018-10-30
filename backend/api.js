
'use strict';

const express = require('express');
const models = require('./models');

const router = express.Router();

router.get('/all', getAllTasks);

router.put('/edit/:id', putSingleTask);

function getAllTasks(req, res) {
    models.Task.findAll().then((tasks) => {
        res.send(tasks);
    }).catch(function(err){
        res.send(err);
    });
}

function putSingleTask(req, res) {
    console.log(req.body, req.params.id);
    models.Task.update(
        {userId: req.body.target},
        {where: {id: req.params.id}}
    ).then(() => {
        res.send({});
    }).catch(function(err){
        res.send(err);
    });
}

module.exports = router;