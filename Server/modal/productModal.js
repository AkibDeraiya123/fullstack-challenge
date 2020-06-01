const { sequelize, Sequelize } = global.db;


const products = sequelize.define(
    'products', {
        id: {
            type: Sequelize.BIGINT.UNSIGNED,
            field: 'id',
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: Sequelize.STRING(255),
            field: 'product_name',
           defaultValue:null
        },
        price: {
            type: Sequelize.STRING(255),
            field: 'price',
           defaultValue:null
        },
        available_quantity: {
            type: Sequelize.INTEGER,
            field: 'available_quantity',
            defaultValue:null          
        },
        description: {
            type: Sequelize.TEXT,
            field: 'description',
            defaultValue: null,
        },
        image: {
            type: Sequelize.TEXT,
            field: 'image',
            defaultValue: null,
        },
        is_active: {
            type: Sequelize.BOOLEAN,
            field: 'is_active',
            defaultValue: true,
        },
        createdAt: {
            type: Sequelize.DATE,
            field: 'createdAt',
            defaultValue:  new Date(),
        },
        updatedAt: {
            type: Sequelize.DATE,
            field: 'createdAt',
            defaultValue:  new Date(),
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
    },
);

products.createProduct = (data, callback, error) => {
    products.create(data).then(callback).catch(error);
};

products.getActiveProducts = async() => {
    query = {
        where: {is_active:true}
    }
    
    return await products.findAll(query)
}

module.exports = products;