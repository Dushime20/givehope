import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './home/layout/Navbar'
import Home from './home/page/Home'
import About from './home/page/About'
import Blog from './home/page/Blog'
import BlogSingle from './home/page/Blog-single'
import Contact from './home/page/Contact'
import Donate from './home/page/Donate'
import Gallery from './home/page/Gallery'
import HowItWorks from './home/page/HowItWorks'
import Footer from './home/layout/Footer'


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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/how-it-works" element={<HowItWorks/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App 