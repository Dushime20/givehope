export const blogService = {
  createBlog: async (data) => {
    try {
      // Replace this with your actual backend endpoint
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      if (!response.ok) {
        return { success: false, error: result.message || "Failed to create blog" }
      }

      return { success: true, data: result }
    } catch (error) {
      return { success: false, error: error.message || "Network error" }
    }
  },
}
