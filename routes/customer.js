const express = require('express');
const customerRouter = express.Router();
const db = require('../db');
const { constants } = require('../env');

function executeQuery(statement){
    return new Promise((resolve, reject) => {
        db.connect();
        db.query(statement, (error, data) => {
            if(error){
                reject(error);
            }else{
                resolve(data);
            }
        });
    });
};

module.exports = customerRouter;