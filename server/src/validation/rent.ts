import { Schema } from "express-validator";

export const getAllRentSchema: Schema = {
  type: {
    in: ["query"],
    matches: {
      options: [/^(popular)$/],
      errorMessage: "type can be only 'featured'",
    },
    optional: true,
  },
  take: {
    in: ["query"],
    isNumeric: true,
    optional: true,
  },
  skip: {
    in: ["query"],
    isNumeric: true,
    optional: true,
  },
  search: {
    in: ["query"],
    isString: true,
    optional: true,
  },
  categoryId: {
    in: ["query"],
    optional: true,
  },
  size: {
    in: ["query"],
    isNumeric: true,
    optional: true,
  },
  capacity: {
    in: ["query"],
    isNumeric: true,
    optional: true,
  },
  cabins: {
    in: ["query"],
    isNumeric: true,
    optional: true,
  },
  min_price: {
    in: ["query"],
    isNumeric: true,
    optional: true,
  },
  max_price: {
    in: ["query"],
    isNumeric: true,
    optional: true,
  },
  location: {
    in: ["query"],
    isString: true,
    notEmpty: true,
    optional: true,
  },
  pickup_date: {
    in: ["query"],
    isString: true,
    notEmpty: true,
    optional: true,
  },
  pickup_time: {
    in: ["query"],
    isString: true,
    notEmpty: true,
    optional: true,
  },
  dropoff_date: {
    in: ["query"],
    isString: true,
    notEmpty: true,
    optional: true,
  },
  dropoff_time: {
    in: ["query"],
    isString: true,
    notEmpty: true,
    optional: true,
  },
};

export const createRentSchema: Schema = {
  name: {
    in: ["body"],
    isString: true,
    notEmpty: true,
  },
  description: {
    in: ["body"],
    isString: true,
    notEmpty: true,
  },
  price: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  size: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  capacity: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  cabins: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  crew: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  categoryId: {
    in: ["body"],
    isString: true,
    notEmpty: true,
  },
  location: {
    in: ["body"],
    isString: true,
    notEmpty: true,
  },
  currency: {
    in: ["body"],
    isString: true,
    optional: true,
    notEmpty: true,
  },
  files: {
    custom: {
      options: (_, { req }) => {
        if (!req.files || req.files.length === 0) {
          throw new Error("Images not uploaded!!");
        }
        return true;
      },
    },
  },
};

export const editRentSchema: Schema = {
  name: {
    in: ["body"],
    isString: true,
    notEmpty: true,
  },
  description: {
    in: ["body"],
    isString: true,
    notEmpty: true,
  },
  price: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  size: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  capacity: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  cabins: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  crew: {
    in: ["body"],
    isNumeric: true,
    notEmpty: true,
  },
  categoryId: {
    in: ["body"],
    isString: true,
    notEmpty: true,
  },
  location: {
    in: ["body"],
    isString: true,
    notEmpty: true,
  },
  currency: {
    in: ["body"],
    isString: true,
    optional: true,
    notEmpty: true,
  },
};
