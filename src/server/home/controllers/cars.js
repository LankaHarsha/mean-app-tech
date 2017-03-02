"use strict";

let CarsDb = require('../models/cars');

class Cars {

    constructor() {

        this.insertSampleCarsData();
    }

    getAvailableList(req, res, next) {

        return CarsDb.find()
            .then((doc) => {
                res.json(doc);
            }, (err) => {
                res.json(err);
            });
    }

    insertSampleCarsData() {

        let carsData = [{
            id: 1,
            name: 'Ford',
            models: [{
                id: 1,
                name: 'Edge',
                content: "Edge is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                imageUrl: 'http://www.pricehub.com/cars/2013-Ford-Edge.jpg'
            }, {
                    id: 2,
                    name: 'Escape',
                    content: "Escape is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                    imageUrl: 'http://www.pricehub.com/cars/2013-Ford-Escape.jpg'
                }]
        }, {
                id: 2,
                name: 'Acura',
                models: [{
                    id: 1,
                    name: 'ILX',
                    content: "ILX is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                    imageUrl: 'http://blog.caranddriver.com/wp-content/uploads/2012/01/Acura-ILX-concept-101-626x382.jpg'
                }, {
                        id: 2,
                        name: 'MDX',
                        content: "MDX is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                        imageUrl: 'http://www.acura.ca/Content/det/A/Models/2017/mdx/mdx_10150_crystal_black_pearl_front.png'
                    }]
            }];
        CarsDb.find().then((doc) => {
            console.log(doc.length);
            if (!doc.length) {
                console.log(carsData.length);
                for (let i = 0; i < carsData.length; i++) {
                    var carsModel = new CarsDb();
                    carsModel.id = carsData[i].id;
                    carsModel.name = carsData[i].name;
                    carsModel.models = carsData[i].models;
                    console.log(carsModel);
                    carsModel.save().then((doc) => {
                        console.log('Cars Data Inserted');
                    }, (err) => {
                        console.log('Cars Data Insertion Failed for Some reasons');
                    });
                }
            } else {
                console.log('Cars data already available');
            }
        }, (err) => {

            console.log('Data Fetching Error');
        })
        //var carsModel = new CarsDb();
    }
}

module.exports = new Cars();
