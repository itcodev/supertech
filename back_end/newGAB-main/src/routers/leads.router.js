const express = require("express");
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
const { userAuthorization } = require("../middlewares/auth.middleware");
const {
  createNewLeadValidation,
  replyLeadMessageValidation,
} = require("../middlewares/formValidation.middleware");
const {
  category,
  insertLeads,
  getLeads,
getCarierById,
getMediaById,
  getLeadsById,
  deleteLead,
  updateClientReply,
  updateStatusClose,
  generateLeadsReport,
  saveProjectInfo,
  insertProject,
  insertMedia,
  insertCarier,
  insertCust,
  insertCat,
  generateProjectId,
  getCust,
  generateLeadId,
  generateLeadMId,
  getUserById,
  getStaffByDepartment,
  searchCust
} = require("../model/leads/leads.model");
const { getProject } = require("../model/leads/leads.model");
const { getMedia } = require("../model/leads/leads.model");
const { getCarier } = require("../model/leads/leads.model");



const {getProjectById} = require('../model/leads/leads.model')
const { LeadsSchema } = require("../model/leads/leads.schema");
const LeadCategorySchema = require("../model/leads/category.Schema");
// const MediaSchema = require('../model/leads/media.Schema')
const mongoose = require("mongoose");
const StaffSchema = require("../model/leads/Staff.schema");
// const CarierSchema = require("../model/leads/carier.Schema");
// const  MediaSchema   = require("../model/leads/media.Schema");

const multer = require("multer");
const path = require("path");
const leadinfoSchema = require("../model/leads/leadinfo.Schema");
const LeadManager = require("../model/leads/LeadManger");
const { UserSchema } = require("../model/user/User.schema");
const customerSchema = require("../model/leads/customer.Schema");
const workingRightsMiddleware = require("../middlewares/userRights.middleware");
const companySchema = require("../model/admin/company.schema");
const { log } = require("console");
// const { decodeJWT } = require("../model/user/User.model");
const router = express.Router();

//for attaching file
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });



// Set up multer for file uploads
// Configure multer for file uploads


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


// Refer to Nodemailer documentation for more options
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // SMTP server hostname
  port: 587, // SMTP server port
  secure: false, // Set to true if using a secure connection (e.g., SSL/TLS)
  auth: {
    user: '3abilal3@gmail.com', // Your email address
    pass: 'helloiamahmedbilal', // Your email password or API key
  },
});



//create company endpoint

