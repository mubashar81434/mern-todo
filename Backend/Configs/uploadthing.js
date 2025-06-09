// uploadthing.js (JavaScript version)
import { createUploadthing } from "uploadthing/express";

const f = createUploadthing();

export const uploadRouter = {
  taskUploader: f({ image: { maxFileSize: "4MB" }, pdf: { maxFileSize: "8MB" } })
    .onUploadComplete(async ({ file }) => {
      console.log("Upload complete:", file.url);
      // Optionally save file URL to database here
    }),
};
