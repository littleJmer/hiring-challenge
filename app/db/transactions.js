const MUUID = require('uuid-mongodb');

const starter = (mongoose) => {

    const Schema = mongoose.Schema;

    const transactionsScheme = new Schema({
        "_id": {
            type: 'object',
            value: { type: 'Buffer' },
            default: () => MUUID.v4(),
        },
        "Description": String,
        "Deleted": Boolean,
        "CreatedFrom": String,
        "SaleData": {
            "ProductName": String,
            "ProductPrice": Number,
            "PayoutPercentage": Number,
            "OrderCreateDate": {
                "type": Date,
                "default": Date.now
            },
            "TimeToSell": Number,
            "OrderShippingType": String,
            "PayoutAmount": Number
        },
        "MarketName": String,
        "Status": String,
        "SoldAt": {
            "type": Date,
            "default": Date.now
        },
        "Amount": Number,
        "Type": String,
        "ProductID": {
            type: 'object',
            value: { type: 'Buffer' },
            ref: 'Products'
        },
        "SellerID": {
            type: 'object',
            value: { type: 'Buffer' }
        },
        "createdAt": Date,
        "updatedAt": Date,
        "FulfilledAt": Date,
        "PaidAt": Date,
        "LinkedTransactionsData": [
            {
                "LinkedTransactionID": {
                    type: 'object',
                    value: { type: 'Buffer' }
                },
                "MarketName": String
            }
        ],
        "ShopifyOrderTransactionsData": [
            {
                "MarketName": String,
                "TransactionID": {
                    type: 'object',
                    value: { type: 'Buffer' }
                },
                "ProductID": {
                    type: 'object',
                    value: { type: 'Buffer' }
                }
            }
        ]
    });

    return transactionsScheme;

}

module.exports = {
    model: "Transactions",
    starter,
}