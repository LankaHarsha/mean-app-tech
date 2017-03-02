'use strict';
let Router = require('express').Router;
let cars = require('./home/controllers/cars');

class Api {

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {

        this.router.get('/getCarsList', cars.getAvailableList.bind(cars));
    }
}

module.exports = new Api().router;
