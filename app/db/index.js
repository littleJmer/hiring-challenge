const mongoose = require('mongoose');
const fs = require("fs");
const path = require("path");

const dbConnect = () => {
    mongoose.connect('mongodb://localhost:27017/gbgdev?readPreference=primary&directConnection=true&ssl=false', function (err) {
        if (err) throw err;
        console.log('DB Successfully connected');
    });
}

const basename = path.basename(__filename);
const models = {};

fs.readdirSync(__dirname)
    .filter(
        (file) =>
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js'
    )
    .forEach((file) => {
        const { model, starter } = require(path.join(__dirname, file));
        models[model] = mongoose.model(model, starter(mongoose));
    });

module.exports = {
    dbConnect,
    models,
}