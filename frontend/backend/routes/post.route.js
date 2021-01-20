const {Router} = require('express');
const PostModel = require('../models/Post');
const postRoute = Router();


//index
postRoute.route('/').get((req, res) => {
  PostModel.find(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


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
