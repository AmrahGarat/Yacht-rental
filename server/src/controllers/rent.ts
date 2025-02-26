import { Request, Response } from "express";
import Rent from "../mongoose/schemas/rent";
import Category from "../mongoose/schemas/category";
import Review from "../mongoose/schemas/review";

const getAll = async (req: Request, res: Response) => {
  try {
    const {
      type,
      take = 3,
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
    let categoryIds: string[] = [];
    if (search) {
      const matchingCategories = await Category.find({
        name: { $regex: new RegExp(search, "i") },
      }).select("_id");

      categoryIds = matchingCategories.map((cat) => cat._id.toString());

      filter.$or.push(
        { name: { $regex: new RegExp(search, "i") } },
        { category: { $in: categoryIds } }
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
      .skip(+skip)
      .limit(+take)
      .populate(["category", "location"]);

    const total = await Rent.countDocuments(filter);

    items.forEach((item) => {
      item.images = item.images.map(
        (image) => `${process.env.BASE_URL}/public/rent/${image}`
      );
    });
    res.json({
      message: "success",
      items,
      total,
      take: +take,
      skip: +take,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const rent = await Rent.findById(id).populate(["category", "location"]);

    if (!rent) {
      res.status(404).json({
        message: "Not Found",
      });
      return;
    }

    const reviews = await Review.find({
      rent: id,
      status: "approved",
    }).populate("author", "name surname");

    rent.images = rent.images.map(
      (image) => `${process.env.BASE_URL}/public/rent/${image}`
    );

    res.json({
      message: "success",
      item: rent,
      ...rent.toObject(),
      reviews,
    });
  } catch (err) {
    console.log(err);
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
      showInFeatured = false,
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
      showInFeatured,
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

    rent.name = data.name;
    rent.description = data.description;
    rent.category = data.categoryId;
    rent.location = data.location;
    rent.size = data.size;
    rent.capacity = data.capacity;
    rent.cabins = data.cabins;
    rent.crew = data.crew;
    rent.price = data.price;
    if (data.images) rent.images = data.images;
    if (data.showInFeatured !== undefined)
      rent.showInFeatured = data.showInFeatured;

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
  getById,
  create,
  edit,
  remove,
};
