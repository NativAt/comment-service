const controller = (repository) => {
  // get all comments or comments by regex expression
  const getComments = async (req, res) => {
    try {
      const comments = await repository.getComments(req.query.filter);
      return res.json(comments);
    } catch (err) {
      return res.status(500).send(`Internal server error: ${err}`);
    }
  };

  const getTopComments = async (req, res) => {
    try {
      const topComment = await repository.getTopComments();
      return res.json(topComment);
    } catch (err) {
      return res.status(500).send(`Internal server error: ${err}`);
    }
  };

  // create new comment
  const createComment = async (req, res) => {
    try {
      const newComment = await repository.createComment(
        req.body.email,
        req.body.message,
        req.body.image,
      );
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
