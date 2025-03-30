import axiosInstance from "../axiosInstance";

interface DashboardData {
  userCount: number;
  approvedReservationCount: number;
  pendingReservationCount: number;
  rentCount: number;
  totalRevenue: number;
}
const getDashboardData = async () => {
  return await axiosInstance.get<DashboardData>("/dashboard/count");
};

const dashboardService = { getDashboardData };
export default dashboardService;
