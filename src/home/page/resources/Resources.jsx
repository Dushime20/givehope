import React, { useState, useEffect, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import ResourceCard from "./ResourceCard";
import ApiService from "../../../config/ApiConfig";


const Resources = () => {
  const [groups, setGroups] = useState([]); // [{id, name, resources: []}]
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      try {
        const res = await ApiService.getAllResources();
        setGroups(res || []);
      } catch (err) {
        // Optionally show error
      } finally {
        setLoading(false);
      }
    };
    fetchResources();
  }, []);

  // Filter groups and their resources
  const filteredGroups = useMemo(() => {
    if (!filter.trim()) return groups;
    return groups
      .map(group => ({
        ...group,
        resources: (group.resources || []).filter(resource =>
          group.name.toLowerCase().includes(filter.toLowerCase()) ||
          resource.description?.toLowerCase().includes(filter.toLowerCase())
        )
      }))
      .filter(group =>
        group.name.toLowerCase().includes(filter.toLowerCase()) ||
        (group.resources && group.resources.length > 0)
      );
  }, [groups, filter]);


    // const iconMap = {
    //   pdf: <FaFilePdf className="text-red-600 text-3xl" />,
    //   link: <FaExternalLinkAlt className="text-yellow-600 text-3xl" />,
    //   video: <FaVideo className="text-purple-600 text-3xl" />,
    // };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-12">
      {/* Search bar */}
      <div className="max-w-md mx-auto mb-12 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search resources or group..."
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="text-center py-12 text-blue-600 font-semibold">Loading resources...</div>
      ) : filteredGroups.length > 0 ? (
        <div className="space-y-12">
          {filteredGroups.map(group => (
            <div key={group.id}>
              <h2 className="text-2xl font-bold text-blue-700 mb-6">{group.name}</h2>
              {(!group.resources || group.resources.length === 0) ? (
                <div className="text-gray-400 mb-8">No resources in this group.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {group.resources.map(resource => (
                    <ResourceCard
                      key={resource.id}
                      id={resource.id}
                      type={resource.fileUrl?.toLowerCase().endsWith('.pdf') ? 'pdf' : resource.fileUrl?.toLowerCase().includes('youtube') || resource.fileUrl?.toLowerCase().includes('mp4') ? 'video' : 'link'}
                      title={resource.description?.slice(0, 30) + (resource.description?.length > 30 ? '...' : '')}
                      description={resource.description}
                      link={resource.fileUrl}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700">No resources found</h3>
          <p className="text-gray-500 mt-2">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default Resources;