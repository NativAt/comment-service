// require business logic
const utils = require('../domain/getMaxLength');

const controller = (repository) => {
  // get all comments or comments by regex expression
  const getComments = async (req, res) => {
    let query = {};

    try {
      query = req.query.filter ? { email: new RegExp(`.*${req.query.filter}.*`, 'i') } : query;
      const comments = await repository.find(query || {}, 'createdAt', 'desc');
      return res.json(comments);
    } catch (err) {
      return res.status(500).send(`Internal server error: ${err}`);
    }
  };

  const getTopComments = async (req, res) => {
    const query = {};
    try {
      const comments = await repository.find(query);
      const topComment = utils.getMaxLength(comments);
      return res.json(topComment);
    } catch (err) {
      return res.status(500).send(`Internal server error: ${err}`);
    }
  };

  // create new comment
  const createComment = async (req, res) => {
    try {
      const newComment = await repository.create({
        email: req.body.email,
        message: req.body.message,
        image: req.body.image,
      });
      return res.json(newComment);
    } catch (err) {
      return res.status(500).send(`Internal server error: ${err}`);
    }
  };


  return {
    getComments,
    createComment,
    getTopComments,
  };
};


module.exports = controller;
