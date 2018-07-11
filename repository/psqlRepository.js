// Repository Pattern

const PsqlRepository = (model, collectionName) => {
  this.collection = model[collectionName];

  const create = (document) => {
    try {
      return this.collection.create(document);
    } catch (err) {
      throw err;
    }
  };

  const update = (document) => {
    throw new Error('You have to implement the method doSomething!');
  };

  const remove = (document) => {
    throw new Error('You have to implement the method doSomething!');
  };

  const find = (item, orderBy, order) => {
    if (orderBy && order) {
      return this.collection.findAll({
        where: item,
        order: [[orderBy, order]],
      });
    }
    // return this.collection.find(item);
  };

  const findOne = (item) => {
    throw new Error('You have to implement the method doSomething!');
  };

  return {
    create,
    update,
    remove,
    find,
    findOne,
  };
};

module.exports = PsqlRepository;
