const { sequelize, Sequelize } = global.db;

const order = sequelize.define(
    'order', {
        id: {
            type: Sequelize.BIGINT.UNSIGNED,
            field: 'id',
            primaryKey: true,
            autoIncrement: true,
        },
        order_items: {
            type: Sequelize.JSON(),
            field: 'order_items',
           defaultValue:null
        },
        name: {
            type: Sequelize.STRING,
            field: 'name',
          
        },
        address: {
            type: Sequelize.TEXT,
            field: 'address',
            defaultValue: 0,
        },
        order_total: {
            type: Sequelize.STRING,
            field: 'order_total',
            defaultValue: null,
        },
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
    },
);

order.createOrder = async(data) => {
  return await order.create(data)
};

module.exports = order;