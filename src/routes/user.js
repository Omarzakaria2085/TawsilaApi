const { Router } = require('express');
const userModel = require('../models/user');
const user = Router()
const joi = require('joi');

user.get('/', async (req, res) => {
    const result = await userModel.findAll()
    res.json(result)
})

user.post('/orderByDistance', async (req, res) => {
    var locationNode = req.body.Location;
    var destinationNode = req.body.Destination;
    let locationArr = locationNode.split(",");
    let destinationArr = destinationNode.split(",");
    let locLat =     parseFloat(locationArr[0]);
    let locLong =    parseFloat(locationArr[1]);
    let destLat =  parseFloat(destinationArr[0]);
    let destLong = parseFloat(destinationArr[1]);
    
    const result = await userModel.orderByDistance(locLat,locLong,destLat,destLong)
    res.json(result);
})



user.post('/orderByCost', async (req, res) => {
    const { Location, Destination } = req.body;
    const [locLat, locLong] = Location.split(',');
    const [destLat, destLong] = Destination.split(',');    
    
    const result = await userModel.orderByCost(locLat,locLong,destLat,destLong);
    res.json(result);
});


// export default user
module.exports = user