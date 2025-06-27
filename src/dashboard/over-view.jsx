import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaProjectDiagram, FaUsers, FaBlog, FaBook, FaLightbulb, FaHandHoldingUsd } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const stats = [
  {
    label: "Projects",
    value: 8, // mock data
    icon: <FaProjectDiagram className="text-2xl text-blue-600" />,
    color: "bg-blue-100",
  },
  {
    label: "Users",
    value: 24, // mock data
    icon: <FaUsers className="text-2xl text-green-600" />,
    color: "bg-green-100",
  },
  {
    label: "Blogs",
    value: 15, // mock data
    icon: <FaBlog className="text-2xl text-purple-600" />,
    color: "bg-purple-100",
  },
  {
    label: "Resources",
    value: 12, // mock data
    icon: <FaBook className="text-2xl text-yellow-600" />,
    color: "bg-yellow-100",
  },
  {
    label: "Suggestions",
    value: 5, // mock data
    icon: <FaLightbulb className="text-2xl text-pink-600" />,
    color: "bg-pink-100",
  },
  {
    label: "Donations",
    value: "$23,200", // mock data
    icon: <FaHandHoldingUsd className="text-2xl text-indigo-600" />,
    color: "bg-indigo-100",
  },
];

// Mock donation data for charts
const donationByMonth = [
  { month: 'Jan', amount: 1200 },
  { month: 'Feb', amount: 2100 },
  { month: 'Mar', amount: 800 },
  { month: 'Apr', amount: 1600 },
  { month: 'May', amount: 900 },
  { month: 'Jun', amount: 1700 },
  { month: 'Jul', amount: 2200 },
  { month: 'Aug', amount: 1100 },
  { month: 'Sep', amount: 1400 },
  { month: 'Oct', amount: 2000 },
  { month: 'Nov', amount: 1800 },
  { month: 'Dec', amount: 2500 },
];

const donationByProject = [
  { name: 'School Supplies', value: 5000 },
  { name: 'Vocational Training', value: 3500 },
  { name: 'Health Outreach', value: 2000 },
  { name: 'Other', value: 1500 },
];

const COLORS = ['#0e62f8', '#34d399', '#fbbf24', '#f472b6'];

export default function Overview() {
  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-4 text-blue-800">Dashboard Overview</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="rounded-lg shadow border-0 w-full max-w-[170px] mx-auto">
              <CardContent className="flex flex-col items-center py-4 px-2">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-2 ${stat.color}`}>{stat.icon}</div>
                <div className="text-xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1 text-center">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Bar Chart: Donations by Month */}
          <Card className="rounded-xl shadow-lg border-0">
            <CardContent className="py-6">
              <h2 className="text-xl font-bold mb-4 text-blue-700">Donations by Month</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={donationByMonth}>
                  <XAxis dataKey="month" stroke="#0e62f8" />
                  <YAxis stroke="#0e62f8" />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#0e62f8" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          {/* Pie Chart: Donations by Project */}
          <Card className="rounded-xl shadow-lg border-0">
            <CardContent className="py-6">
              <h2 className="text-xl font-bold mb-4 text-blue-700">Donations by Project</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={donationByProject}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {donationByProject.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 