const express = require("express");
const projectsConroller= require('../controllers/projectsConroller');
const router = express.Router();

router.route('/add').post(projectsConroller.createProject);
router.route('/update/:id').post(projectsConroller.updateProject);

module.exports=router;