import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

class ApiService {
 static BASE_URL = process.env.NODE_ENV === 'production' 
  ? "https://rnwda-backend.onrender.com/api/"
  : "http://localhost:3300/api/";

  static getHeader(data) {
    const token = localStorage.getItem("token");

    // Detect if data is FormData to decide on Content-Type header
    const isFormData = typeof FormData !== "undefined" && data instanceof FormData;

    return {
      Authorization: `Bearer ${token}`,
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
    };
  }

  /** Register a new user */
  static async registerUser(formData) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/user/signup`,
        formData,
        {
          headers: this.getHeader(formData), // Pass formData here
        }
      );
      console.log("sign in response", response.data);
      return response.data;
    } catch (error) {
      console.error("Error signup:", error);
      throw error;
    }
  }

  /** Login a registered user */
  static async loginUser(formData) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/user/signin`,
        formData,
        {
          headers: this.getHeader(formData), // Pass formData here
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }

  /** Get all users */
  static async getAllUser() {
    try {
      const response = await axios.get(`${this.BASE_URL}/user/getAll`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error get all user in:", error);
      throw error;
    }
  }

   /** Get all users profile */
  static async getUserProfile() {
    try {
      const response = await axios.get(`${this.BASE_URL}/user/getUserProfile`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error get  user profile:", error);
      throw error;
    }
  }

  /** Get user by ID */
  static async getUserById(userId) {
    try {
      const response = await axios.get(`${this.BASE_URL}/user/getById/${userId}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      throw error;
    }
  }

  /** Update user by ID */
  static async updateUserById(userId, updatedData) {
    try {
      const response = await axios.put(
        `${this.BASE_URL}/user/update/${userId}`,
        updatedData,
        {
          headers: this.getHeader(updatedData), // Pass data here
        }
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating user with ID ${userId}:`, error);
      throw error;
    }
  }

  /** Delete user */
  static async deleteUser(userId) {
    try {
      const response = await axios.delete(`${this.BASE_URL}/user/delete/${userId}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      throw error;
    }
  }

  /*** BLOG *****/

  /** Add blog */
  static async Addblog(formData) {
    try {
      const response = await axios.post(`${this.BASE_URL}/blog`, formData, {
        headers: this.getHeader(formData), // Pass formData here
      });
      return response.data;
    } catch (error) {
      console.error("Error adding blog in:", error);
      // optionally throw error here
    }
  }

  /** Get all products */
  static async getAllBlog() {
    try {
      const response = await axios.get(`${this.BASE_URL}/blog`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching all blogs:", error);
      throw error;
    }
  }

  /** Get blog by ID */
  static async getBlogById(id) {
    try {
      const response = await axios.get(`${this.BASE_URL}/blog//${id}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching  by ID:", error);
      throw error;
    }
  }

  /** Update blog by ID */
  static async updateBlogById(id, updatedData) {
    try {
      const response = await axios.put(`${this.BASE_URL}/blog/${id}`, updatedData, {
        headers: this.getHeader(updatedData),
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating blog with ID ${id}:`, error);
      throw error;
    }
  }

  /** Delete blog by ID */
  static async deleteBlogById(id) {   
    try {
      const response = await axios.delete(`${this.BASE_URL}/blog/${id}`, {    
        headers: this.getHeader(),
      });     
      return response.data;
    } catch (error) {     
      console.error(`Error deleting blog with ID ${id}:`, error);
      throw error;          
    }
  }

  /*** search blog with keyword ***/
  static async searchBlog(keyword) {
    try {
      const response = await axios.get(`${this.BASE_URL}/blog/search?keyword=${keyword}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error searching blog:", error);
      throw error;
    }
  }

/** MEDIA*** */
  /** Upload media */
  static async uploadPhotoMedia(formData) {    
    try {
      const response = await axios.post(`${this.BASE_URL}/media/photo`, formData, {
        headers: this.getHeader(formData), // Pass formData here
      });
      return response.data;
    } catch (error) {
      console.error("Error uploading media:", error);
      throw error;
    }
  }

  /*** get madia photo byId**** */
  static async getMediaPhotoById(id) {
    try {
      const response = await axios.get(`${this.BASE_URL}/media/photo/${id}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching media photo by ID:", error);
      throw error;
    }
  } 


  /** Get all media photos */
  static async getAllMediaPhotos() {
    try {
      const response = await axios.get(`${this.BASE_URL}/media/gallery`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching all media photos:", error);
      throw error;
    }
  } 

  /*** delete media photo byId ***/
  static async deleteMediaPhotoById(id) {
    try {
      const response = await axios.delete(`${this.BASE_URL}/media/photo/${id}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error(`Error deleting media photo with ID ${id}:`, error);
      throw error;
    }
  }


  /**** add media video **** */
  static async uploadVideoMedia(formData) {
    try {
      const response = await axios.post(`${this.BASE_URL}/media/video`, formData, {
        headers: this.getHeader(formData), // Pass formData here
      });
      return response.data;
    } catch (error) {
      console.error("Error uploading video media:", error);
      throw error;
    }
  }

  /** Get all media videos */
  static async getAllMediaVideos() {
    try {
      const response = await axios.get(`${this.BASE_URL}/media/video`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching all media videos:", error);
      throw error;
    }
  }

  /** Get media video by ID */
  static async getMediaVideoById(id) {
    try {
      const response = await axios.get(`${this.BASE_URL}/media/video/${id}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching media video by ID:", error);
      throw error;
    }
  }
  /** Delete media video by ID */
  static async deleteMediaVideoById(id) {
    try {
      const response = await axios.delete(`${this.BASE_URL}/media/video/${id}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error(`Error deleting media video with ID ${id}:`, error);
      throw error;
    }
  }

  /*********PROJECT */
  /** Add project */
  static async addProject(formData) { 
    try {
      const response = await axios.post(`${this.BASE_URL}/project`, formData, {
        headers: this.getHeader(formData), // Pass formData here
      });
      return response.data;
    } catch (error) {
      console.error("Error adding project:", error);
      throw error;
    }
  }


  /** Get all projects */
  static async getAllProjects() {
    try {
      const response = await axios.get(`${this.BASE_URL}/project/public`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching all projects:", error);
      throw error;
    }
  }

  /** Get all projects admin */
  static async getAllProjectsAdmin() {
    try {
      const response = await axios.get(`${this.BASE_URL}/project/admin`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching all projects for admin:", error);
      throw error;
    }
  } 

  /** Get project by ID */
  static async getProjectById(id) {
    try {
      const response = await axios.get(`${this.BASE_URL}/project/${id}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching project by ID:", error);
      throw error;
    }
  }
  /** Update project by ID */
  static async updateProjectById(id, updatedData) {
    try {
      const response = await axios.put(`${this.BASE_URL}/project/${id}`, updatedData, {
        headers: this.getHeader(updatedData), // Pass data here
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating project with ID ${id}:`, error);
      throw error;
    }
  }
  /** Delete project by ID */
  static async deleteProjectById(id) {    
    try {
      const response = await axios.delete(`${this.BASE_URL}/project/${id}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error(`Error deleting project with ID ${id}:`, error);
      throw error;
    }
  }


  /*****RESOURCE GROUP ****** */
  /** Add resource group */
  static async addResourceGroup(formData) {   
    try {
      const response = await axios.post(`${this.BASE_URL}/resource/group`, formData, {
        headers: this.getHeader(formData), // Pass formData here
      });
      return response.data;
    } catch (error) {
      console.error("Error adding resource group:", error);
      throw error;
    }
  }


  /** Get all resource groups */
  static async getAllResourceGroups() {
    try {
      const response = await axios.get(`${this.BASE_URL}/resource/group`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching all resource groups:", error);
      throw error;
    }
  }


  /** create resource  */
  static async createResource(formData) {
    try {
      const response = await axios.post(`${this.BASE_URL}/resource/upload`, formData, {
        headers: this.getHeader(formData), // Pass formData here
      });
      return response.data;
    } catch (error) {
      console.error("Error creating resource:", error);
      throw error;
    }
  }

  /** Get all resources */

  static async getAllResources() {
    try { 
      const response = await axios.get(`${this.BASE_URL}/resource`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching all resources:", error);
      throw error;
    }
  }

  /** Get resource by ID */
  static async getResourceById(id) {  
    try {
      const response = await axios.get(`${this.BASE_URL}/resource/${id}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching resource by ID:", error);
      throw error;
    }
  }


  /****SUGGESTIONS ****** */
  /** Add suggestion */
  static async addSuggestion(formData) {  
    try {
      const response = await axios.post(`${this.BASE_URL}/suggestion`, formData, {
        headers: this.getHeader(formData), // Pass formData here
      });
      return response.data;
    } catch (error) {
      console.error("Error adding suggestion:", error);
      throw error;
    }
  }

  /** Get all suggestions */
  static async getAllSuggestions() {
    try {
      const response = await axios.get(`${this.BASE_URL}/suggestion/admin`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching all suggestions:", error);
      throw error;
    }
  }


  /** Get suggestion by ID */
  static async getSuggestionById(id) {
    try {
      const response = await axios.get(`${this.BASE_URL}/suggestion/admin/${id}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching suggestion by ID:", error);
      throw error;
    }
  }

  /** Update suggestion by ID */
  static async updateSuggestionById(id, updatedData) {  
    try {
      const response = await axios.patch(`${this.BASE_URL}/suggestion/admin/${id}`, updatedData, {
        headers: this.getHeader(updatedData), // Pass data here
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating suggestion with ID ${id}:`, error);
      throw error;
    }
  }


  /*** TEAM**** */
  /** Add team member */
  static async addTeamMember(formData) {  
    try {
      const response = await axios.post(`${this.BASE_URL}/team`, formData, {
        headers: this.getHeader(formData), // Pass formData here
      });
      return response.data;
    } catch (error) {
      console.error("Error adding team member:", error);
      throw error;
    }
  }


  /** Get all team members */
  static async getAllTeamMembers() {
    try {
      const response = await axios.get(`${this.BASE_URL}/team`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching all team members:", error);
      throw error;
    }
  }


  /** Get team member by ID */
  static async getTeamMemberById(id) {    
    try {
      const response = await axios.get(`${this.BASE_URL}/team/${id}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching team member by ID:", error);
      throw error;
    }
  }


  /** Update team member by ID */
  static async updateTeamMemberById(id, updatedData) {
    try {
      const response = await axios.patch(`${this.BASE_URL}/team/${id}`, updatedData, {
        headers: this.getHeader(updatedData), // Pass data here
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating team member with ID ${id}:`, error);
      throw error;
    }
  }
/** Delete team member by ID */
  static async deleteTeamMemberById(id) {
    try {
      const response = await axios.delete(`${this.BASE_URL}/team/${id}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error(`Error deleting team member with ID ${id}:`, error);
      throw error;
    }
  }


/*** get team member by admin **** */
  static async getAllTeamMembersAdmin() {
    try {
      const response = await axios.get(`${this.BASE_URL}/team/admin`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching all team members for admin:", error);
      throw error;
    }
  }

  /**** PAYMENT ****/
  /** Initiate PayPack payment */
  static async initiatePaypackPayment(orderId) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/payment/paypack/initiate/${orderId}`,
        {},
        { headers: this.getHeader() }
      );
      return response.data;
    } catch (error) {
      console.error('Error initiating PayPack payment:', error);
      throw error;
    }
  }




  /** Verify PayPack payment */
  static async verifyPaypackPayment() {
    try {
      const response = await axios.get(`${this.BASE_URL}/payment/paypack/verify`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error('Error verifying PayPack payment:', error);
      throw error;
    }
  }











  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }

  static isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  static getUserRole() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    return decoded.role;
  } catch {
    return null;
  }
}

static isUser() {
  return this.getUserRole() === "Buyer";
}

static isSeller() {
  return this.getUserRole() === "Seller";
}

static isAdmin() {
  return this.getUserRole() === "Admin";
}
}

export default ApiService;
