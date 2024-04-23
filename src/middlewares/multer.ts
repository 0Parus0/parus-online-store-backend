import multer from "multer";
import { v4 as uuid } from "uuid";

import { mkdirSync, existsSync } from "fs";

const storage = multer.diskStorage({
  destination(req, file, callback) {
    if (!existsSync("uploads")) mkdirSync("uploads");
    callback(null, "uploads");
  },
  filename(req, file, callback) {
    const id = uuid();
    const extName = file.originalname.split(".").pop();
    callback(null, `${id}.${extName}`);
  },
});

export const singleUpload = multer({ storage }).single("photo");
