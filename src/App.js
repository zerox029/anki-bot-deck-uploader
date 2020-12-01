import { React } from 'react';
import Particles from 'react-particles-js';
import './App.css';

import FileUpload from './components/file-upload/file-upload.component';


function App() {
  return(
    <div className="App">
      <FileUpload className="fileUpload"/>
      <Particles 
        className="particles" 
        width="99vw" 
        height="99vh"
      />
    </div>
  );
}

export default App;
