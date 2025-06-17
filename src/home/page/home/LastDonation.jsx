import React from 'react'
import { Link } from 'react-router-dom';

const LastDonation = () => {
  return (
    <div>
         {/* Latest Donations Section */}
    <div className="py-16">
           <div className="container mx-auto px-4">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold mb-4">Latest Donations</h2>
               <p className="text-lg text-gray-600 mb-4">
                 Some quick example text to build on the card title and make up the bulk of the card's content.
               </p>
               <Link to="#" className="text-blue-600 hover:text-blue-800 underline">
                 View All Donations
               </Link>
             </div>
   
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {/* Donation Card 1 */}
               <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                 <div className="text-center p-6">
                   <img src="/images/person_1.jpg" alt="Jorge Smith" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                   <h3 className="text-xl font-bold mb-2">Jorge Smith</h3>
                   <span className="text-gray-500 block mb-3">Donated Just now</span>
                   <p className="text-gray-700">
                     Donated <span className="text-green-600 font-semibold">$252</span>
                     <br />
                     <em>for</em>{' '}
                     <Link to="#" className="text-blue-600 hover:text-blue-800 underline">
                       Water Is Life. Clean Water In Urban Area
                     </Link>
                   </p>
                 </div>
               </div>
   
               {/* Donation Card 2 */}
               <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                 <div className="text-center p-6">
                   <img src="/images/person_2.jpg" alt="Christine Charles" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                   <h3 className="text-xl font-bold mb-2">Christine Charles</h3>
                   <span className="text-gray-500 block mb-3">Donated 1 hour ago</span>
                   <p className="text-gray-700">
                     Donated <span className="text-green-600 font-semibold">$400</span>
                     <br />
                     <em>for</em>{' '}
                     <Link to="#" className="text-blue-600 hover:text-blue-800 underline">
                       Children Needs Education
                     </Link>
                   </p>
                 </div>
               </div>
   
               {/* Donation Card 3 */}
               <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                 <div className="text-center p-6">
                   <img src="/images/person_3.jpg" alt="Albert Sluyter" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                   <h3 className="text-xl font-bold mb-2">Albert Sluyter</h3>
                   <span className="text-gray-500 block mb-3">Donated 4 hours ago</span>
                   <p className="text-gray-700">
                     Donated <span className="text-green-600 font-semibold">$1,200</span>
                     <br />
                     <em>for</em>{' '}
                     <Link to="#" className="text-blue-600 hover:text-blue-800 underline">
                       Need Shelter for Children in Africa
                     </Link>
                   </p>
                 </div>
               </div>
   
               {/* Donation Card 4 */}
               <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                 <div className="text-center p-6">
                   <img src="/images/person_4.jpg" alt="Andrew Holloway" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                   <h3 className="text-xl font-bold mb-2">Andrew Holloway</h3>
                   <span className="text-gray-500 block mb-3">Donated 9 hours ago</span>
                   <p className="text-gray-700">
                     Donated <span className="text-green-600 font-semibold">$100</span>
                     <br />
                     <em>for</em>{' '}
                     <Link to="#" className="text-blue-600 hover:text-blue-800 underline">
                       Water Is Life. Clean Water In Urban Area
                     </Link>
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
    </div>
  )
}

export default LastDonation