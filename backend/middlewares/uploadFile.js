import multer from "multer";
import path from "path";
const UPLOAD_DIR = process.env.UPLOAD_DIR;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/users");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
export default upload;
