import React, { useEffect, useState } from "react";
import ApiService from "@/config/ApiConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import AddNewUser from "./AddPartner";
import EditUser from "./EditPartner";

const ITEMS_PER_PAGE = 5;

const UserSettings = () => {
  const [partners, setPartners] = useState([]);
  const [filteredPartners, setFilteredPartners] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const response = await ApiService.getAllPartners();
      console.log("Fetched partners:", response);
      setPartners(response);
      setFilteredPartners(response);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch partners");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const filtered = partners.filter(partner =>
      partner.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPartners(filtered);
    setCurrentPage(1);
  }, [searchTerm, partners]);

  const handleEdit = (partnerId) => {
    navigate(`/dashboard/edit-partner/${partnerId}`);
  };

  const handleDelete = (partnerId) => {
    console.log("Delete partner with ID:", partnerId);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPartners = filteredPartners.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredPartners.length / ITEMS_PER_PAGE);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-blue-600">
      <div className='flex justify-between mb-4'>
        <h1 className="text-2xl font-bold">All Partners</h1>
        <AddNewUser onPartnerChanged={fetchPartners}/>
      </div>

      <Input
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Updated At</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedPartners.map((partner, index) => (
            <TableRow key={partner.id}>
              <TableCell>{startIndex + index + 1}</TableCell>
              <TableCell>{partner.name}</TableCell>
              <TableCell>
                {partner.imageUrl ? (
                  <img
                    src={partner.imageUrl}
                    alt={partner.name}
                    className="h-12 w-12 object-cover rounded"
                    crossOrigin="anonymous"
                  />
                ) : (
                  <div className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded text-gray-400 text-xs">No Image</div>
                )}
              </TableCell>
              <TableCell>{partner.createdAt ? new Date(partner.createdAt).toLocaleDateString() : '-'}</TableCell>
              <TableCell>{partner.updateAt ? new Date(partner.updateAt).toLocaleDateString() : '-'}</TableCell>
              <TableCell className="flex gap-2">
                <EditUser userId={partner.id} onPartnerChanged={fetchPartners} />
                <Button variant="ghost" size="icon" onClick={() => handleDelete(partner.id)}><MdDelete size={18} className="text-red-600" /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center mt-4">
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex gap-2">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={"bg-blue-600 hover:bg-blue-400"}
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={"bg-blue-600 hover:bg-blue-400"}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;