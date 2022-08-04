const MUUID = require('uuid-mongodb');

const starter = (mongoose) => {

    const Schema = mongoose.Schema;

    const buyersSchema = new Schema({
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

    return buyersSchema;

}

module.exports = {
    model: "Buyers",
    starter,
}