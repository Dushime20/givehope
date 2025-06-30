import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../../config/ApiConfig';
import { toast } from 'sonner';

const statuses = ['UNREAD', 'READ'];

const EditSuggestionModal = ({ suggestionId, isOpen, onClose, onUpdated }) => {
  const { id } = useParams();
  const [status, setStatus] = useState('UNREAD');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [suggestion, setSuggestion] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen || !suggestionId) return;
    setLoading(true);
    setError(null);
    ApiService.getSuggestionById(suggestionId)
      .then((data) => {
        setSuggestion(data);
        setStatus(data.status === 'READ' ? 'READ' : 'UNREAD');
      })
      .catch(() => setError('Failed to load suggestion'))
      .finally(() => setLoading(false));
  }, [isOpen, suggestionId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await ApiService.updateSuggestionById(suggestionId, { status });
      setSuccess(true);
      toast.success('Suggestion status updated!');
      if (onUpdated) onUpdated();
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1000);
    } catch {
      setError('Failed to update status');
      toast.error('Failed to update status');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-4">Edit Suggestion Status</h2>
        {loading ? (
          <div className="text-center py-6">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 mb-4">{error}</div>
        ) : suggestion ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Suggestion</label>
              <div className="p-2 bg-gray-100 rounded">{suggestion.content}</div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">User</label>
              <div className="p-2 bg-gray-100 rounded">{suggestion.user ? `${suggestion.user.firstName} ${suggestion.user.lastName} (${suggestion.user.email})` : '-'}</div>
            </div>
            <div className="mb-4">
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
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              disabled={loading}
            >
              Update Status
            </button>
            {success && <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">Status updated!</div>}
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default EditSuggestionModal; 