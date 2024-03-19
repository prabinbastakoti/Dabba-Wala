const fs = require('fs');

const uploadPhoto = async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path + '.' + ext;
  fs.renameSync(path, newPath);
  newPath.replace('uploads\\', '');
  res.json(newPath);
};

module.exports = { uploadPhoto };
