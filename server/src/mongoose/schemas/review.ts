import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema({
  author: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  rent: {
    type: Types.ObjectId,
    ref: "Rent",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
});

reviewSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.__v;
  },
});

export default mongoose.model("Review", reviewSchema);
