/*
  data layer
*/

export default class BaseRepository {
  create(document) {
    throw new Error('You have to implement the method!');
  };

  update(document) {
    throw new Error('You have to implement the method!');
  };

  delete(document) {
    throw new Error('You have to implement the method!');
  };

  find(document) {
    throw new Error('You have to implement the method!');
  };

  findOne(document) {
    throw new Error('You have to implement the method!');
  };
};
