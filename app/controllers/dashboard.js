const { models } = require("../db/index");
const MUUID = require('uuid-mongodb');

const dashboardController = {

    mostPopularProducts: async function (req, res, next) {
        try {
            const { by = 'Sales' } = req.query;
            const transactions = await models.Transactions.find().populate('ProductID');

            const productIdTable = {};
            for (let index = 0; index < transactions.length; index++) {
                const doc = transactions[index];
                const productId = MUUID.from(doc.ProductID._id).toString();

                if (!productIdTable[productId]) {
                    productIdTable[productId] = {
                        "ProductId": productId,
                        "ProductName": doc.ProductID.ProductName,
                        "Amount": 0,
                        "NumberOfSales": 0,
                        "Sales": {}
                    }
                }

                productIdTable[productId].Amount += doc.Amount;
                productIdTable[productId].NumberOfSales += 1;

                if (!productIdTable[productId].Sales[doc.SaleData.ProductName]) {
                    productIdTable[productId].Sales[doc.SaleData.ProductName] = [];
                }

                productIdTable[productId].Sales[doc.SaleData.ProductName].push(doc.SaleData);

            }

            const salesByProduct = Object.values(productIdTable);

            if (by === 'Sales')
                salesByProduct.sort((a, b) => b.NumberOfSales - a.NumberOfSales)
            if (by === 'Amount')
                salesByProduct.sort((a, b) => b.Amount - a.Amount)

            return res.json({ data: salesByProduct[0] });
        } catch (error) {
            next(error);
        }
    }

};

module.exports = {
    dashboardController
}