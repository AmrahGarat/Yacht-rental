import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

const rentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  category: {
    type: Types.ObjectId,
    ref: "Category",
    required: true,
  },
  showInFeatured: {
    type: Boolean,
    default: false,
  },
  location: {
    type: Types.ObjectId,
    ref: "Location",
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  cabins: {
    type: Number,
    required: true,
  },
  crew: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "USD",
  },
  images: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // reviews: {
  //   type: [Types.ObjectId],
  //   ref: "Review",
  //   default: [],
  // },
});

rentSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.__v;
  },
});

export default mongoose.model("Rent", rentSchema);
