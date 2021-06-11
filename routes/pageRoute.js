const express = require("express");
const pageConroller= require('../controllers/pageConroller');
const router = express.Router();

router.route('/').get(pageConroller.getIndexPage);
router.route('/add').get(pageConroller.getAddPage);
router.route('/edit/:id').get(pageConroller.getEditPage);

module.exports=router;