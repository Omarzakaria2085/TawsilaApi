const { Router } = require('express');
const userModel = require('../models/user');
const user = Router()
const joi = require('joi');

user.get('/', async (req, res) => {
    const result = await userModel.findAll()
    res.json(result)
})
user.post('/orderByDistance', async (req, res) => {
    var locationNodeLatitude = req.body.location_latitude;
    var locationNodeLongitude = req.body.location_longitude;
    var destinationNodeLatitude = req.body.destination_latitude;
    var destinationNodeLongitude = req.body.destination_longitude;

    const result = await userModel.orderByDistance(locationNodeLatitude ,
        locationNodeLongitude,destinationNodeLatitude, destinationNodeLongitude);
    res.json(result);
})

user.post('/orderByCost', async (req, res) => {
    var locationNodeLatitude = req.body.location_latitude;
    var locationNodeLongitude = req.body.location_longitude;
    var destinationNodeLatitude = req.body.destination_latitude;
    var destinationNodeLongitude = req.body.destination_longitude;

    const result = await userModel.orderByCost(locationNodeLatitude ,
        locationNodeLongitude,destinationNodeLatitude, destinationNodeLongitude);
    res.json(result);
});


// export default user
module.exports = user