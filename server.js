'use strict';

process.env.ROOT = __dirname;

let mongoose = require('mongoose');
let app = require('./src/server/app');

class Server {

    constructor() {
        this.app = app;
        this.port = process.env.PORT || 3000;
        this.run();
    }
    mongoConnect() {

        let env = this.app.get('env');
        let mongoUrl;

        if(process.env.NODE_ENV === 'production') {
            mongoUrl = 'mongodb://139.59.63.14:27017/Assignment';
        } else {
            mongoUrl = 'mongodb://localhost:27017/Assignment';            
        }

        mongoose.connect(mongoUrl).then(function(conn) {

            console.log("Mongo connected to ", mongoUrl, "successfully");
        }, function(err) {

            console.log("Mongo connected to ", mongoUrl, "failed");
        });
    }

    run() {
        this.app.listen(this.port, () =>  {

            console.log(`App running at ${this.port}`);
            this.mongoConnect();
        });
    }
}

new Server();
