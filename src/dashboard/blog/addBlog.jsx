"use client"

import { useState, useRef, useCallback, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { X, Plus, Upload, Loader2 } from "lucide-react"
import ApiService from "../../config/ApiConfig"

const statusOptions = [
  { value: "PUBLISHED", label: "Published" },
  { value: "DRAFT", label: "Draft" },
]

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "background",
  "align",
]

export default function AddBlog() {
  const [title, setTitle] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState("")
  const [tags, setTags] = useState([])
  const [tagInput, setTagInput] = useState("")
  const [status, setStatus] = useState("PUBLISHED")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const quillRef = useRef(null)
  const navigate = useNavigate()

  // Memoize the image handler to prevent recreation on each render
  const imageHandler = useCallback(() => {
    const input = document.createElement("input")
    input.setAttribute("type", "file")
    input.setAttribute("accept", "image/*")
    input.click()

    input.onchange = () => {
      const file = input.files?.[0]
      if (file && quillRef.current) {
        if (!file.type.startsWith("image/")) {
          setError("Please select a valid image file.")
          return
        }
        if (file.size > 2 * 1024 * 1024) {
          setError("Inline image size should be less than 2MB.")
          return
        }

        const reader = new FileReader()
        reader.onload = (e) => {
          const quill = quillRef.current.getEditor()
          const range = quill.getSelection(true)
          quill.insertEmbed(range.index, "image", e.target?.result)
        }
        reader.readAsDataURL(file)
      }
    }
  }, [])

  // Memoize modules to prevent ReactQuill from re-initializing
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
          ["link", "image"],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    [imageHandler],
  )

  // Memoize content change handler
  const handleContentChange = useCallback((value) => {
    setContent(value)
  }, [])

  const handleAddTag = useCallback(
    (e) => {
      e.preventDefault()
      if (tagInput.trim() && !tags.includes(tagInput.trim())) {
        setTags((prev) => [...prev, tagInput.trim()])
        setTagInput("")
      }
    },
    [tagInput, tags],
  )

  const handleRemoveTag = useCallback((tag) => {
    setTags((prev) => prev.filter((t) => t !== tag))
  }, [])

  const handleImageChange = useCallback((e) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.")
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB.")
      return
    }

    setError(null)
    setImageFile(file)
    setImagePreview(URL.createObjectURL(file))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      if (!title.trim()) {
        setError("Please enter a blog title.")
        setLoading(false)
        return
      }
      if (!content.trim()) {
        setError("Please enter blog content.")
        setLoading(false)
        return
      }
      if (!imageFile) {
        setError("Please select an image.")
        setLoading(false)
        return
      }

      const formData = new FormData()
      formData.append("title", title.trim())
      formData.append("content", content)
      formData.append("file", imageFile)
      formData.append("tags", tags.join(","))
      formData.append("status", status)

      // Replace this with your API call
      await ApiService.Addblog(formData);

      setSuccess("Blog added successfully!")
      setTitle("")
      setContent("")
      setImageFile(null)
      setImagePreview("")
      setTags([])
      setTagInput("")
      setStatus("PUBLISHED")

      setTimeout(() => navigate("/dashboard/blog"), 1200)
    } catch (err) {
      setError("Failed to add blog. Please try again.")
      console.error("Error adding blog:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Blog</h1>
          <p className="text-gray-600">Create and publish your blog post</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Blog Details</h2>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title *
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="Enter an engaging blog title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Featured Image *
                </label>
                <div className="flex items-center gap-4">
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Upload className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-xs text-gray-500">Supported formats: JPG, PNG, GIF. Max size: 5MB</p>
                {imagePreview && (
                  <div className="mt-4">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Preview"
                      className="h-48 w-auto object-cover rounded-lg border shadow-sm"
                    />
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Tags</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        handleAddTag(e)
                      }
                    }}
                    placeholder="Add a tag and press Enter"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={handleAddTag}
                    type="button"
                    disabled={!tagInput.trim()}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                      >
                        {tag}
                        <button type="button" onClick={() => handleRemoveTag(tag)} className="hover:text-red-500 ml-1">
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Status */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {statusOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Content - ReactQuill */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Content *</label>
                <div className="min-h-[350px] border rounded-lg overflow-hidden">
                  <ReactQuill
                    ref={quillRef}
                    theme="snow"
                    value={content}
                    onChange={handleContentChange}
                    modules={modules}
                    formats={formats}
                    className="bg-white"
                    style={{ minHeight: "300px" }}
                    preserveWhitespace
                  />
                </div>
              </div>

              {/* Error/Success Messages */}
              {error && (
                <div className="text-red-700 text-sm bg-red-50 border border-red-200 p-3 rounded-md">{error}</div>
              )}
              {success && (
                <div className="text-green-700 text-sm bg-green-50 border border-green-200 p-3 rounded-md">
                  {success}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => navigate("/dashboard/blog")}
                  disabled={loading}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading || !title.trim() || !content.trim() || !imageFile}
                  className="min-w-[120px] px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Adding...
                    </span>
                  ) : (
                    "Add Blog"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
