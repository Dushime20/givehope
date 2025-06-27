import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Home Pages
import MainLayout from './home/layout/MainLayout';
import Home from './home/page/Home';
import About from './home/page/About';
import Contact from './home/page/Contact';
import Videos from './home/page/Videos';

import BlogSingle from './home/page/Blog-single';
import Donate from './home/page/Donate';
import DonatePage from './home/page/donatePage/DonatePage';
import Resources from './home/page/resources/Resources';
import ViewResource from './home/page/resources/ViewResource';
import ProjectsPage from './home/page/project-page';
import ProjectDetail from './home/page/project/project-deatails';
import ImageGalleryPage from './home/page/home/ImageGalleryPage';
import AuthTabs from './auth/AuthTabs';
import AllBlogs from './dashboard/blog/allBlog';
import AddBlog from './dashboard/blog/addBlog';
import EditBlog from './dashboard/blog/editBlog';
import AllResources from './dashboard/resource/AllResource';
import AddResource from './dashboard/resource/AddResource';
import EditResource from './dashboard/resource/EditResource';
import AllProjects from './dashboard/project/AllProjects';
import AddProject from './dashboard/project/AddProject';
import EditProject from './dashboard/project/EditProject';
import Dashboard from './dashboard/dashboard';
import UserSettings from './dashboard/user/User';
import AddNewUser from './dashboard/user/AddUser';
import EditUser from './dashboard/user/EditUser';
import Blog from './home/page/Blog';
import AllImage from './dashboard/image/allImage';
import AddImage from './dashboard/image/addImage';
import EditImage from './dashboard/image/editImage';
import AllVideo from './dashboard/video/allVideo';
import AddVideo from './dashboard/video/addVideo';
import EditVideo from './dashboard/video/editVideo';
import AllTeam from './dashboard/team/allTeam';
import AddNewTeam from './dashboard/team/addNewTeam';
import EditTeam from './dashboard/team/editTeam';
import AllSuggestion from './dashboard/suggestion/allSuggestion';
import AddSuggestion from './dashboard/suggestion/addSuggestion';
import EditSuggestion from './dashboard/suggestion/editSuggestion';
import GenerateReport from './dashboard/report/generateReport';
import Overview from './dashboard/over-view';




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
          {/* Overview */}
          <Route path="/dashboard/overview" element={<Overview />} />
          {/* User Management */}
          <Route path="/dashboard/user-settings" element={<UserSettings />} />
          <Route path="/dashboard/add-user" element={<AddNewUser />} />
          <Route path="/dashboard/edit-user/:id" element={<EditUser />} />

          {/* Blog Management */}
          <Route path="/dashboard/blog" element={<AllBlogs />} />
          <Route path="/dashboard/blogs/add" element={<AddBlog/>} />
          <Route path="/dashboard/blogs/edit/:id" element={<EditBlog />} />

          {/* Resource Management */}
          <Route path="/dashboard/resource" element={<AllResources />} />
          <Route path="/dashboard/resources/add" element={<AddResource />} />
          <Route path="/dashboard/resources/edit/:id" element={<EditResource />} />

          {/* Project Management */}
          <Route path="/dashboard/project" element={<AllProjects/>} />
          <Route path="/dashboard/projects/add" element={<AddProject />} />
          <Route path="/dashboard/project/edit/:id" element={<EditProject />} />

          {/* Image Management */}
          <Route path="/dashboard/image" element={<AllImage />} />
          <Route path="/dashboard/image/add" element={<AddImage />} />
          <Route path="/dashboard/image/edit/:id" element={<EditImage />} />

          {/* Video Management */}
          <Route path="/dashboard/video" element={<AllVideo />} />
          <Route path="/dashboard/video/add" element={<AddVideo />} />
          <Route path="/dashboard/video/edit/:id" element={<EditVideo />} />

          {/* Team Management */}
          <Route path="/dashboard/team" element={<AllTeam />} />
          <Route path="/dashboard/team/add" element={<AddNewTeam />} />
          <Route path="/dashboard/team/edit/:id" element={<EditTeam />} />

          {/* Suggestion Management */}
          <Route path="/dashboard/suggestions" element={<AllSuggestion />} />
          <Route path="/dashboard/suggestion/add" element={<AddSuggestion />} />
          <Route path="/dashboard/suggestion/edit/:id" element={<EditSuggestion />} />

          {/* Report Management */}
          <Route path="/dashboard/reports" element={<GenerateReport />} />
        </Route>

        {/* Dashboard Default Route */}
        <Route path="/dashboard" element={<Navigate to="/dashboard/overview" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
