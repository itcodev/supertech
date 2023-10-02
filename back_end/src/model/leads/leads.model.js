const ProjectSchema = require("./Staff.schema");
const MediaSchema = require("./media.schema");
const CarierSchema = require("../leads/carier.Schema");
const LeadInfoSchema = require("../leads/leadinfo.Schema");

//inset project
const insertProject = (projectObj) => {
  return new Promise((resolve, reject) => {
    try {
      ProjectSchema(projectObj)
        .save()
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};
//Insert Media
const insertMedia = (mediaObj) => {
  return new Promise((resolve, reject) => {
    try {
      MediaSchema(mediaObj)
        .save()
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};
//Insert Carier
const insertCarier = (carierObj) => {
  return new Promise((resolve, reject) => {
    try {
      CarierSchema(carierObj)
        .save()
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};
//get project
const getProject = () => {
  return new Promise((resolve, reject) => {
  const {category} = req.query;

    try {
      ProjectSchema.find(
        {},
        "cover title duration category location area content image status"
      )
        .then((project) => {
          resolve(project);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

//get media
const getMedia = () => {
  return new Promise((resolve, reject) => {
    try {
      MediaSchema.find({}, "cover title category content")
        .then((project) => {
          resolve(project);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

//get carier
const getCarier = () => {
  return new Promise((resolve, reject) => {
    try {
      CarierSchema.find({}, "cover title  category content")
        .then((project) => {
          resolve(project);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};
//get project by id
const getProjectById = (projectId) => {
  return ProjectSchema.findById(
    projectId,
    "cover duration title category location area content image status"
  ).exec();
};
//get media by id
const getMediaById = (mediaId) => {
  return MediaSchema.findById(mediaId, "cover title category content ").exec();
};
//get carier by id
const getCarierById = (carierId) => {
  return CarierSchema.findById(
    carierId,
    "cover duration title category location area content image status"
  ).exec();
};

// generate a unique project ID
function generateProjectId() {
  const prefix = "S"; // Prefix for staff ID
  const randomNumber = Math.floor(100 + Math.random() * 900); // Generate a 3-digit random number
  return `${prefix}${randomNumber}`;
}
// generate a unique lead ID

function generateLeadId() {
  const prefix = "S"; // Prefix for staff ID
  const randomNumber = Math.floor(100 + Math.random() * 900); // Generate a 3-digit random number
  return `${prefix}${randomNumber}`;
}

//inset leads
const insertLeads = (leadObj) => {
  return new Promise((resolve, reject) => {
    try {
      LeadInfoSchema(leadObj)
        .save()
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

//get leads
const getleads = () => {
  return new Promise((resolve, reject) => {
    try {
      LeadInfoSchema.find({}, "cover title category content ")
        .then((leads) => {
          resolve(leads);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

//get Leads by id
const getLeadsById = (leadInfoId) => {
  return LeadInfoSchema.findById(
    leadInfoId,
    "cover title category content "
  ).exec();
};

//delete projectbyid
const deleteProjectById = async (projectId) => {
  try {
    // Ensure that `projectId` is a valid ObjectId if you're using MongoDB
    // You may need to import ObjectId from mongoose and validate the `projectId`.
    // Example: const validProjectId = mongoose.Types.ObjectId(projectId);

    // Delete project information for the specified projectId
    const deletedProject = await ProjectSchema.findOneAndDelete({
      _id: projectId,
    });

    if (!deletedProject) {
      return { error: "Project not found" };
    } else {
      return { message: "Project deleted successfully" };
    }
  } catch (error) {
    console.log("Error in delete project by ID:", error);
    return { error: "Internal server error" };
  }
};

//editProjectById

const updateProjectById = async (projectId, newData) => {
  try {
    // Ensure that `projectId` is a valid ObjectId (if you're using MongoDB)
    // Example: const validProjectId = mongoose.Types.ObjectId(projectId);

    // Use findOneAndUpdate to update the project based on the projectId
    const updatedProject = await ProjectSchema.findOneAndUpdate(
      { _id: projectId },
      { $set: newData },
      { new: true } // Return the updated document
    );

    if (!updatedProject) {
      return { error: 'Project not found' };
    } else {
      return { message: 'Project updated successfully' };
    }
  } catch (error) {
    console.log('Error in update project by ID:', error);
    return { error: 'Internal server error' };
  }
};

//exports
module.exports = {
  updateProjectById,
  insertLeads,
  getLeadsById,
  deleteProjectById,
  insertProject,
  insertMedia,
  insertCarier,
  getMedia,
  getleads,
  getMediaById,
  getCarierById,
  getProjectById,
  getProject,
  getCarier,
  generateProjectId,
  generateLeadId,
};
