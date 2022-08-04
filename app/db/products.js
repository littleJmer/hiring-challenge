const MUUID = require('uuid-mongodb');

const starter = (mongoose) => {

    const Schema = mongoose.Schema;

    const productItemSchema = new Schema({
        "ProductItemStatus": String,
        "ProductItemSKU": String,
        "ProductItemLocation": String
    });

    const marketSchema = new Schema({
        "MarketName": String
    });

    const productsScheme = new Schema({
        "_id": {
            type: 'object',
            value: { type: 'Buffer' },
            default: () => MUUID.v4(),
        },
        "ItemsIncluded": [],
        "Description": String,
        "Condition": String,
        "ProductTags": [String],
        "SKU": String,
        "SellerID": {
            type: 'object',
            value: { type: 'Buffer' },
            ref: 'Sellers'
        },
        "ProductNumber": Number,
        "OriginalPrice": Number,
        "Price": Number,
        "ProductName": String,
        "Markets": [marketSchema],
        "ProductVariants": [
            {
                "Quantity": Number,
                "OriginalProductData": {
                    "Weight": Number,
                    "WeightUnit": String,
                    "Length": Number,
                    "Width": Number,
                    "Height": Number
                },
                "ShopifyProductVariantID": String,
                "InventoryItemID": String
            }
        ],
        "GBGProductID": {
            type: 'object',
            value: { type: 'Buffer' },
        },
        "createdAt": Date,
        "updatedAt": Date,
        "LocationInWarehouse": String,
        "ProductItems": [productItemSchema]
    });

    return productsScheme;
}

module.exports = {
    model: "Products",
    starter
}