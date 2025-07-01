import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Share2, Bookmark } from "lucide-react"
import ApiService from "@/config/ApiConfig"
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'

export default function ProjectDetail() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProject()
  }, [id])

  const fetchProject = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await ApiService.getProjectById(id)
      console.log('Project detail response:', response)
      
      if (response.data) {
        setProject(response.data)
      } else if (response.id) {
        setProject(response)
      } else {
        setProject(null)
      }
    } catch (err) {
      setError('Failed to fetch project details.')
      toast.error('Failed to fetch project details.')
      console.error('Error fetching project:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  }

  const getProgressPercentage = (raised, target) => {
    if (!target || target === 0) return 0;
    return Math.round((raised / target) * 100);
  }

  const formatTags = (tags) => {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags;
    if (typeof tags === 'string') {
      try {
        const parsed = JSON.parse(tags);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
      }
    }
    return [];
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-gray-600 font-medium">Loading project details...</div>
        </div>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Not Found</h2>
          <p className="text-gray-600 mb-6">{error || 'The project you are looking for does not exist.'}</p>
          <div className="space-x-4">
            <Button onClick={fetchProject} variant="outline">Try Again</Button>
            <Button asChild>
              <Link to="/projects">Back to Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const isActive = new Date(project.endDate) > new Date()

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" richColors />
      
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button asChild variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            <Link to="/projects" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="relative">
                <img
                  src={project.imageUrl || '/src/assets/images/placeholder.jpg'}
                  alt={project.title || 'Project image'}
                  className="w-full h-80 object-cover"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    e.target.src = '/src/assets/images/placeholder.jpg';
                  }}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {isActive ? (
                    <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>
                  ) : (
                    <Badge className="bg-gray-100 text-gray-800 border-gray-200">Completed</Badge>
                  )}
                  {project.isFeatured && (
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">Featured</Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="p-8 space-y-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {project.title || 'Untitled Project'}
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-b border-gray-100 py-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{project.beneficiaries || 0}</div>
                    <div className="text-sm text-gray-500">Beneficiaries</div>
                  </div>
                  {project.targetFund > 0 && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{formatCurrency(project.raisedFund)}</div>
                      <div className="text-sm text-gray-500">Raised</div>
                    </div>
                  )}
                  {project.targetFund > 0 && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{formatCurrency(project.targetFund)}</div>
                      <div className="text-sm text-gray-500">Target</div>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{formatDate(project.startDate)}</div>
                    <div className="text-sm text-gray-500">Started</div>
                  </div>
                </div>
                {project.targetFund > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Funding Progress</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-gray-900">Progress</span>
                        <span className="text-lg font-bold text-blue-600">
                          {getProgressPercentage(project.raisedFund, project.targetFund)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${getProgressPercentage(project.raisedFund, project.targetFund)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Raised: {formatCurrency(project.raisedFund)}</span>
                        <span>Target: {formatCurrency(project.targetFund)}</span>
                      </div>
                    </div>
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {project.description || 'No detailed description available for this project.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6  top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Status</span>
                  <Badge className={isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                    {isActive ? 'Active' : 'Completed'}
                  </Badge>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Start Date</span>
                  <span className="font-medium">{formatDate(project.startDate)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">End Date</span>
                  <span className="font-medium">{formatDate(project.endDate)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Beneficiaries</span>
                  <span className="font-medium">{project.beneficiaries || 0}</span>
                </div>
                {project.targetFund > 0 && (
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Target Fund</span>
                    <span className="font-medium">{formatCurrency(project.targetFund)}</span>
                  </div>
                )}
                {project.raisedFund > 0 && (
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Raised Fund</span>
                    <span className="font-medium">{formatCurrency(project.raisedFund)}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50  to-indigo-50 rounded-2xl border border-blue-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Support This Project</h3>
              <div className="space-y-3">
                {isActive && (
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link to="/donate-page">
                      <Heart className="w-4 h-4 mr-2" />
                      Donate Now
                    </Link>
                  </Button>
                )}
                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                <Link to={"/contact"}>Contact us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 