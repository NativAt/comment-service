const commentsController = require('../controllers/comments');
const validate = require('../middleware/validate');


module.exports = (app, repository) => {
  app.get('/api/v1/comments', commentsController(repository).getComments);
  app.get('/api/v1/comments/top', commentsController(repository).getTopComments);
  app.post('/api/v1/comments', validate, commentsController(repository).createComment);
};

