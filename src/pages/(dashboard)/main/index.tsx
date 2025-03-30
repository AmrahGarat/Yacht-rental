import { Card } from "@/components/ui/card";
// import { CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-keys";
import dashboardService from "@/services/dashboard";
import { Spinner } from "@/components/shared/Spinner";
// import { Button } from "@/components/ui/button";

const DashboardMainPage = () => {
  const [stats, setStats] = useState({
    yachts: 0,
    reservations: 0,
    revenue: 0,
    users: 0,
    pendingReviews: 0,
  });
  const [chartData, setChartData] = useState<
    { month: string; revenue: number }[]
  >([]);
  const [recentReservations, setRecentReservations] = useState<
    {
      yacht: string;
      customer: string;
      date: string;
      duration: string;
      amount: string;
      status: string;
    }[]
  >([]);

  const [recentReviews, setRecentReviews] = useState<
    { user: string; rating: number; comment: string }[]
  >([]);

  useEffect(() => {
    // Simulated API calls
    setStats({
      yachts: 120,
      reservations: 350,
      revenue: 75200,
      users: 1280,
      pendingReviews: 5,
    });
    setChartData([
      { month: "Apr 2024", revenue: 20000000 },
      { month: "May 2024", revenue: 50000000 },
      { month: "Jun 2024", revenue: 70000000 },
      { month: "Jul 2024", revenue: 80000000 },
      { month: "Aug 2024", revenue: 100000000 },
      { month: "Sep 2024", revenue: 70000000 },
      { month: "Oct 2024", revenue: 65000000 },
      { month: "Nov 2024", revenue: 30000000 },
      { month: "Dec 2024", revenue: 50000000 },
      { month: "Jan 2025", revenue: 5000000 },
      { month: "Feb 2025", revenue: 7000000 },
      { month: "Mar 2025", revenue: 30000000 },
    ]);
    setRecentReservations([
      {
        yacht: "Flying Fox",
        customer: "John Doe",
        date: "2025-03-25",
        duration: "5 days",
        amount: "$3000000",
        status: "Confirmed",
      },
      {
        yacht: "Sea Eagle",
        customer: "Niẓām al-Mulk",
        date: "2025-04-03",
        duration: "3 days",
        amount: "$330000",
        status: "Pending",
      },
    ]);
    setRecentReviews([
      { user: "Mark Brown", rating: 5, comment: "Amazing experience!" },
      {
        user: "Sophia Lee",
        rating: 4,
        comment: "Great yacht, smooth process!",
      },
    ]);
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.DASHBOARD_COUNT],
    queryFn: dashboardService.getDashboardData,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  const statData = [
    {
      title: "Yachts",
      value: data?.data.rentCount || 0,
    },
    {
      title: "Approved Reservations",
      value: data?.data.approvedReservationCount || 0,
    },
    {
      title: "Pending Reservations",
      value: data?.data.pendingReservationCount || 0,
    },
    {
      title: "Users",
      value: data?.data.userCount || 0,
    },
    {
      title: "Total Revenue",
      value: data?.data.totalRevenue || 0,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {statData.map(({ title, value }, key) => (
          <Card key={key}>
            <h3 className="text-xl font-semibold capitalize">{title}</h3>
            <p className="text-2xl font-bold">
              {title === "Total Revenue"
                ? `$ ${value.toLocaleString()}`
                : value}
            </p>
          </Card>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Revenue Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Reservations */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Recent Reservations</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Yacht</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentReservations.map((res, index) => (
              <tr key={index} className="border-b">
                <td>{res.yacht}</td>
                <td>{res.customer}</td>
                <td>{res.date}</td>
                <td>{res.amount}</td>
                <td>{res.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Latest Reviews */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Latest Reviews</h3>
        {recentReviews.map((review, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <p className="font-bold text-lg">{review.user}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardMainPage;
