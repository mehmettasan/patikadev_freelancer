const Project= require('../models/Project');

exports.getIndexPage = async (req, res)=>{
    const projects=await Project.find().sort('-addDate');
    res.render('index',{
        projects,
    })
}
exports.getAddPage = async (req, res)=>{
    res.render('add')
}
exports.getEditPage = async (req, res)=>{
    const project = await Project.findOne({ _id: req.params.id });
    res.render('edit',{
        project,
    })
}