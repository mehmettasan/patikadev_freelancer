const Project= require('../models/Project');

exports.createProject= async (req, res) => {
    let uploadeImage = req.files.image;
    let uploadPath = __dirname + '/../public/uploads/images/' + uploadeImage.name;
    uploadeImage.mv(uploadPath, async () => {
      await Project.create({
        ...req.body,
        image: '/uploads/images/' + uploadeImage.name,
      });
      res.redirect('/');
    });
    res.redirect('/');
  }

  exports.updateProject=async (req, res) => {
    const project = await Project.findOne({ _id: req.params.id });
    project.title = req.body.title;
    project.description = req.body.description;
    await project.save();
  
    res.redirect(`/`);
  }
