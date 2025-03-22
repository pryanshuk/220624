// src/controllers/userController.js
const apiService = require('../../services/apiServics');

/**
 * Get top 5 users with the highest post count
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function getTopUsers(req, res) {
  try {
    // 1. Get all users
    const usersData = await apiService.getUsers();
    const users = usersData.users;
    
    // 2. Fetch post counts for each user
    const userPostCounts = [];
    
    for (const userId in users) {
      const posts = await apiService.getUserPosts(userId);
      userPostCounts.push({
        userId,
        name: users[userId],
        postCount: posts.length
      });
    }
    
    // 3. Sort by post count (descending) and take top 5
    const topUsers = userPostCounts
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 5);
    
    res.json({ users: topUsers });
  } catch (error) {
    console.error('Error in getTopUsers controller:', error);
    res.status(500).json({ error: 'Failed to retrieve top users' });
  }
}

module.exports = {
  getTopUsers,
};
