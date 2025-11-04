


'use client';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadCV, clearCV } from '../../../../(mainlayout)/Redux/counter/cvSlice';

const CVManager = () => {
  const dispatch = useDispatch();
  const { fileUrl, fileName } = useSelector((state) => state.cv);
  const fileInputRef = useRef();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      dispatch(uploadCV({ url, name: file.name }));
    }
  };

  const handleDownload = () => {
    if (fileUrl) {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName || 'cv.pdf';
      link.click();
    }
  };

  return (
    <section className="bg-gray-900 text-white rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-xl mx-auto flex flex-col items-center gap-6">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
        Upload & Download CV
      </h2>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        ref={fileInputRef}
        onChange={handleUpload}
        className="text-sm text-gray-300 w-full max-w-xs bg-gray-800 px-3 py-2 rounded-md"
      />

      {fileUrl && (
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
          <button
            onClick={handleDownload}
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 w-full sm:w-auto"
          >
            Download CV
          </button>
          <button
            onClick={() => dispatch(clearCV())}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 w-full sm:w-auto"
          >
            Clear CV
          </button>
        </div>
      )}
    </section>
  );
};

export default CVManager;
