// Backend/Routes/uploadthing.js
import express from "express";
import { createUploadthingExpressHandler } from "uploadthing"; // <-- fixed import
import { uploadRouter } from "../Configs/uploadthing.js";

const router = express.Router();

router.use(
  "/api/uploadthing",
  createUploadthingExpressHandler({
    router: uploadRouter,
  })
);

export default router;
