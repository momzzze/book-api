const Publisher = require('../models/Publisher');

exports.getAllPublishers = async () => {
    const publishers = await Publisher.find();
    return publishers;
}   

exports.createPublisher = async (publisherData) => {
    const publisher = await Publisher.create(publisherData);
    return publisher;
}