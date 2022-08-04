const dashboardController = {

    mostPopularProducts: async function (req, res, next) {
        try {
            return res.json({ "message": "its working!" });
        } catch (error) {
            next(error);
        }
    }

};

module.exports = {
    dashboardController
}