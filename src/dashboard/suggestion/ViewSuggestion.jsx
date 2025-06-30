import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ApiService from '../../config/ApiConfig';

const ViewSuggestion = () => {
  const { id } = useParams();
  const [suggestion, setSuggestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    ApiService.getSuggestionById(id)
      .then((data) => setSuggestion(data))
      .catch(() => setError('Failed to load suggestion'))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-6">Suggestion Details</h2>
      {loading ? (
        <div className="text-center py-8 text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center py-8 text-red-500">{error}</div>
      ) : suggestion ? (
        <div>
         
          <div className="mb-4">
            <span className="font-semibold">Content:</span>
            <div className="p-2 rounded mt-1">{suggestion.content}</div>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Created At:</span> {suggestion.createdAt ? new Date(suggestion.createdAt).toLocaleString() : '-'}
          </div>
        
          <div className="mb-4">
            <span className="font-semibold">Status:</span> {suggestion.status === 'READ' ? 'READ' : 'UNREAD'}
          </div>
          <div className="mb-4">
            <span className="font-semibold">User:</span>
            <div className="p-2 rounded mt-1">
              {suggestion.user ? (
                <>
                  {suggestion.user.firstName} {suggestion.user.lastName} <br />
                  {suggestion.user.email}
                </>
              ) : '-'}
            </div>
          </div>
          <Link to="/dashboard/suggestions" className="text-blue-600 hover:underline">Back to All Suggestions</Link>
        </div>
      ) : null}
    </div>
  );
};

export default ViewSuggestion; 