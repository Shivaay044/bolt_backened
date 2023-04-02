const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    title: String,
    category: String,
    image: String,
    price: String,
    specs:Array,
    dtlimage:Array,
    quantity:Number,
    userID:String
  },
  {
    versionKey: false,
  }
);

const  cartModel = mongoose.model("cartProduct", cartSchema);


module.exports = { cartModel };