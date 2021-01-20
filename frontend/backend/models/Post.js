const {Schema, model} = require('mongoose');

let postSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}, {
  collection: 'posts'
})

module.exports = model('Post', postSchema)
