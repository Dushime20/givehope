import React, { useRef } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const salesData = [
  { month: "Jan", sales: 1500000 },
  { month: "Feb", sales: 2000000 },
  { month: "Mar", sales: 2500000 },
  { month: "Apr", sales: 2200000 },
  { month: "May", sales: 3000000 },
  { month: "Jun", sales: 2800000 },
];

const orderData = [
  { date: "Week 1", orders: 120 },
  { date: "Week 2", orders: 150 },
  { date: "Week 3", orders: 170 },
  { date: "Week 4", orders: 200 },
];

const userGrowthData = [
  { month: "Jan", buyers: 120, sellers: 80 },
  { month: "Feb", buyers: 140, sellers: 90 },
  { month: "Mar", buyers: 160, sellers: 100 },
  { month: "Apr", buyers: 200, sellers: 130 },
  { month: "May", buyers: 240, sellers: 150 },
  { month: "Jun", buyers: 220, sellers: 160 },
];

const ReportsPage = () => {
  const reportRef = useRef();

  const handleDownloadPDF = () => {
    const input = reportRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("AGRILINK_Report.pdf");
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-900">Reports</h1>
        <button
          onClick={handleDownloadPDF}
          className="bg-green-900 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow"
        >
          Save Report as PDF
        </button>
      </div>

      {/* Report Content */}
      <div ref={reportRef}>
        {/* Sales Report */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Monthly Sales Report</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="salesColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14532d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#14532d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#14532d"
                fillOpacity={1}
                fill="url(#salesColor)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Order Report */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Weekly Orders Report</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={orderData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="orders" fill="#3b82f6" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* User Growth Report */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Buyer vs Seller Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={userGrowthData}>
              <defs>
                <linearGradient id="buyersColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="sellersColor" x1="0" y1="0" x2="0" y2="1">
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
                fill="url(#buyersColor)"
              />
              <Area
                type="monotone"
                dataKey="sellers"
                stroke="#22c55e"
                fillOpacity={1}
                fill="url(#sellersColor)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
