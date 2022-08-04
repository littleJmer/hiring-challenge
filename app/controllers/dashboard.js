const { models } = require("../db/index");
const MUUID = require('uuid-mongodb');

const dashboardController = {

    mostPopularProducts: async function (req, res, next) {
        try {

            const data = await models.Transactions.find();

            return res.json({ data });
        } catch (error) {
            next(error);
        }
    }

};

module.exports = {
    dashboardController
}