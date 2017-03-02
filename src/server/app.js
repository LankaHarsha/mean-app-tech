'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let ejs = require('ejs');
let join = require('path').join;
let mongoose = require('mongoose');

class App {
    constructor() {
        this.app = express();
        this.root = '/../../';
        this.config();
        this.routes();
        this.api();
    }

    loadTemplates() {
        this.app.set('views', join(__dirname, this.root, 'views'));
        this.app.engine('html', ejs.renderFile);
        this.app.set('view engine', 'html');
    }

    config() {
        this.loadTemplates();
        this.app.use(express.static(join(__dirname, this.root, 'dist')));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }

    routes() {
        let router = require('./router');
        this.app.use(router);
    }

    api() {
        let router = require('./api');
        this.app.use('/api', router);
    }
}

module.exports = new App().app;