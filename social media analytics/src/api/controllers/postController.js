
// src/controllers/postController.js
const apiService = require('../../services/apiServics');

/**
 * Get posts based on type (popular or latest)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function getPosts(req, res) {
  try {
    const { type } = req.query;
    
    if (!type || !['popular', 'latest'].includes(type)) {
      return res.status(400).json({ 
        error: 'Invalid type parameter. Use "popular" or "latest"' 
      });
    }
    
    // 1. Retrieve all users first
    const usersData = await apiService.getUsers();
    const users = usersData.users;
    
    // 2. Collect all posts from all users
    let allPosts = [];
    for (const userId in users) {
      const userPosts = await apiService.getUserPosts(userId);
      allPosts = [...allPosts, ...userPosts];
    }
    
    // 3. Process based on type
    if (type === 'popular') {
      // Get comment counts for each post
      const postsWithComments = await Promise.all(
        allPosts.map(async (post) => {
          const comments = await apiService.getPostComments(post.id);
          return {
            ...post,
            commentCount: comments.length
          };
        })
      );
      
      // Find maximum comment count
      const maxComments = Math.max(...postsWithComments.map(post => post.commentCount));
      
      // Filter posts with the maximum comment count
      const popularPosts = postsWithComments.filter(post => post.commentCount === maxComments);
      
      res.json({ posts: popularPosts });
    } else {
      // For latest posts, sort by ID (assuming higher ID = newer)
      const latestPosts = [...allPosts]
        .sort((a, b) => b.id - a.id)
        .slice(0, 5);
      
      res.json({ posts: latestPosts });
    }
  } catch (error) {
    console.error('Error in getPosts controller:', error);
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
}

module.exports = {
  getPosts,
};