// src/services/apiService.js
const axios = require('axios');

// Base URL for the social media API
const BASE_URL = 'http://20.244.56.144/test';

/**
 * Service to interact with the social media API
 */
class ApiService {
  /**
   * Fetches all users from the social media platform
   * @returns {Promise<Object>} Object containing user information
   */
  async getUsers() {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
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
      const response = await axios.get(`${BASE_URL}/users/${userId}/posts`);
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
      const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
      return response.data.comments || [];
    } catch (error) {
      console.error(`Error fetching comments for post ${postId}:`, error.message);
      throw error;
    }
  }
}

module.exports = new ApiService();