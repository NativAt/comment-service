/*
  service layer
*/

// require business logic
const utils = require('../domain/getMaxLength');

const repository = (db) => {
  const getComments = async (filter) => {
    try {
      const query = filter ? { email: new RegExp(`.*${filter}.*`, 'i') } : {};
      return db.find(query || {}, 'createdAt', 'desc');
    } catch (err) {
      throw err;
    }
  };

  const getTopComments = async () => {
    try {
      const comments = await db.find({});
      const topComment = utils.getMaxLength(comments);
      return topComment;
    } catch (err) {
      throw err;
    }
  };

  const createComment = async (email, message, image) => {
    try {
      return db.create({
        email,
        message,
        image,
      });
    } catch (err) {
      throw err;
    }
  };

  return {
    getComments,
    getTopComments,
    createComment,
  };
};


module.exports = repository;
