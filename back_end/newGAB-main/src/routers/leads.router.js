const express = require("express");
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
const { userAuthorization } = require("../middlewares/auth.middleware");
const {
  getLeads,
  getCarierById,
  getMediaById,
  insertProject,
  insertMedia,
  insertCarier,
  generateProjectId,
} = require("../model/leads/leads.model");
const { getProject } = require("../model/leads/leads.model");
const { getMedia } = require("../model/leads/leads.model");
const { getCarier } = require("../model/leads/leads.model");
const { getleads } = require("../model/leads/leads.model");
const {getProjectById} = require('../model/leads/leads.model')
const {getLeadsById} = require('../model/leads/leads.model')



const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const leadinfoSchema = require("../model/leads/leadinfo.Schema");
// const { decodeJWT } = require("../model/user/User.model");
const router = express.Router();

//define multer for image upload
const storage = multer.diskStorage({
  destination: './upload/image',
  filename : (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

const storage1 = multer.diskStorage({
  destination: './upload1/image',
  filename : (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload1 = multer({ storage: storage1 });

// post project->
router.post('/project', upload1.fields([{ name: "cover" }, { name: "image" }]), async (req, res) => {
  try {
    const { title, category, location, vedio, budget, content, status } = req.body;
    const projectId = generateProjectId();

    // Access the uploaded files using req.files["cover"] and req.files["image"]
    const coverFilePath = req.files["cover"] ? `${req.files["cover"][0].filename}` : null;
    const imageFilePath = req.files["image"] ? `${req.files["image"][0].filename}` : null;

    // Create a new project object
    const projectObj = {
      cover: coverFilePath,
      title,
      category,
      location,
      image: imageFilePath,
      budget,
      content,
      status
    };

    // Save the project object in the database
    const savedProject = await insertProject(projectObj);

    return res.json({ message: 'Project data saved successfully', project: savedProject });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// get project->
router.get('/project', async (req, res) => {
  try {
    // Retrieve project information
    const project = await getProject();

    return res.json({ project });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//get project on the base of id :
router.get('/project/:projectId', async (req, res) => {
  try {
    // Retrieve project information

    const projectId = req.params.projectId;
    const project = await getProjectById(projectId);

    return res.json({ project });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//edit project 
router.put('/project/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;
    const { cover, title, category, location, vedio ,image,budget,content,status } = req.body;

    // Find the staff by staffId and update the information
    const updatedProject = await ProjectSchema.findOneAndUpdate(
      { projectId },
      { cover, title, category, location, vedio ,image,budget,content,status },
      { new: true }
    );

    if (!projectStaff) {
      return res.status(404).json({ error: 'Project not found' });
    }

    return res.json({ message: 'Project information updated successfully', project: updatedProject });
  } catch (error) {
    console.log('Error in edit staff-info endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//view project
router.get('/project/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;

    // Retrieve staff information for the specified staffId
    const project = await StaffSchema.findOne({ projectId });

    if (!project) {
      return res.status(404).json({ error: 'project not found' });
    }

    return res.json({ project });
  } catch (error) {
    console.log('Error in view staff-info endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//delete project endpoint
router.delete('/project/:projectId', async (req, res) => {
  try {
    const { projectId } = req.params;

    // Delete staff information for the specified staffId
    const deletedProject = await StaffSchema.findOneAndDelete({ projectId });

    if (!deletedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    return res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.log('Error in delete project-info endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//post media
router.post("/media", upload1.single('cover'), async (req, res) => {
  const fileName = req.file.filename; // Get the filename of the uploaded image

  const {
    title,
    content,
    category,

  } = req.body;

  try {
    const leadInfoId = uuidv4();

    // Create a new media object
    const mediaObj = {
      cover: fileName,
      title,
      category,
      content,
    };

    // Save the project object in the database
    const savedMedia = await insertMedia(mediaObj);

    return res.json({ message: 'Media data saved successfully', media: savedMedia });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//get media
router.get("/media", async (req, res) => {
  try {
    // Retrieve project information
    const media = await getMedia();

    return res.json({ media });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//get media on the base of id :
router.get('/media/:mediaId', async (req, res) => {
  try {
    // Retrieve media information

    const mediaId = req.params.mediaId;
    const media = await getMediaById(mediaId);

    return res.json({ media });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//lead info route
// API route to save lead-info
router.post("/leads-info", upload1.single('cover'), async (req, res) => {
  const fileName = req.file.filename; // Get the filename of the uploaded image

  const {
    title,
    content,
    category,

  } = req.body;

  try {
    const leadInfoId = uuidv4();

    // Create a new media object
    const leadObj = {
      cover: fileName,
      title,
      category,
      content,
    };

    // Save the project object in the database
    const savedLeads = await insertLeads(leadObj);

    return res.json({ message: 'Leads data saved successfully', lead: savedLeads });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// get leads-info->
router.get('/leads-info', async (req, res) => {
  try {
    // Retrieve project information
    const leads = await getleads();

    return res.json({ leads });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//get leads on the base of id :
router.get('/lead-info/:leadInfoId', async (req, res) => {
  try {
    // Retrieve media information

    const leadInfoId = req.params.leadInfoId;
    const lead = await getLeadsById(leadInfoId);

    return res.json({ lead });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//edit lead
router.put("/leads-Info/:leadInfoId", upload.single("attachment"), async (req, res) => {
  const leadInfoId = req.params.leadInfoId;
  const {
    title,
    content,
    cover,
  } = req.body;

  try {
    // Find the lead information document based on the leadInfoId

    const leadInfo = await leadinfoSchema.findById(leadInfoId);

    if (!leadInfo) {
      return res.status(404).json({
        status: "error",
        message: "Lead information not found",
      });
    }

    // Update the fields with the new values
    leadInfo.title = title;
    leadInfo.cover = cover;
    leadInfo.content = content;
    
    // Update the attachment if a new file is provided
    if (req.file) {
      leadInfo.attachment = req.file.path;
    }

    // Save the updated lead information document
    await leadInfo.save();

    return res.json({
      status: "success",
      message: "Lead information updated successfully",
      data: leadInfo,
    });
  } catch (error) {
    console.error("Error updating lead information:", error);
    res.status(500).json({ error: "Error updating lead information" });
  }
});

//view only lead-information
router.get("/leads-Info/:leadInfoId", async (req, res) => {
  try {
    const leadInfoId = req.params.leadInfoId;

    // Find the lead information document based on the leadInfoId
    const leadInfo = await leadinfoSchema.findById(leadInfoId);

    if (!leadInfo) {
      return res.status(404).json({
        status: "error",
        message: "Lead information not found",
      });
    }

    return res.json({
      status: "success",
      data: leadInfo,
    });
  } catch (error) {
    console.error("Error fetching lead information:", error);
    res.status(500).json({ error: "Error fetching lead information" });
  }
});

//delete lead information
router.delete("/leads-Info/:leadInfoId", async (req, res) => {
  try {
    const leadInfoId = req.params.leadInfoId;

    // Delete the lead information document based on the leadInfoId
    const deletedLeadInfo = await leadinfoSchema.findByIdAndDelete(leadInfoId);

    if (!deletedLeadInfo) {
      return res.status(404).json({
        status: "error",
        message: "Lead information not found",
      });
    }

    return res.json({
      status: "success",
      message: "Lead information deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting lead information:", error);
    res.status(500).json({ error: "Error deleting lead information" });
  }
});


//post carier
router.post("/carier", upload1.single('cover'), async (req, res) => {
  const fileName = req.file.filename; // Get the filename of the uploaded image

  const {
    title,
    content,
    category,

  } = req.body;

  try {
    const leadInfoId = uuidv4();

    // Create a new media object
    const carierObj = {
      cover: fileName,
      title,
      category,
      content,
    };

    // Save the project object in the database
    const savedCarier = await insertCarier(carierObj);

    return res.json({ message: 'Carier data saved successfully', carier: savedCarier });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



//get carier
router.get("/carier", async (req, res) => {
  try {
    // Retrieve project information
    const carier = await getCarier();

    return res.json({ carier });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//get carier by id
router.get('/carier/:carierId', async (req, res) => {
  try {
    // Retrieve project information

    const carierId = req.params.carierId;
    const carier = await getCarierById(carierId);

    return res.json({ carier });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get("/", userAuthorization, async (req, res) => {
  try {
    const userId = req.userId;

    const result = await getLeads(userId);
    console.log(result);
    //insert in mongodb

    return res.json({ status: "success", result });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

module.exports = router;