import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ApiService from '@/config/ApiConfig';
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ViewOrder() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await ApiService.getAllOrders();
        setOrders(response.orders || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleEdit = (orderId) => {
    console.log("Edit order with ID:", orderId);
  };

  const handleDelete = (orderId) => {
    console.log("Delete order with ID:", orderId);
  };

  const filteredOrders = orders.filter(order =>
    order.product?.productId?.name?.toLowerCase().includes(search.toLowerCase()) ||
    order.buyer?.email?.toLowerCase().includes(search.toLowerCase()) ||
    order.seller?.email?.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4 text-green-900">
      <div className='flex justify-between items-center mb-4'>
        <h1 className="text-2xl font-bold">All Orders</h1>
        <Link to="/dashboard/add-car">
          <Button className='bg-green-900 text-white'><FaPlus className="mr-2" /> Add Car</Button>
        </Link>
      </div>

      <Input
        placeholder="Search by product or email..."
        className="mb-4 w-full max-w-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Buyer Email</TableHead>
              <TableHead>Seller Email</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentOrders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-4">No orders available</TableCell>
              </TableRow>
            ) : (
              currentOrders.map((order, index) => (
                <TableRow key={order._id}>
                  <TableCell>{indexOfFirstItem + index + 1}</TableCell>
                  <TableCell>{order.product?.productId?.name}</TableCell>
                  <TableCell>{order.product?.quantity}</TableCell>
                  <TableCell>{order.totalAmount}</TableCell>
                  <TableCell>{order.orderStatus}</TableCell>
                  <TableCell>{order.buyer?.email}</TableCell>
                  <TableCell>{order.seller?.email}</TableCell>
                  <TableCell className='flex gap-2'>
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(order._id)}>
                      <MdEdit size={20} className="text-green-900" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(order._id)}>
                      <MdDelete size={20} className="text-red-600" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex gap-2">
          <Button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)} className={"bg-green-900 hover:bg-green-600"}>
            Previous
          </Button>
          <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)} className={"bg-green-900 hover:bg-green-600"}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ViewOrder;