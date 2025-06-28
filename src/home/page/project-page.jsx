"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import ApiService from "../../config/ApiConfig"

export default function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all') // all, current, completed, featured
  const [searchTerm, setSearchTerm] = useState('')

 useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await ApiService.getAllProjectsAdmin();
        console.log('Projects response:', response); // Debug log
        
        // Handle the response structure: { data: [...], meta: {...} }
        if (response.data && Array.isArray(response.data)) {
          setProjects(response.data);
          
        } else {
          // Fallback if response structure is different
          setProjects(Array.isArray(response) ? response : []);
          
        }
      } catch (err) {
        setError('Failed to fetch projects.');
        toast.error('Failed to fetch projects.');
       
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) {
      return '';
    }
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        
        return 'Invalid Date';
      }
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
  
      return 'Invalid Date';
    }
  }

  // Helper function to format currency
  const formatCurrency = (amount) => {
    try {
      const numAmount = Number(amount);
      if (isNaN(numAmount)) {
       
        return '$0.00';
      }
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(numAmount);
    } catch (error) {
     
      return '$0.00';
    }
  }

  // Helper function to calculate progress percentage
  const getProgressPercentage = (raised, target) => {
    try {
      const numRaised = Number(raised) || 0;
      const numTarget = Number(target) || 0;
      
      if (numTarget === 0) {
      
        return 0;
      }
      
      const percentage = Math.round((numRaised / numTarget) * 100);

      return percentage;
    } catch (error) {
      
      return 0;
    }
  }

  // Helper function to format tags
  const formatTags = (tags) => {
    try {
      if (!tags) {
        console.log('ℹ️ No tags provided');
        return [];
      }
      
      if (Array.isArray(tags)) {
        console.log('✅ Tags is already an array:', tags);
        return tags;
      }
      
      if (typeof tags === 'string') {
        console.log('🔄 Converting string tags to array:', tags);
        try {
          const parsed = JSON.parse(tags);
          if (Array.isArray(parsed)) {
            
            return parsed;
          }
        } catch (parseError) {
          
          return tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
        }
      }
      
     
      return [];
    } catch (error) {
   
      return [];
    }
  }

  // Filter projects based on current filter and search term
  const filteredProjects = projects.filter(project => {
    try {
      // First check if project matches the search term
      const matchesSearch = searchTerm === '' || 
                           (project.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (project.description || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                           formatTags(project.tags).some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Then check if project matches the selected filter
      let matchesFilter = true; // Default to true (show all)
      
      if (filter === 'current') {
        matchesFilter = new Date(project.endDate) > new Date();
      } else if (filter === 'completed') {
        matchesFilter = new Date(project.endDate) <= new Date();
      } else if (filter === 'featured') {
        matchesFilter = project.isFeatured === true;
      }
      // For 'all' filter, matchesFilter remains true
      
      console.log('🔍 Filtering project:', {
        id: project.id,
        title: project.title,
        endDate: project.endDate,
        isFeatured: project.isFeatured,
        currentFilter: filter,
        searchTerm: searchTerm,
        matchesSearch,
        matchesFilter,
        finalResult: matchesSearch && matchesFilter
      });
      
      return matchesSearch && matchesFilter;
    } catch (error) {
     
      return false;
    }
  });

  const currentProjects = projects.filter(project => {
    try {
      const isCurrent = new Date(project.endDate) > new Date();
      console.log('📅 Checking if current:', {
        title: project.title,
        endDate: project.endDate,
        isCurrent
      });
      return isCurrent;
    } catch (error) {
      console.error('❌ Error checking if project is current:', project, error);
      return false;
    }
  });
  
  const completedProjects = projects.filter(project => {
    try {
      const isCompleted = new Date(project.endDate) <= new Date();
      console.log('📅 Checking if completed:', {
        title: project.title,
        endDate: project.endDate,
        isCompleted
      });
      return isCompleted;
    } catch (error) {
      console.error('❌ Error checking if project is completed:', project, error);
      return false;
    }
  });
  
  const featuredProjects = projects.filter(project => {
    try {
      const isFeatured = project.isFeatured === true;
      console.log('⭐ Checking if featured:', {
        title: project.title,
        isFeatured: project.isFeatured,
        result: isFeatured
      });
      return isFeatured;
    } catch (error) {
      console.error('❌ Error checking if project is featured:', project, error);
      return false;
    }
  });

  // Log component state changes
  useEffect(() => {
    console.log('📊 Component state updated:', {
      totalProjects: projects.length,
      filteredProjects: filteredProjects.length,
      currentProjects: currentProjects.length,
      completedProjects: completedProjects.length,
      featuredProjects: featuredProjects.length,
      filter,
      searchTerm,
      loading,
      error
    });
    
    // Log detailed project information
    console.log('📋 All projects:', projects.map(p => ({
      id: p.id,
      title: p.title,
      endDate: p.endDate,
      isFeatured: p.isFeatured
    })));
    
    console.log('📋 Filtered projects:', filteredProjects.map(p => ({
      id: p.id,
      title: p.title,
      endDate: p.endDate,
      isFeatured: p.isFeatured
    })));
  }, [projects, filteredProjects, filter, searchTerm, loading, error]);

  return (
    <div className="min-h-screen mt-8">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search projects by title, description, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              All ({projects.length})
            </Button>
            <Button
              variant={filter === 'current' ? 'default' : 'outline'}
              onClick={() => setFilter('current')}
            >
              Current ({currentProjects.length})
            </Button>
            <Button
              variant={filter === 'completed' ? 'default' : 'outline'}
              onClick={() => setFilter('completed')}
            >
              Completed ({completedProjects.length})
            </Button>
            <Button
              variant={filter === 'featured' ? 'default' : 'outline'}
              onClick={() => setFilter('featured')}
            >
              Featured ({featuredProjects.length})
            </Button>
          </div>
        </div>

        {/* Display Status */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            {searchTerm ? `Showing ${filteredProjects.length} of ${projects.length} projects matching "${searchTerm}"` : 
             filter === 'all' ? `Showing all ${filteredProjects.length} projects` :
             `Showing ${filteredProjects.length} ${filter} projects`}
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="text-blue-600 font-semibold text-lg">Loading projects...</div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <div className="text-red-600 font-semibold text-lg">{error}</div>
            <Button onClick={fetchProjects} className="mt-4">Try Again</Button>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredProjects.map((project, index) => {
              try {
                console.log(`🎴 Rendering project card ${index + 1}:`, {
                  id: project.id,
                  title: project.title,
                  hasImage: !!project.imageUrl,
                  hasTags: !!project.tags,
                  isFeatured: project.isFeatured,
                  targetFund: project.targetFund,
                  raisedFund: project.raisedFund
                });
                
                return (
                  <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={project.imageUrl || '/src/assets/images/placeholder.jpg'}
                        alt={project.title || 'Project image'}
                        className="w-full h-48 object-cover"
                        crossOrigin="anonymous"
                        onError={(e) => {
                          console.warn('⚠️ Image failed to load:', project.imageUrl);
                          e.target.src = '/src/assets/images/placeholder.jpg';
                        }}
                        onLoad={() => {
                          console.log('✅ Image loaded successfully:', project.imageUrl);
                        }}
                      />
                      {project.isFeatured && (
                        <Badge className="absolute top-2 right-2 bg-blue-700 text-white">
                          Featured
                        </Badge>
                      )}
                      <Badge className={`absolute top-2 left-2 ${
                        new Date(project.endDate) > new Date() 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-500 text-white'
                      }`}>
                        {new Date(project.endDate) > new Date() ? 'Active' : 'Completed'}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
                        {project.title || 'Untitled Project'}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {project.description || 'No description available'}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {formatTags(project.tags).slice(0, 3).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {formatTags(project.tags).length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{formatTags(project.tags).length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-4">
                        <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                          <Link to={`/project/${project.id}`}>
                            Learn More
                          </Link>
                        </Button>
                        {new Date(project.endDate) > new Date() && (
                          <Button asChild className="flex-1 bg-gray-500 hover:bg-gray-400 text-white">
                            <Link to="/donate-page">
                              Donate
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              } catch (error) {
                console.error('❌ Error rendering project card:', project, error);
                return (
                  <Card key={project.id} className="overflow-hidden border-red-200 bg-red-50">
                    <CardContent className="p-4">
                      <p className="text-red-600 text-sm">Error rendering project: {project.title || project.id}</p>
                      <p className="text-red-500 text-xs mt-2">{error.message}</p>
                    </CardContent>
                  </Card>
                );
              }
            })}
          </div>
        )}

        {/* No Results */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-500 font-semibold text-lg">No projects found matching your criteria.</div>
            <Button onClick={() => { setFilter('all'); setSearchTerm(''); }} className="mt-4">
              View All Projects
            </Button>
          </div>
        )}

       
      </main>

      <Toaster position="top-right" richColors />
    </div>
  )
}
