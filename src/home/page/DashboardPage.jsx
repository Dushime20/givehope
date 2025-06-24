"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart3,
  Users,
  FileText,
  ImageIcon,
  Video,
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  X,
  Save,
} from "lucide-react";
import useBlogs from "../../hooks/useBlogs";
import { blogService } from "../services/blogService";

const DashboardPage = ({ navigate, currentPage }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [adminUser, setAdminUser] = useState("");
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const [blogForm, setBlogForm] = useState({
    title: "",
    content: "",
    excerpt: "",
    author: "",
    category: "",
    tags: [],
    image: "",
    published: true,
  });

  const { blogs, loading: blogsLoading, error: blogsError, refreshBlogs } = useBlogs();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    const user = localStorage.getItem("adminUser");
    if (!isLoggedIn) return navigate("login");
    setAdminUser(user || "Admin");
    setBlogForm((prev) => ({ ...prev, author: user || "Admin" }));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("adminUser");
    localStorage.removeItem("authToken");
    navigate("home");
  };

  const handleBlogFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "tags") {
      const tagsArray = value.split(",").map((tag) => tag.trim()).filter(Boolean);
      setBlogForm((prev) => ({ ...prev, tags: tagsArray }));
    } else if (type === "checkbox") {
      setBlogForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setBlogForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmitBlog = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    if (!blogForm.title || !blogForm.content || !blogForm.category) {
      setSubmitMessage({ type: "error", text: "Please fill in all required fields" });
      setIsSubmitting(false);
      return;
    }

    const blogData = {
      ...blogForm,
      excerpt: blogForm.excerpt || blogForm.content.substring(0, 150) + "...",
    };

    try {
      const response = await blogService.createBlog(blogData);
      if (response.success) {
        setSubmitMessage({ type: "success", text: "Blog post created successfully!" });
        setBlogForm({
          title: "",
          content: "",
          excerpt: "",
          author: adminUser,
          category: "",
          tags: [],
          image: "",
          published: true,
        });
        refreshBlogs();
        setTimeout(() => {
          setShowBlogForm(false);
          setSubmitMessage(null);
        }, 2000);
      } else {
        setSubmitMessage({ type: "error", text: response.error || "Failed to create blog post" });
      }
    } catch {
      setSubmitMessage({ type: "error", text: "An error occurred while creating the blog post" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeBlogForm = () => {
    setShowBlogForm(false);
    setSubmitMessage(null);
    setBlogForm({
      title: "",
      content: "",
      excerpt: "",
      author: adminUser,
      category: "",
      tags: [],
      image: "",
      published: true,
    });
  };

  const stats = [
    { title: "Total Projects", value: "12", change: "+2", icon: FileText, color: "bg-blue-500" },
    { title: "Blog Posts", value: (blogs?.length || 0).toString(), change: "+5", icon: FileText, color: "bg-green-500" },
    { title: "Gallery Items", value: "156", change: "+12", icon: ImageIcon, color: "bg-purple-500" },
    { title: "Team Members", value: "8", change: "+1", icon: Users, color: "bg-orange-500" },
  ];

  const recentProjects = [
    { id: 1, title: "Education and Skills Training", status: "Active", date: "2024-01-15" },
    { id: 2, title: "Health and Wellness Program", status: "Active", date: "2024-01-10" },
    { id: 3, title: "Economic Empowerment Initiative", status: "Completed", date: "2024-01-05" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b p-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">RNADW Admin Dashboard</h1>
          <p className="text-sm text-gray-600">Welcome back, {adminUser}</p>
        </div>
        <div className="space-x-4">
          <button onClick={() => navigate("home")} className="text-green-600 flex items-center">
            <Eye className="w-5 h-5 mr-1" /> View Site
          </button>
          <button onClick={handleLogout} className="text-red-500 flex items-center">
            <LogOut className="w-5 h-5 mr-1" /> Logout
          </button>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-white shadow-sm p-6">
          <ul className="space-y-2">
            {[
              ["overview", "Overview", BarChart3],
              ["projects", "Projects", FileText],
              ["blogs", "Blogs", FileText],
              ["gallery", "Gallery", ImageIcon],
              ["team", "Team", Users],
              ["settings", "Settings", Settings],
            ].map(([tab, label, Icon]) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                    activeTab === tab
                      ? "bg-green-100 text-green-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1 p-6">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600">{stat.title}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                        <p className="text-sm text-green-600 flex items-center mt-1">
                          <TrendingUp className="w-4 h-4 mr-1" /> {stat.change} this month
                        </p>
                      </div>
                      <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Project List</h2>
              <ul className="space-y-4">
                {recentProjects.map((project) => (
                  <li key={project.id} className="bg-white rounded-md p-4 shadow-sm">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p className="text-sm text-gray-500">Status: {project.status}</p>
                      </div>
                      <div className="text-sm text-gray-400">{project.date}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
