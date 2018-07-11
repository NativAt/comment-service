const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentSchema = new Schema({
  email: { type: String },
  image: { type: String },
  message: { type: String },
}, { versionKey: false, timestamps: true });


//module.exports = mongoose.models.Comments || mongoose.model('Comments', CommentSchema, 'comments');
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = {
  Comment,
};
