
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const CloudinaryUser = (req, res,next) => {
  const pathFile = req.file.path;
  console.log("Path File ",pathFile);
  const uniqueFileName = `profile-image-${req.body.nik}-${new Date().toISOString()}`;
  cloudinary.uploader.upload(
    pathFile,
    {
      resource_type: "raw",
      public_id: `profile/${uniqueFileName}`,
      tags: `profile  `,
    },
    (err, image) => {
      if (err) return res.send(err);
      console.log("File uploaded to Cloudinary");
      fs.unlinkSync(pathFile);
      req.image = image
      next()
    }
  );
};

module.exports = CloudinaryUser;