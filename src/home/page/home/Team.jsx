import React, { useEffect, useState } from 'react';
import ApiService from '@/config/ApiConfig';

const Team = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await ApiService.getAllTeamMembers();
        console.log('Fetched team members:', response); // Debugging log
        setMembers(Array.isArray(response) ? response : []);
      } catch (err) {
        setError('Failed to load team members');
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  // Filter by type and status (show if status is missing or ACTIVE)
  const isActive = m => !m.status || (m.status || '').toUpperCase() === 'ACTIVE';
  const executiveBoard = members.filter(m =>
    ["EXCUTIVE", "EXECUTIVE"].includes((m.type || '').toUpperCase()) &&
    isActive(m)
  );
  const staffTeam = members.filter(m =>
    (m.type || '').toUpperCase() === 'STAFF' &&
    isActive(m)
  );

  const renderMemberCard = (member) => (
    <div
      key={member.id}
      className="bg-white rounded-2xl border border-blue-100 shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
    >
      <div className="mb-4 relative">
        {member.imageUrl ? (
          <img
            src={member.imageUrl}
            alt={`${member.firstName} ${member.lastName}`}
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow group-hover:scale-105 transition-transform duration-300 bg-blue-50"
            crossOrigin="anonymous"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-3xl text-gray-400 font-bold">
            {member.firstName?.charAt(0)?.toUpperCase()}{member.lastName?.charAt(0)?.toUpperCase()}
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1 font-serif group-hover:text-blue-700 transition-colors duration-300">{member.firstName} {member.lastName}</h3>
      <p className="text-blue-700 font-semibold mb-2 text-sm uppercase tracking-wide">{member.role}</p>
      <p className="text-gray-600 text-sm line-clamp-3 font-light">{member.bio}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br bg-white/60 rounded-2xl shadow ">
      <div className="max-w-7xl mx-auto py-5 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-serif tracking-tight">OUR TEAM</h2>
          <span className="text-blue-600 font-semibold uppercase tracking-widest">Meet the Board</span>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 mb-4 rounded"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-base font-light">
            Our leadership and staff are dedicated to empowering the deaf community and driving our mission forward with passion and professionalism.
          </p>
        </div>
        {loading ? (
          <div className="text-center text-blue-600">Loading team members...</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : (
          <>
            {/* Executive Board */}
            <section className="mb-20  p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-2 text-center font-serif tracking-tight">Executive Board</h3>
              <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto font-light">
                Visionary leaders guiding our organization with expertise and commitment.
              </p>
              {executiveBoard.length === 0 ? (
                <div className="text-center text-gray-500">No executive board members found.</div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {executiveBoard.map(renderMemberCard)}
                </div>
              )}
            </section>
            {/* Staff Team */}
            <section className=" p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-2 text-center font-serif tracking-tight">Staff Team</h3>
              <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto font-light">
                Dedicated professionals working every day to support our mission and serve our community.
              </p>
              {staffTeam.length === 0 ? (
                <div className="text-center text-gray-500">No staff team members found.</div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {staffTeam.map(renderMemberCard)}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Team;