const {Router} = require('express');
const PostModel = require('../models/Post');
const postRoute = Router();

//create post
postRoute.route('/create-post').post((req,res,next) => {
  PostModel.create(req.body, (error, data) => {
    if(error){
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = postRoute;
