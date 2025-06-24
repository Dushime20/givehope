import React from "react";
import TrackingHistory from "./TrackingHistory";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaPeopleGroup, FaPeopleRoof } from "react-icons/fa6";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

// Sales pie chart data
const salesData = [
  { name: "Daily", value: 1500000 },
  { name: "Monthly", value: 4500000 },
  { name: "Annual", value: 54000000 },
];

const COLORS = ["#f97316", "#3b82f6", "#14532d"];

// Sample area chart data for buyers and sellers
const areaChartData = [
  { month: "Jan", buyers: 120, sellers: 80 },
  { month: "Feb", buyers: 140, sellers: 90 },
  { month: "Mar", buyers: 160, sellers: 100 },
  { month: "Apr", buyers: 200, sellers: 130 },
  { month: "May", buyers: 240, sellers: 150 },
  { month: "Jun", buyers: 220, sellers: 160 },
];

// Bar chart data for orders
const orderChartData = [
  { month: "Jan", orders: 50 },
  { month: "Feb", orders: 70 },
  { month: "Mar", orders: 90 },
  { month: "Apr", orders: 120 },
  { month: "May", orders: 140 },
  { month: "Jun", orders: 130 },
];

const MainContent = () => {
  return (
    <div className="pt-4 text-green-900 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 h-20 rounded-lg shadow-lg text-center flex flex-col justify-center">
            <h2 className="text-lg font-bold">Product Category</h2>
            <p>50</p>
          </div>
          <div className="bg-white flex gap-4 p-4 h-20 rounded-lg shadow-lg items-center justify-center">
            <div className="text-green-900 text-3xl">
              <FaShoppingCart />
            </div>
            <div>
              <h2 className="text-lg font-bold">Order</h2>
              <p>150</p>
            </div>
          </div>
          <div className="bg-white p-4 h-20 rounded-lg shadow-lg flex gap-4 items-center justify-center">
            <div className="text-green-900 text-3xl">
              <FaPeopleGroup />
            </div>
            <div>
              <h2 className="text-lg font-bold">Buyer</h2>
              <p>100</p>
            </div>
          </div>
          <div className="bg-white p-4 h-20 rounded-lg shadow-lg flex gap-4 items-center justify-center">
            <div className="text-green-900 text-3xl">
              <FaPeopleRoof />
            </div>
            <div>
              <h2 className="text-lg font-bold">Seller</h2>
              <p>10</p>
            </div>
          </div>
        </div>

        {/* Sales Pie Chart + Orders Bar Chart */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
            <h2 className="text-xl font-bold mb-4">Sales Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={salesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {salesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Orders Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={orderChartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="#14532d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Area Chart Section */}
        <div className="bg-white mb-6 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Buyers vs Sellers Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={areaChartData}>
              <defs>
                <linearGradient id="colorBuyers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSellers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="buyers"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorBuyers)"
              />
              <Area
                type="monotone"
                dataKey="sellers"
                stroke="#22c55e"
                fillOpacity={1}
                fill="url(#colorSellers)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
