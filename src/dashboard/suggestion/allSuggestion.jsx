import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../../config/ApiConfig';
import { toast } from 'sonner';
import EditSuggestionModal from './editSuggestion';

const statuses = ['All', 'UNREAD', 'READ'];
const ITEMS_PER_PAGE = 5;

const AllSuggestion = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await ApiService.getAllSuggestions();
        // API returns { suggestions: [...], page, totalPages, totalItems }
        setSuggestions(res.suggestions || []);
        setTotalPages(res.totalPages || 1);
      } catch (err) {
        setError('Failed to load suggestions');
        toast.error('Failed to load suggestions');
      } finally {
        setLoading(false);
      }
    };
    fetchSuggestions();
  }, []);

  const filteredSuggestions = filter === 'All'
    ? suggestions
    : suggestions.filter((s) => (s.status === 'READ' ? 'READ' : 'UNREAD') === filter);

  const paginatedSuggestions = filteredSuggestions.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setPage(1); // Reset to first page when filter changes
  }, [filter]);

  const refreshSuggestions = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await ApiService.getAllSuggestions();
      setSuggestions(res.suggestions || []);
      setTotalPages(res.totalPages || 1);
    } catch (err) {
      setError('Failed to load suggestions');
      toast.error('Failed to load suggestions');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Suggestions</h2>
      </div>
      <div className="mb-4">
        <select
          className="border rounded px-3 py-2"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading suggestions...</div>
      ) : error ? (
        <div className="text-center py-10 text-red-500">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Suggestion</th>
                <th className="py-2 px-4 border-b">User</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedSuggestions.length === 0 ? (
                <tr><td colSpan="5" className="text-center py-8 text-gray-400">No suggestions found.</td></tr>
              ) : paginatedSuggestions.map((s) => (
                <tr key={s.id}>
                  <td className="py-2 px-4 border-b">{s.content}</td>
                  <td className="py-2 px-4 border-b">{s.user ? `${s.user.firstName} ${s.user.lastName} (${s.user.email})` : '-'}</td>
                  <td className="py-2 px-4 border-b">{s.createdAt ? new Date(s.createdAt).toLocaleDateString() : '-'}</td>
                  <td className="py-2 px-4 border-b">{s.status === 'READ' ? 'READ' : 'UNREAD'}</td>
                  <td className="py-2 px-4 border-b flex gap-2">
                    <Link
                      to={`/dashboard/suggestion/view/${s.id}`}
                      className="text-green-600 hover:underline"
                    >
                      View
                    </Link>
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => { setEditId(s.id); setEditModalOpen(true); }}
                    >
                      Edit
                    </button>
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Pagination */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-2 py-1">{page} / {Math.max(1, Math.ceil(filteredSuggestions.length / ITEMS_PER_PAGE))}</span>
        <button
          onClick={() => setPage((p) => Math.min(Math.ceil(filteredSuggestions.length / ITEMS_PER_PAGE), p + 1))}
          disabled={page === Math.ceil(filteredSuggestions.length / ITEMS_PER_PAGE) || filteredSuggestions.length === 0}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <EditSuggestionModal
        suggestionId={editId}
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onUpdated={refreshSuggestions}
      />
    </div>
  );
};

export default AllSuggestion;