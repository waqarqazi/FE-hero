import React from 'react';
import Upload from 'components/upload/Upload';
import FileList from 'components/fileList/FileList';
import { useDispatch } from 'react-redux';
import Button from 'components/button';
import { logout } from 'store/authSlice';

function App() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="App">
      <h1>File Upload and Management</h1>
      <Button text={"Logout"} handleClick={handleLogout}/>
      <Upload />
      <FileList />
    </div>
  );
}

export default App;
