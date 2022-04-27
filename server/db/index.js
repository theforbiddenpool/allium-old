const { Sequelize, DataTypes } = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];
const models = require('./models');

function assembleModels(sequelize, modelsArray) {
  const modelsObject = modelsArray.reduce((acc, model) => {
    const modelInstance = model(sequelize, DataTypes);
    return {
      ...acc,
      [modelInstance.name]: modelInstance,
    };
  }, {});
  Object.values(modelsObject).map((model) => model.associate && model.associate(modelsObject));
  return modelsObject;
}

async function testConnection(sequelize) {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  }
}

const sequelize = new Sequelize(config.database, config.username, config.password, config);
const modelsObject = assembleModels(sequelize, models);

testConnection(sequelize);

module.exports = { sequelize, models: modelsObject };
