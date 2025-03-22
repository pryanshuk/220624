// src/services/apiService.js
const axios = require('axios');

// Base URL for the social media API
const BASE_URL = 'http://20.244.56.144/test';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNjMyNTA2LCJpYXQiOjE3NDI2MzIyMDYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijg3OTZiNGFhLTdmYjgtNDRhZi04N2QzLWQ0NWYyMDJiZDE1NiIsInN1YiI6InByeWFuc2h1LjIyY3NlQGJtdS5lZHUuaW4ifSwiY29tcGFueU5hbWUiOiJCTUwgTXVuamFsIFVuaXZlcnNpdHkiLCJjbGllbnRJRCI6Ijg3OTZiNGFhLTdmYjgtNDRhZi04N2QzLWQ0NWYyMDJiZDE1NiIsImNsaWVudFNlY3JldCI6ImNPSUlJY0VkcmVEVkxzREYiLCJvd25lck5hbWUiOiJQcnlhbnNodSBLdW1hciIsIm93bmVyRW1haWwiOiJwcnlhbnNodS4yMmNzZUBibXUuZWR1LmluIiwicm9sbE5vIjoiMjIwNjI0In0.Tb4Yan8yngYWKjHkP1pyrqS-L8N-Pdf2Lv5PX-lbBqI';
// Create an axios instance with authentication headers
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

class ApiService {
  /**
   * Fetches all users from the social media platform
   * @returns {Promise<Object>} Object containing user information
   */
  async getUsers() {
    try {
      // Use apiClient instead of axios directly
      const response = await apiClient.get('/users');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error.message);
      throw error;
    }
  }

  /**
   * Fetches posts for a specific user
   * @param {string|number} userId - ID of the user
   * @returns {Promise<Array>} Array of posts from the user
   */
  async getUserPosts(userId) {
    try {
      // Use apiClient instead of axios directly
      const response = await apiClient.get(`/users/${userId}/posts`);
      return response.data.posts || [];
    } catch (error) {
      console.error(`Error fetching posts for user ${userId}:`, error.message);
      throw error;
    }
  }

  /**
   * Fetches comments for a specific post
   * @param {string|number} postId - ID of the post
   * @returns {Promise<Array>} Array of comments for the post
   */
  async getPostComments(postId) {
    try {
      // Use apiClient instead of axios directly
      const response = await apiClient.get(`/posts/${postId}/comments`);
      return response.data.comments || [];
    } catch (error) {
      console.error(`Error fetching comments for post ${postId}:`, error.message);
      throw error;
    }
  }
}

module.exports = new ApiService();