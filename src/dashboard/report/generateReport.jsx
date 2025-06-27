import React, { useState } from 'react';

const categories = ['All', 'Donations', 'Projects', 'Users'];
const statuses = ['All', 'Completed', 'Pending', 'Failed'];

const mockReportData = [
  {
    id: 1,
    category: 'Donations',
    status: 'Completed',
    date: '2024-06-01',
    amount: 500,
    description: 'Donation for School Supplies',
  },
  {
    id: 2,
    category: 'Projects',
    status: 'Pending',
    date: '2024-06-02',
    amount: 0,
    description: 'New Well Construction',
  },
  {
    id: 3,
    category: 'Users',
    status: 'Completed',
    date: '2024-06-03',
    amount: 0,
    description: 'New Volunteer Registered',
  },
  // Add more mock data as needed
];

const GenerateReport = () => {
  const [category, setCategory] = useState('All');
  const [status, setStatus] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showReport, setShowReport] = useState(false);

  const filteredData = mockReportData.filter((item) => {
    const matchCategory = category === 'All' || item.category === category;
    const matchStatus = status === 'All' || item.status === status;
    const matchStart = !startDate || item.date >= startDate;
    const matchEnd = !endDate || item.date <= endDate;
    return matchCategory && matchStatus && matchStart && matchEnd;
  });

  const totalAmount = filteredData.reduce((sum, item) => sum + item.amount, 0);

  const handleGenerate = (e) => {
    e.preventDefault();
    setShowReport(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Generate Report</h2>
      <form onSubmit={handleGenerate} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Status</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {statuses.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Start Date</label>
          <input
            type="date"
            className="w-full border rounded px-3 py-2"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">End Date</label>
          <input
            type="date"
            className="w-full border rounded px-3 py-2"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="md:col-span-4 flex justify-end mt-2">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Generate Report
          </button>
        </div>
      </form>
      {showReport && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Report Summary</h3>
          <table className="min-w-full bg-white mb-4">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-4">No data found for selected filters.</td>
                </tr>
              ) : (
                filteredData.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 px-4 border-b">{item.date}</td>
                    <td className="py-2 px-4 border-b">{item.category}</td>
                    <td className="py-2 px-4 border-b">{item.status}</td>
                    <td className="py-2 px-4 border-b">{item.description}</td>
                    <td className="py-2 px-4 border-b">{item.amount > 0 ? `$${item.amount}` : '-'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="text-right font-bold text-lg">
            Total Amount: <span className="text-blue-700">${totalAmount}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateReport;
