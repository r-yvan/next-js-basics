"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="r-yvan">
      {({ open }) => <button className="m-32 p-3 bg-violet-600 rounded-xl font-bold" onClick={() => open()}>Upload Files</button>}
    </CldUploadWidget>
  );
};

export default UploadPage;
