const MUUID = require('uuid-mongodb');

const starter = (mongoose) => {

    const Schema = mongoose.Schema;

    const sellersScheme = new Schema({
        "_id": {
            type: 'object',
            value: { type: 'Buffer' },
            default: () => MUUID.v4(),
        },
        "UserID": {
            type: 'object',
            value: { type: 'Buffer' },
        },
        "createdAt": Date,
        "updatedAt": Date
    });

    return sellersScheme;

}

module.exports = {
    model: "Sellers",
    starter,
}