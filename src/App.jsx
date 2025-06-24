import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './home/layout/Navbar'
import Home from './home/page/Home'
import About from './home/page/About'
import Blog from './home/page/Blog'
import BlogSingle from './home/page/Blog-single'
import Contact from './home/page/Contact'
import Donate from './home/page/Donate'
import Videos from './home/page/Videos'
import Resources from './home/page/resources/Resources'
import ViewResource from './home/page/resources/ViewResource'
import Footer from './home/layout/Footer'
import DonatePage from './home/page/donatePage/DonatePage'
import ProjectsPage from './home/page/project-page'
import ProjectDetail from './home/page/project/project-deatails'
import ImageGalleryPage from './home/page/home/ImageGalleryPage'
import ScrollToTop from './home/layout/ScrollToTop'
import LoginPage from './home/page/LoginPage'
import DashboardPage from './home/page/DashboardPage'




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
          <Route path="/resources" element={<Resources/>} />
          <Route path="/resources/view/:id" element={<ViewResource />} />
           <Route path="/dashboard" element={<DashboardPage />} />
           <Route path="/login" element={<LoginPage />} />
         
        </Routes>
        <ScrollToTop/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App 