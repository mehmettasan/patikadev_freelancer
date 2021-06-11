const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/freelancer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log('db connected')
}).catch((err)=>{
    console.log(err);
})
