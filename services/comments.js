const repository = (db) => {
  // get collection
  const collection = db.collection('comments');

  const getComments = (query) => {
    try {
      return collection.find(query).sort({ createdAt: -1 }).toArray();
    } catch (err) {
      throw err;
    }
  };

  const createComment = async (email, message, image) => {
    try {
      const Comment = collection;
      const newComment = new Comment({ email, message, image });
      return newComment.save();
    } catch (err) {
      throw err;
    }
  };

  return {
    getComments,
    createComment,
  };
};


module.exports = repository;
