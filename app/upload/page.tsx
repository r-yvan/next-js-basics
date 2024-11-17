"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface Info {
  public_id: string;
}
const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <div>
      {publicId ? (
        <CldImage src={publicId} width={200} height={200} alt="An Image" />
      ) : (
        <div>Lorem ipsum dolor sit amet.</div>
      )}
      <CldUploadWidget
        uploadPreset="r-yvan"
        onUploadAdded={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as Info;
          return setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button
            className="btn btn-primary m-32 bg-violet-600 rounded-xl font-bold"
            onClick={() => open()}
          >
            Upload Files
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default UploadPage;
