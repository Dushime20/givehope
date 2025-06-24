// src/services/authService.js
export const authService = {
  isAuthenticated: () => {
    return localStorage.getItem("isAdminLoggedIn") === "true"
  },

  login: async ({ email, password }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // simulate delay

    if (email === "admin@rnadw.org" && password === "admin123") {
      localStorage.setItem("isAdminLoggedIn", "true")
      localStorage.setItem("adminUser", email)
      return { success: true }
    }
    return { success: false }
  },

  logout: () => {
    localStorage.removeItem("isAdminLoggedIn")
    localStorage.removeItem("adminUser")
  },
}
