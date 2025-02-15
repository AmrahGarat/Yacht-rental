import { Request, Response } from "express";
import Rent from "../mongoose/schemas/rent";
import Category from "../mongoose/schemas/category";

const getAll = async (req: Request, res: Response) => {
  try {
    const {
      type,
      take = 2,
      skip = 0,
      search,
      category,
      size,
      capacity,
      cabins,
      crew,
      min_price,
      max_price,
      location,
    } = req.matchedData;

    const filter: Record<string, any> = {
      $and: [],
      $or: [],
    };

    if (type === "featured") {
      filter.showInFeatured = true;
    }
    if (search) {
      filter.OR(
        { name: { $regex: new RegExp(search, "i") } },
        { description: { $regex: new RegExp(search, "i") } }
      );
    }
    if (size) {
      const sizeList = typeof size === "string" ? [size] : size;
      filter.size = { $in: sizeList };
    }
    if (capacity) {
      const capacityList = typeof capacity === "string" ? [capacity] : capacity;
      filter.capacity = { $in: capacityList };
    }
    if (category) {
      const categoryList = typeof category === "string" ? [category] : category;
      filter.category = { $in: categoryList };
    }
    if (cabins) {
      const cabinsList = typeof cabins === "string" ? [cabins] : cabins;
      filter.cabins = { $in: cabinsList };
    }
    if (crew) {
      const crewList = typeof crew === "string" ? [crew] : crew;
      filter.crew = { $in: crewList };
    }
    if (min_price) {
      filter.$and.push({ price: { $gte: +min_price } });
    }
    if (max_price) {
      filter.$and.push({ price: { $lte: +max_price } });
    }
    if (location) {
      filter.location = location;
    }

    const items = await Rent.find(filter)
      .skip(skip)
      .limit(take)
      .populate(["category", "location"]);

    res.json({
      message: "success",
      items,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const {
      name,
      description,
      categoryId,
      location,
      size,
      capacity,
      cabins,
      crew,
      price,
      currency,
    } = req.matchedData;

    const category = await Category.findById(categoryId);

    if (!category) {
      res.status(404).json({
        message: "Category Not Found",
      });
      return;
    }

    const images = (req.files as any)?.map((file: any) => file.filename) || [];
    const rent = new Rent({
      name,
      description,
      category,
      location,
      size,
      capacity,
      cabins,
      crew,
      price,
      currency,
      images,
    });
    await rent.save();

    category.rents.push(rent._id);
    await category.save();

    res.status(201).json({
      message: "success",
      item: rent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

const edit = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const data = {
      ...req.matchedData,
    };
    const { categoryId } = data;

    const category = await Category.findById(categoryId);

    if (!category) {
      res.status(404).json({
        message: "Category Not Found",
      });
      return;
    }

    if (req.files && (req.files as any).length > 0) {
      data.images = (req.files as any).map((file: any) => file.filename);
    }

    const rent = await Rent.findById(id);

    if (!rent) {
      res.status(404).json({
        message: "Not Found",
      });
      return;
    }

    const oldCategoryId = rent.category;

    await Category.findByIdAndUpdate(oldCategoryId, {
      $pull: {
        rents: id,
      },
    });
    category.rents.push(rent._id);
    await category.save();

    rent.updateOne(data);
    await rent.save();

    res.json({
      message: "success",
      item: rent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const rent = await Rent.findByIdAndDelete(id);

    if (!rent) {
      res.status(404).json({
        message: "Not Found",
      });
      return;
    }

    res.json({
      message: "success",
      item: rent,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

export default {
  getAll,
  create,
  edit,
  remove,
};
