import { Schema } from "express-validator";

export const getAllRentSchema: Schema = {

    featured:{
        in: ["query"],
        isBoolean: true,
        optional: true,
    },
    take: {
        in:["query"],
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
    "min_price": {
        in: ["query"],
        isNumeric: true,
        optional: true,
    },
    "max_price": {
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
    "pickup_date": {
        in: ["query"],
        isString: true,
        notEmpty: true,
        optional: true,
    },   
    "pickup_time": {
        in: ["query"],
        isString: true,
        notEmpty: true,
        optional: true,
    },   
    "dropoff_date": {
        in: ["query"],
        isString: true,
        notEmpty: true,
        optional: true,
    },   
    "dropoff_time": {
        in: ["query"],
        isString: true,
        notEmpty: true,
        optional: true,
    },   
}