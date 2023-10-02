// workingRightsMiddleware.js

async function workingRightsMiddleware(req, res, next) {
  try {
    const userId = req.user && req.user.userId; // Check if req.user and req.user.userId are defined

    // If userId is undefined, it means the user is not authenticated or user ID is not available
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Retrieve the user's designation from the database using the user ID
    const user = await getUserById(userId);
    const userDesignation = user ? user.Designation : null;

    // Set the working rights based on the user's designation
    if (userDesignation === 'Manager') {
      req.workingRights = {
        editLeads: true,
        assignLeads: true,
        viewAllLeads: true
      };
    } else if (userDesignation === 'Leads Manager') {
      req.workingRights = {
        editLeads: false,
        assignLeads: false,
        viewAllLeads: false
      };
    }

    next();
  } catch (error) {
    console.error('Error occurred during working rights middleware:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = workingRightsMiddleware;