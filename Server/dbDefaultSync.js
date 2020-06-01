global.db = require('./database');


global.db.sequelize.sync().then(() => {
    
});



module.exports = global.db;
