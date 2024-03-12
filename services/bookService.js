const Book=require('../models/book');

exports.create=(bookData)=>{
    if(!bookData.title){
        throw new Error('Title is required');
    }
    if(!bookData.description){
        throw new Error('Description is required');
    }
    if(!bookData.imageUrl){
        throw new Error('Image URL is required');
    }
    if(!bookData.publishedDate){
        throw new Error('Published Date is required');
    }
    
    return Book.create(bookData);
}


exports.getAll=()=>{
    return Book.find();
}