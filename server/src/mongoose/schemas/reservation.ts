import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

const reservationSchema = new Schema({
  rent: {
    type: Types.ObjectId,
    ref: "Rent",
    required: true,
  },
  user: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected", "cancelled"],
    default: "pending",
  },
  // location: {
  //   type: Types.ObjectId,
  //   ref: "location",
  //   required: true,
  // },
  // billing: {
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   phoneNumber: {
  //     type: String,
  //     required: true,
  //   },
  //   address: {
  //     type: String,
  //     required: true,
  //   },
  //   city: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // hasReview: {
  //   type: Boolean,
  //   default: false,
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  // updatedAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

reservationSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.__v;
  },

  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   description: {
  //     type: String,
  //     default: "",
  //   },
  //   category: {
  //     type: Types.ObjectId,
  //     ref: "Category",
  //     required: true,
  //   },
  //   showInFeatured: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   location: {
  //     type: Types.ObjectId,
  //     ref: "Location",
  //     required: true,
  //   },
  //   size: {
  //     type: Number,
  //     required: true,
  //   },
  //   capacity: {
  //     type: Number,
  //     required: true,
  //   },
  //   cabins: {
  //     type: Number,
  //     required: true,
  //   },
  //   crew: {
  //     type: Number,
  //     required: true,
  //   },
  //   price: {
  //     type: Number,
  //     required: true,
  //   },
  //   currency: {
  //     type: String,
  //     default: "USD",
  //   },
  //   images: {
  //     type: [String],
  //     required: true,
  //   },
  //   createdAt: {
  //     type: Date,
  //     default: Date.now,
  //   },
  // reviews: {
  //   type: [Types.ObjectId],
  //   ref: "Review",
  //   default: [],
  // },
});

reservationSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.__v;
  },
});

export default mongoose.model("reservation", reservationSchema);
