const Shipper = require('../models/Shipper');

exports.getAllShippers = async () => {
    const shippers = await Shipper.find();
    return shippers;
}

exports.createShipper = async (shipperData) => {
    const shipper = await Shipper.create(shipperData);
    return shipper;
}