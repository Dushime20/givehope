import React from 'react';

const AllCarBooking = () => {
  // Sample data for bookings
  const bookings = [
    { id: 1, customer: 'John Doe', car: 'Nissan GTR', date: '2023-08-01', status: 'Confirmed' },
    { id: 2, customer: 'Jane Smith', car: 'Ford Mustang', date: '2023-08-05', status: 'Pending' },
    // Add more booking data as needed
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">View Car Bookings</h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto">
      <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">Booking ID</th>
            <th className="py-2 px-4 border">Customer</th>
            <th className="py-2 px-4 border">Car</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="py-2 px-4  text-center">{booking.id}</td>
              <td className="py-2 px-4 ">{booking.customer}</td>
              <td className="py-2 px-4 ">{booking.car}</td>
              <td className="py-2 px-4 ">{booking.date}</td>
              <td className={`py-2 px-4 ${booking.status === 'Confirmed' ? 'text-green-500' : 'text-yellow-500'}`}>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AllCarBooking;
