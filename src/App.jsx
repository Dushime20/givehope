import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Home Pages
import MainLayout from './home/layout/MainLayout';
import Home from './home/page/Home';
import About from './home/page/About';
import Contact from './home/page/Contact';
import Videos from './home/page/Videos';
import Blog from './home/page/Blog';
import BlogSingle from './home/page/Blog-single';
import Donate from './home/page/Donate';
import DonatePage from './home/page/donatePage/DonatePage';
import Resources from './home/page/resources/Resources';
import ViewResource from './home/page/resources/ViewResource';
import ProjectsPage from './home/page/project-page';
import ProjectDetail from './home/page/project/project-deatails';
import ImageGalleryPage from './home/page/home/ImageGalleryPage';
import AuthTabs from './auth/AuthTabs';
import AllBlogs from './dashboard copy/blog/allBlog';
import AddBlog from './dashboard copy/blog/addBlog';
import EditBlog from './dashboard copy/blog/editBlog';
import AllResources from './dashboard copy/resource/AllResource';
import AddResource from './dashboard copy/resource/AddResource';
import EditResource from './dashboard copy/resource/EditResource';
import AllProjects from './dashboard copy/project/AllProjects';
import AddProject from './dashboard copy/project/AddProject';
import EditProject from './dashboard copy/project/EditProject';
import Dashboard from './dashboard copy/dashboard';
import UserSettings from './dashboard copy/user/User';
import AddNewUser from './dashboard copy/user/AddUser';
import EditUser from './dashboard copy/user/EditUser';



function App() {
  return (
    <Router>
      <Routes>
        {/* Home Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/gallery" element={<ImageGalleryPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate-page" element={<DonatePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects-details" element={<ProjectDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/view/:id" element={<ViewResource />} />
          <Route path="/auth" element={<AuthTabs />} />
        </Route>

        {/* Dashboard Routes */}
        <Route element={<Dashboard />}>
          {/* User Management */}
          <Route path="/dashboard/user-settings" element={<UserSettings />} />
          <Route path="/dashboard/add-user" element={<AddNewUser />} />
          <Route path="/dashboard/edit-user/:id" element={<EditUser />} />

          {/* Blog Management */}
          <Route path="/dashboard/blogs" element={<AllBlogs />} />
          <Route path="/dashboard/blogs/add" element={<AddBlog/>} />
          <Route path="/dashboard/blogs/edit/:id" element={<EditBlog />} />

          {/* Resource Management */}
          <Route path="/dashboard/resource" element={<AllResources />} />
          <Route path="/dashboard/resources/add" element={<AddResource />} />
          <Route path="/dashboard/resources/edit/:id" element={<EditResource />} />

          {/* Project Management */}
          <Route path="/dashboard/project" element={<AllProjects/>} />
          <Route path="/dashboard/projects/add" element={<AddProject />} />
          <Route path="/dashboard/projects/edit/:id" element={<EditProject />} />
        </Route>

        {/* Dashboard Default Route */}
        <Route path="/dashboard" element={<Navigate to="/dashboard/projects" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
