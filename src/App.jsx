import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './home/layout/Navbar'
import Home from './home/page/Home'
import About from './home/page/About'
import Blog from './home/page/Blog'
import BlogSingle from './home/page/Blog-single'
import Contact from './home/page/Contact'
import Donate from './home/page/Donate'
import Videos from './home/page/Videos'
import Gallery from './home/page/Gallery'

import Footer from './home/layout/Footer'
import DonatePage from './home/page/donatePage/DonatePage'
import ProjectsPage from './home/page/project-page'
import ProjectDetail from './home/page/project/project-deatails'
import ImageGalleryPage from './home/page/home/ImageGalleryPage'



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/gallery" element={<ImageGalleryPage/>} />
         
          <Route path="/donate-page" element={<DonatePage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/projects-details" element={<ProjectDetail/>} />
         
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App 