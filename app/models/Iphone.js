import mongoose from "mongoose";

/*
 * Phone models for working with MongoDB.
 * Defines the phone data structure using Data stored in the 'Iphone' collection.
 */

const IPhoneSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    category: String,
    brand: String,
    model: String,
    price: Number,
    descont_price: Number,
    color: String,
    battery: String,
    memory: String,
    displaySize: String,
    description: String,
    os: String,
    camera: String,
    processor: String,
    images: [String],
    incarousel: Boolean,
  },
  { collection: "Iphone" }
);

const IPhoneModel = mongoose.model("phone", IPhoneSchema);

export { IPhoneModel };
