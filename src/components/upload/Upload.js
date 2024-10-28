import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './Upload.css'; // Importing the CSS file for styles
import { upLoadFile } from 'services/actionServices';

const Upload = () => {
  const [tags, setTags] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');

  const onDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    setFile(uploadedFile);
    const fileUrl = URL.createObjectURL(uploadedFile);
    setPreviewUrl(fileUrl);
  };

  const handleUpload = async () => {
    try {
      if (!file) return;

      // Convert file to Base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64data = reader.result;

        const jsonPayload = {
          filename: file.name,
          fileType: file.type,
          fileData: base64data.split(',')[1], // Exclude the metadata part
          tags: tags.join(','),
        };

        setIsLoading(true);
        try {
          const response = await upLoadFile(jsonPayload);
          console.log("response", response);
          if (response.success) {
            alert("Upload successful!");
          } else {
            alert("Upload failed: " + response.data.message);
          }
        } catch (error) {
          console.error("Upload failed", error);
          alert("An error occurred during upload. Please try again.");
        } finally {
          setIsLoading(false); // Ensure loading state is reset
        }
        resetForm();
      };
    } catch (e) {
      console.log("e", e);
      setIsLoading(false); // Reset loading state in case of error
    }
  };

  const resetForm = () => {
    setFile(null);
    setPreviewUrl('');
    setTags([]);
  };

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      const newTag = e.target.value.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      e.target.value = '';
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="upload-container">
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>

      {previewUrl && (
        <div className="preview-container">
          <h4>Preview:</h4>
          {file && file.type.startsWith('image/') && (
            <img src={previewUrl} alt="Preview" className="preview-image" />
          )}
          {file && file.type.startsWith('video/') && (
            <video src={previewUrl} controls className="preview-video" />
          )}
        </div>
      )}

      <div className="tags-container">
        <input
          type="text"
          placeholder="Add a tag and press Enter"
          onKeyDown={handleAddTag}
          className="tag-input"
        />
        <div className="tags-display">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
              <button onClick={() => handleRemoveTag(tag)} className="remove-tag-btn">x</button>
            </span>
          ))}
        </div>
      </div>

      <button onClick={handleUpload} className="upload-btn" disabled={!file || loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>

      {loading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};

export default Upload;
