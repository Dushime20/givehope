import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-[#155dfd] py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {/* About Us */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">About Us</h3>
                  <p className="text-black mb-4">
                    Rwanda National Association of Deaf Women - Empowering deaf women and girls through advocacy, education, and community building since 2005.
                  </p>
                  <p className="text-black mb-4">
                   Organization of People with Disabilities (OPD) which is fully registered with Rwanda Governance Board (RGB).
                  </p>
                  
                </div>
    
                {/* Recent Blog */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Recent Blog</h3>
                  <div className="space-y-4">
                    {/* Recent Blog 1 */}
                    <div className="flex gap-4">
                      <img src="/images/img_1.jpg" alt="" className="w-20 h-20 object-cover rounded" />
                      <div>
                        <h4 className="font-medium mb-1">
                          <Link to="/blog-single" className="text-black">
                            Water Is Life. Clean Water In Urban Area
                          </Link>
                        </h4>
                        <div className="text-sm text-black">
                          <span>July 29, 2018</span>
                          <span className="mx-2">•</span>
                          <span>Admin</span>
                          <span className="mx-2">•</span>
                          <span>19</span>
                        </div>
                      </div>
                    </div>
    
                    {/* Recent Blog 2 */}
                    <div className="flex gap-4">
                      <img src="/images/img_2.jpg" alt="" className="w-20 h-20 object-cover rounded" />
                      <div>
                        <h4 className="font-medium mb-1">
                          <Link to="/blog-single" className="text-black">
                            Life Is Short So Be Kind
                          </Link>
                        </h4>
                        <div className="text-sm text-black">
                          <span>July 29, 2018</span>
                          <span className="mx-2">•</span>
                          <span>Admin</span>
                          <span className="mx-2">•</span>
                          <span>19</span>
                        </div>
                      </div>
                    </div>
    
                    {/* Recent Blog 3 */}
                    <div className="flex gap-4">
                      <img src="/images/img_4.jpg" alt="" className="w-20 h-20 object-cover rounded" />
                      <div>
                        <h4 className="font-medium mb-1">
                          <Link to="/blog-single" className="text-black">
                            Unfortunate Children Need Your Love
                          </Link>
                        </h4>
                        <div className="text-sm text-black">
                          <span>July 29, 2018</span>
                          <span className="mx-2">•</span>
                          <span>Admin</span>
                          <span className="mx-2">•</span>
                          <span>19</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                {/* Get Connected */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Get Connected</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-black">
                        KG 125 St, 304,<br/>
                         Ikaro Plaza,<br/> Kigali, Rwanda</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:+23923929210" className="text-black">+250 784 591 495</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:info@yourdomain.com" className="text-black">info@rnadw.org.rw</a>
                    </li>
                  </ul>
                </div>
              </div>
    
              {/* Copyright */}
              <div className="text-center text-black pt-8 border-t border-gray-800">
                <p>
                  Copyright © {new Date().getFullYear()} <Link to={"/auth"}>RNADW</Link>. All rights reserved {' '}
                  
                </p>
              </div>
            </div>
          </footer>
  )
}

export default Footer 