"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import ApiService from "../../../config/ApiConfig"


export default function HomeProject() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await ApiService.getAllProjects()
      if (response.data && Array.isArray(response.data)) {
        setProjects(response.data)
      } else {
        setProjects(Array.isArray(response) ? response : [])
      }
    } catch (err) {
      setError('Failed to fetch projects.')
      toast.error('Failed to fetch projects.')
    } finally {
      setLoading(false)
    }
  }

  const formatTags = (tags) => {
    if (!tags) return []
    if (Array.isArray(tags)) return tags
    if (typeof tags === 'string') {
      try {
        const parsed = JSON.parse(tags)
        return Array.isArray(parsed) ? parsed : []
      } catch {
        return tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
      }
    }
    return []
  }

  const displayedProjects = projects.slice(0, 3)

  return (
    <div className="min-h-screen mt-8  bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header section */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
           <Link
                      to="/projects"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View All
                    </Link>
        </div>

        {loading && (
          <div className="text-center py-20">
            <div className="text-blue-600 font-semibold text-lg">Loading projects...</div>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <div className="text-red-600 font-semibold text-lg">{error}</div>
            <Button onClick={fetchProjects} className="mt-4">Try Again</Button>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {displayedProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={project.imageUrl || '/src/assets/images/placeholder.jpg'}
                    alt={project.title || 'Project image'}
                    className="w-full h-48 object-cover"
                    crossOrigin="anonymous"
                    onError={(e) => {
                      e.target.src = '/src/assets/images/placeholder.jpg'
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
            ))}
          </div>
        )}

        {!loading && !error && displayedProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-500 font-semibold text-lg">No projects found.</div>
          </div>
        )}
      </main>

      <Toaster position="top-right" richColors />
    </div>
  )
}
