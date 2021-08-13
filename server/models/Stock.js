const mongoose = require('mongoose');

const { Schema } = mongoose;

const stockSchema = new Schema({
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;