import { Schema, model } from 'mongoose';

const campersSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number },
  location: { type: String },
  description: { type: String },
  form: { type: String },
  length: { type: String },
  width: { type: String },
  height: { type: String },
  tank: { type: String },
  consumption: { type: String },
  transmission: { type: String },
  engine: { type: String },
  AC: { type: Boolean },
  bathroom: { type: Boolean },
  kitchen: { type: Boolean },
  TV: { type: Boolean },
  radio: { type: Boolean },
  refrigerator: { type: Boolean },
  microwave: { type: Boolean },
  gas: { type: Boolean },
  water: { type: Boolean },
  gallery: [
    {
      thumb: { type: String },
      original: { type: String },
    },
  ],
  reviews: [
    {
      reviewer_name: { type: String },
      reviewer_rating: { type: Number },
      comment: { type: String },
    },
  ],
});

export default model('Campers', campersSchema);
