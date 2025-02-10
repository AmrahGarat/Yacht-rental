import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

categorySchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.__v;
  },
});

export default mongoose.model("Category", categorySchema);