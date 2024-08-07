import mongoose from "mongoose";

/*
 * Macbook models for working with MongoDB.
 * Defines the Macbook data structure using Data stored in the 'Macbook' collection.
 */

const MacbookSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    category: String,
    brand: String,
    model: String,
    price: Number,
    descont_price: Number,
    color: String,
    memory: String,
    displaySize: String,
    description: String,
    os: String,
    camera: String,
    processor: String,
    battery: String,
    RAM: String,
    CPU: String,
    GPU: String,
    images: [String],
    incarousel: Boolean,
  },
  { collection: "Macbook" }
);

const MacbookModel = mongoose.model("macbook", MacbookSchema);

export { MacbookModel };
