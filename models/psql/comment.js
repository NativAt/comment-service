module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    message: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
  });

  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};
