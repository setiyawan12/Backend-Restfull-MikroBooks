
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const CloudinaryBooks = (req, res,next) => {
  let deCoded_id_users = req.decodedToken.users_id;

  const pathFile = req.file.path;
  console.log("Path File ",pathFile);
  const uniqueFileName = `book-image-${deCoded_id_users}-${new Date().toISOString()}`;
  cloudinary.uploader.upload(
    pathFile,
    {
      resource_type: "raw",
      public_id: `books/${uniqueFileName}`,
      tags: `books`,
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

module.exports = CloudinaryBooks;