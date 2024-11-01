import React, { useEffect, useState } from 'react';
import './FileList.css'; // Importing the CSS file for styles
import { getFileList } from 'services/actionServices';

const FileList = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await getFileList();
                console.log("response", response);
                setFiles(response?.files);
            } catch (error) {
                console.error('Error fetching files:', error);
            }
        };
        fetchFiles();
    }, []);

    const renderList = () => {
        if (!Array.isArray(files) || files.length === 0) {
            return <span className="file-views">No Data</span>; // Ensure it's displayed correctly
        }
        return (
            <>
                <h2 className="file-list-title">Uploaded Files</h2>
                <div className="file-list">
                    {files?.map((file) => (
                        <div key={file?._id} className="file-list-item">
                            <div className="file-info">
                                <a
                                    href={`${process.env.REACT_APP_BASE_URL}/api/files/share/${file.shareId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="file-link"
                                >
                                    {file?.filename}
                                </a>
                                <span className="file-views"> (Views: {file?.views})</span>
                            </div>
                            {file?.tags && file.tags.length > 0 && (
                                <div className="file-tags">
                                    {file?.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                            )}
                            <div className="file-link-display">
                                <span>Link: </span>
                                <a
                                    href={`${process.env.REACT_APP_BASE_URL}/api/files/share/${file.shareId}`}
                                    className="file-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {`${process.env.REACT_APP_BASE_URL}/api/files/share/${file.shareId}`}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    };

    return (
        <div className="file-list-container">
            {renderList()}
        </div>
    );
};

export default FileList;
