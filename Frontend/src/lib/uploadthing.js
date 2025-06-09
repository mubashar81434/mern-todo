import { uploadFiles } from "@uploadthing/react";

export const uploadAttachment = async (file) => {
  try {
    const res = await uploadFiles("taskUploader", {
      files: [file],
      url: "http://localhost:3310/api/uploadthing", // Important!
    });

    return res[0]?.url;
  } catch (err) {
    console.error("UploadThing error:", err);
    return null;
  }
};
