const mongoose=require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const ReviewSchema = new Schema({
    numStar: {
        type: Number
    },
    comment: {
        type: String,
    },
    name: {
        type: String,
     },
   
    reviewerImage:{
        type:String
    },
     
     date: {
         type: Date,
         default: Date.now
     }
});

module.exports=mongoose.model('Review',ReviewSchema);