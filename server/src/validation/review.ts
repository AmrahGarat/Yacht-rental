import { Schema } from "express-validator";

export const createReviewSchema: Schema = {
  reservationId: {
    in: ["body"],
    isString: true,
    notEmpty: true,
  },
  rentId: {
    in: ["body"],
    isString: true,
    notEmpty: true,
  },
  content: {
    in: ["body"],
    isString: true,
    notEmpty: true,
  },
};

export const changeStatusSchema: Schema = {
  status: {
    in: ["body"],
    isString: true,
    notEmpty: true,
    isIn: {
      options: [["approved", "rejected"]],
    },
  },
};