router.post("/", userAuthorization, async (req, res) => {
  try {
    //receive new ticket data
    const {
      leadName,
      sender,
      subject,
      wealth,
      experience,
      currentBusinesses,
      mostPreferedBusinesses,
      source,
      assignedTo,
      message,
    } = req.body;

    const userId = req.userId;
    const assignedToId = mongoose.Types.ObjectId(assignedTo);

    const leadsObj = {
      clientId: userId,
      leadName,
      sender,
      subject,
      wealth,
      experience,
      currentBusinesses,
      mostPreferedBusinesses,
      assignedTo: assignedToId,
      message,
      source,
      conservation: [
        {
          sender,
          message,
        },
      ],
    };
    const result = await insertLeads(leadsObj);
    // console.log(result)
    //insert in mongodb

    if (result._id) {
      return res.json({
        status: "success",
        message: "new lead have been created",
      });
    }

    res.json({
      status: "error",
      message: "Unable to create ticket please try again later",
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});



//post-> get -> edit -> create -> delete


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

//post-> get -> edit -> create -> delete
//customer info
router.post("/CustomerInfo", async (req, res) => {
  try {
    //new customer info
    const {
      CompanyName,
      Telephone,
      email,
      website,
      contactPersonName,
      contactPersonMobileNumber,
      contactPersonEmail,
      otherDetails,
      country,
      State,
      city,
    } = req.body;

    const userId = req.userId;

    const custObj = {
      clientId: userId,
      CompanyName,
      Telephone,
      email,
      website,
      contactPersonName,
      contactPersonMobileNumber,
      contactPersonEmail,
      otherDetails,
      country,
      State,
      city,
    };
    const result = await insertCust(custObj);
    // console.log(result)
    //insert in mongodb

    if (result._id) {
      return res.json({
        status: "success",
        message: "new client have been created",
      });
    }

    res.json({
      status: "error",
      message: "Unable to create client please try again later",
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

// get customer
router.get("/CustomerInfo", async (req, res) => {
  try {
    const userId = req.userId;

    // Retrieve specific fields from the database
    const result = await getCust(userId, [
      "CompanyName",
      "Telephone",
      "email",
      "contactPersonName",
      "contactPersonMobileNumber",
    ]);

    if (result) {
      return res.json({
        status: "success",
        data: result,
      });
    }

    res.json({
      status: "error",
      message: "Unable to retrieve customer information",
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});

//edit customer
router.put("/CustomerInfo/:customerId", async (req, res) => {
  try {
    const userId = req.userId;
    const customerId = req.params.customerId;

    // Retrieve the updated fields from the request body
    const {
      CompanyName,
      Telephone,
      email,
      contactPersonName,
      contactPersonMobileNumber
    } = req.body;

    // Find the customer document based on the customerId and userId
    const customer = await customerSchema.findOne({ _id: customerId, clientId: userId });

    if (!customer) {
      return res.json({
        status: "error",
        message: "Customer not found"
      });
    }

    // Update the fields with the new values
    customer.CompanyName = CompanyName;
    customer.Telephone = Telephone;
    customer.email = email;
    customer.contactPersonName = contactPersonName;
    customer.contactPersonMobileNumber = contactPersonMobileNumber;

    // Save the updated customer document
    await customer.save();

    return res.json({
      status: "success",
      message: "Customer information updated successfully",
      data: customer
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});



//lead info route
// API route to save lead information

router.post("/leads-info", upload.single('cover'), async (req, res) => {
  const { title, content } = req.body;

  try {
    const leadInfoId = uuidv4();
    const fileName = req.file.filename; // Get the filename of the uploaded image

    // Create a new LeadInfo instance with just the filename and other data
    const leadInfo = new leadinfoSchema({
      title,
      cover: fileName, // Store only the filename, not the folder path
      content,
      leadInfoId,
    });

    await leadInfo.save();

    res.status(200).json({ message: "Lead information saved successfully" });
  } catch (error) {
    console.error("Error saving lead information:", error);
    res.status(500).json({ error: "Error saving lead information" });
  }
});


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



router.get('/media/:mediaId', async (req, res) => {
  try {
    // Retrieve project information

    const mediaId = req.params.mediaId;
    const media = await getMediaById(mediaId);

    return res.json({ media });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


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




//get leads
router.get("/leads-Info", async (req, res) => {
  try {
    // Fetch specific fields from the lead information
    const leadFields = await leadinfoSchema.find({}, "title cover content");

    res.json({
      status: "success",
      data: leadFields,
    });
  } catch (error) {
    console.error("Error fetching lead information:", error);
    res.status(500).json({ error: "Error fetching lead information" });
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

//view only lead information
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

//Assign-LEAD
  router.post('/assign-lead', async (req, res) => {
  try {
    const { leadInfoIds,userId,companyID } = req.body;
    const joinedLeadInfoIds = leadInfoIds.join(",")
    console.log(joinedLeadInfoIds);
    console.log(userId);
    console.log(companyID);
    
    const leadInfos = await leadinfoSchema.find({ leadInfoId: { $in: joinedLeadInfoIds } });
    
    if (!leadInfos || leadInfos.length === 0) {
      return res.status(404).json({ message: 'LeadInfos not found' });
    }
    const company = await companySchema.findOne({ companyId: companyID });
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    const user = company.users.find((user) => user.userID === userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found in the Company' });
    }
    
    user.leadInfo.push(...leadInfos);
    await company.save();

    res.status(200).json({ message: 'LeadInfos assigned to the user successfully' });
    // res.status(200).json(leadInfos);
  } catch (error) {
    console.error("Error saving media:", error);
    res.status(500).json({ error: "Error saving media" });
  }
});

router.get('/media', async (req, res) => {
  try {
    // Retrieve project information
    const media = await getMedia();

    return res.json({ media });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post("/carier", upload.single('cover'), async (req, res) => {
  const {
    title,
    content,
  } = req.body;

  try {
    const leadInfoId = uuidv4();

    // Create a new LeadInfo instance with the uploaded file path and other data
    const carier = new CarierSchema({
      title,
      cover: req.file.path, // Store the path to the uploaded image
      content,
      leadInfoId,
    });

    await carier.save();

    res.status(200).json({ message: "Carier saved successfully" });
  } catch (error) {
    console.error("Error saving carier:", error);
    res.status(500).json({ error: "Error saving carier" });
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});





// Add Lead Manager 
router.post('/addLeadManager', async (req, res) => {
  try {
    const leadMId = generateLeadMId();
    const {
      leadManagerId,
      leadManagerName,
    } = req.body;

    // Create a new LeadManager object
    const newLeadManager = new LeadManager({
      leadManagerId: leadMId,
      leadManagerName,
    });

    // Save the new LeadManager to the database
    const savedLeadManager = await newLeadManager.save();

    res.status(201).json(savedLeadManager);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//get all lead statuses
router.get("/followup", async (req, res) => {
  const { status } = req.query;

  const validStatusOptions = [
    "Working",
    "Contacted",
    "Qualified",
    "Failed",
    "Closed",
  ];

  try {
    // Check if the provided status is valid
    if (status && !validStatusOptions.includes(status)) {
      return res
        .status(400)
        .json({
          error:
            "Invalid status option. Please choose one of the valid options.that are 1-Working, 2-Contacted, 3-Qualified, 4-Failed, 5-Closed.",
        });
    }

    // Define the filter object based on the provided status
    const filter = status ? { status: status } : {};

    // Retrieve the filtered leads from the database
    const filteredLeads = await leadinfoSchema.find(filter);

    res.status(200).json({ leads: filteredLeads });
  } catch (error) {
    console.error("Error filtering leads:", error);
    res.status(500).json({ error: "Error filtering leads" });
  }
});


// Update lead status
router.put("/followup/:leadId", async (req, res) => {
  const { leadId } = req.params;
  const { status } = req.body;

  const validStatusOptions = [
    "Working",
    "Contacted",
    "Qualified",
    "Failed",
    "Closed",
  ];

  try {
    // Find the lead by ID
    const lead = await leadinfoSchema.findById(leadId);

    if (!lead) {
      return res.status(404).json({ error: "Lead not found" });
    }

    // Check if the provided status is valid
    if (!validStatusOptions.includes(status)) {
      return res
        .status(400)
        .json({
          error:
            "Invalid status option. Please choose one of the valid options.that are 1-Working, 2-Contacted, 3-Qualified, 4-Failed, 5-Closed",
        });
    }

    // Update the lead status
    lead.status = status;

    // Save the updated lead
    await lead.save();

    res
      .status(200)
      .json({ message: `Lead status updated successfully to ${lead.status}` });
  } catch (error) {
    console.error("Error updating lead status:", error);
    res.status(500).json({ error: "Error updating lead status" });
  }
});


//get follow up
router.get("/followup/:leadId", async (req, res) => {
  const { leadId } = req.params;

  try {
    // Find the lead by ID
    const lead = await leadinfoSchema.findById(leadId);

    if (!lead) {
      return res.status(404).json({ error: "Lead not found" });
    }

    // Retrieve additional information from the lead
    const { companyName, leadTitle, leadSource, status } = lead;

    res.status(200).json({
      companyName,
      leadTitle,
      leadSource,
      status,
    });
  } catch (error) {
    console.error("Error retrieving lead information:", error);
    res.status(500).json({ error: "Error retrieving lead information" });
  }
});


//view only follow up
router.get("/followup/:leadId", async (req, res) => {
  const { leadId } = req.params;

  try {
    // Find the lead by ID
    const lead = await leadinfoSchema.findById(leadId);

    if (!lead) {
      return res.status(404).json({ error: "Lead not found" });
    }

    res.status(200).json({ status: lead.status });
  } catch (error) {
    console.error("Error retrieving lead status:", error);
    res.status(500).json({ error: "Error retrieving lead status" });
  }
});






//Status-based filter
router.get("/status-based-filter", async (req, res) => {
  const { status } = req.query;

  const validStatusOptions = [
    "Working",
    "Contacted",
    "Qualified",
    "Failed",
    "Closed",
  ];

  try {
    // Check if the provided status is valid
    if (status && !validStatusOptions.includes(status)) {
      return res
        .status(400)
        .json({
          error:
            "Invalid status option. Please choose one of the valid options.that are 1-Working, 2-Contacted, 3-Qualified, 4-Failed, 5-Closed.",
        });
    }

    // Define the filter object based on the provided status
    const filter = status ? { status: status } : {};

    // Retrieve the filtered leads from the database
    const filteredLeads = await leadinfoSchema.find(filter);

    res.status(200).json({ leads: filteredLeads });
  } catch (error) {
    console.error("Error filtering leads:", error);
    res.status(500).json({ error: "Error filtering leads" });
  }
});





router.post('/send-email', async (req, res) => {
  try {
    // Retrieve the necessary data from the request body
    const { leadInfoId, subject, message } = req.body;

    // Find the lead information document based on the leadInfoId
    const leadInfo = await leadinfoSchema.findOne(leadInfoId);

    if (!leadInfo) {
      return res.status(404).json({
        status: 'error',
        message: 'Lead information not found',
      });
    }

    // Retrieve the recipient's email address from the leadInfo
    const recipient = leadInfo.email;

    // Compose the email
    const mailOptions = {
      from: 'your-email@example.com', // Sender's email address
      to: recipient, // Recipient's email address
      subject: subject,
      text: message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
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







//get single lead by id
router.get("/:_id", userAuthorization, async (req, res) => {
  console.log(req.params);
  try {
    const clientId = req.userId;
    const { _id } = req.params;
    const result = await getLeadsById(_id, clientId);
    console.log(result);
    //insert in mongodb

    return res.json({ status: "success", result });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});




//update the lead status after client reply
router.put("/:_id", replyLeadMessageValidation, userAuthorization, async (req, res) => {
  try {
    const { message, sender } = req.body;
    const clientId = req.userId;
    const { _id } = req.params;
    const result = await updateClientReply({ _id, message, sender });
    console.log(result);
    //insert in mongodb
    if (result._id) {
      return res.json({
        status: "success",
        message: "your message have been updated",
      });
    }
    return res.json({
      status: "success",
      message: "Unable to update your message please try again later ",
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
}
);




router.patch("/close-lead/:_id", userAuthorization, async (req, res) => {
  try {
    const clientId = req.userId;
    const { _id } = req.params;

    // Check if _id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid _id parameter" });
    }

    // Find the lead by _id and clientId
    const lead = await LeadsSchema.findOne({ _id, clientId });

    // Check if the lead exists
    if (!lead) {
      return res
        .status(404)
        .json({ status: "error", message: "Lead not found" });
    }

    // Check if the lead is already closed
    if (lead.status === "closed") {
      return res.json({ status: "success", message: "Lead is already closed" });
    }

    // Update the lead status to closed
    lead.status = "closed";
    await lead.save();

    return res.json({ status: "success", message: "Lead has been closed" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  }
});




//Delete  the lead which have been closed
router.delete("/:_id", userAuthorization, async (req, res) => {
  try {
    const clientId = req.userId;
    const { _id } = req.params;
    const result = await deleteLead({ _id, clientId });
    console.log(result);
    //insert in mongodb

    return res.json({
      status: "success",
      message: "your lead have been deleted from our system",
    });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
});




//fetch all the leads of status closed
router.get("/filtering/:status", userAuthorization, async (req, res) => {
  const { status } = req.params;
  const filter = {};
  if (status) {
    filter.status = status;
  }
  try {
    const leads = await LeadsSchema.find(filter);
    console.log(filter);
    res.send(leads);
  } catch (err) {
    res.status(500).send(err.message);
  }
});




const filterSchema = {
  type: "object",
  properties: {
    wealth_min: { type: "number" },
    wealth_max: { type: "number" },
    experience_min: { type: "number" },
    experience_max: { type: "number" },
    current_business: { type: "string" },
    preferred_businesses: { type: "string" },
  },
};

// Define the endpoint to filter the leads
router.post("/filter_leads", userAuthorization, async (req, res) => {
  try {
    // Validate the filter criteria against the schema
    const ajv = new (require("ajv"))();
    const validate = ajv.compile(filterSchema);
    if (!validate(req.body)) {
      return res.status(400).json({ error: "Invalid filter criteria" });
    }

    // Build the filter query
    const filter = {};
    if (req.body.wealth_min !== undefined) {
      filter.wealth = { $gte: req.body.wealth_min };
    }
    if (req.body.wealth_max !== undefined) {
      filter.wealth = { ...filter.wealth, $lte: req.body.wealth_max };
    }
    if (req.body.experience_min !== undefined) {
      filter.experience = { $gte: req.body.experience_min };
    }
    if (req.body.experience_max !== undefined) {
      filter.experience = {
        ...filter.experience,
        $lte: req.body.experience_max,
      };
    }
    if (req.body.current_business !== undefined) {
      filter.currentBusinesses = req.body.current_business;
    }
    if (req.body.preferred_businesses !== undefined) {
      filter.mostPreferedBusinesses = {
        $regex: new RegExp(req.body.preferred_businesses, "i"),
      };
    }

    // Find the leads matching the filter criteria
    const leads = await LeadsSchema.find(filter);
    if (leads) {
      return res.json(leads);
    }
    return res.json("no leads found");
    // Return the filtered leads
    // return res.json(leads);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});



// Define the endpoint to retrieve the filter options
router.get("/filter_options", async (req, res) => {
  try {
    // Retrieve the distinct values of the relevant fields from the leads collection
    const wealthOptions = await LeadsSchema.distinct("wealth");
    const experienceOptions = await LeadsSchema.distinct("experience");
    const currentBusinessOptions = await LeadsSchema.distinct(
      "current_business"
    );
    const preferredBusinessesOptions = await LeadsSchema.distinct(
      "preferred_businesses"
    );

    // Return the filter options

    return res.json({
      wealth_options: wealthOptions,
      experience_options: experienceOptions,
      current_business_options: currentBusinessOptions,
      preferred_businesses_options: preferredBusinessesOptions,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});




router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


// Route for printing staff information(not working)
router.get("/staff-wise", userAuthorization, async (req, res) => {
  try {
    // Retrieve staff information from the database
    const staffList = await StaffSchema.find({});

    // Print staff information or perform any desired action
    console.log(staffList);

    res.status(200).json({ message: "Staff information printed" });
  } catch (error) {
    console.error("Error retrieving staff information:", error);
    res.status(500).json({ error: "Error retrieving staff information" });
  }
});

// R
router.post('/reports', async (req, res) => {
  try {
    const { startDate, endDate } = req.body;

    // Filter leads based on follow-up date and project only status and companyName fields
    const filteredLeads = await leadinfoSchema.find(
      {
        followUpDate: {
          $gte: new Date(startDate),
          $lte: new Date(endDate)
        }
      },
      'status companyName' // Projection: Include only status and companyName fields
    );

    res.status(200).json(filteredLeads);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;