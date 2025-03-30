import { Request, Response } from "express";
import Rent from "../mongoose/schemas/rent";
import Reservation from "../mongoose/schemas/reservation";
import User from "../mongoose/schemas/user";

export const dashboardDatas = async (req: Request, res: Response) => {
  try {
    const rentCount = await Rent.countDocuments();
    const approvedReservationCount = await Reservation.countDocuments({
      status: "approved",
    });
    const pendingReservationCount = await Reservation.countDocuments({
      status: "pending",
    });
    const userCount = await User.countDocuments();
    const totalRevenuePrice = await Reservation.aggregate([
      { $match: { status: "approved" } }, // Filter for approved reservations
      { $group: { _id: null, totalPrice: { $sum: "$total" } } },
    ]);

    const totalRevenue =
      totalRevenuePrice.length > 0 ? totalRevenuePrice[0].totalPrice : 0;

    res.status(200).json({
      rentCount,
      approvedReservationCount,
      pendingReservationCount,
      userCount,
      totalRevenue,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
