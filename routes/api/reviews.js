const express = require('express');
const router = express.Router();

// Item Model

const Review =require('../../models/Reviews');

// @route GET api/items
// @desc GET ALL Items
// @acess Public

router.get('/',(req,res) =>{
    Review.find()
        .then(reviews => res.json(reviews));
});
// @route POST api/items
// @desc Create ALL Items
// @acess Public

router.post('/',async(req,res) =>{
   const newReview =new Review(req.body);
   try {
        await  newReview.save().then(review=>res.json(review));   
   
  } catch (error) {
      console.log(error)
     }
});

module.exports =router;