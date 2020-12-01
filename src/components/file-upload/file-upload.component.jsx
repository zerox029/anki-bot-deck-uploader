import { React, Component } from 'react';
import axios from 'axios';

import './file-upload.styles.css';

class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null
    }
  }

  checkFileType = file => {
    if(file?.name.split('.').pop() === "apkg") {
      return true;
    } else {
      return false
    }
  }

  onChangeHandler = e => {
    this.setState({
      selectedFile: e.target.files[0],
    });

  }

  onClickHandler = e => {
    if(this.checkFileType(this.state.selectedFile))
    {
      const data = new FormData();
      data.append('file', this.state.selectedFile);
      axios.post("http://localhost:8000/upload", data, {})
        .then(res => {
          console.log(res.statusText);
        }); 
    } else {
      document.querySelector('#deck').value = "";
      this.setState({selectedFile: ''});
    }
  }

  render() {
    return(
      <form className="file-form">
        <h1>Upload your deck</h1>

        <div id="alias-container">
          <label htmlFor="alias">Deck name</label>
          <input type="text" id="alias" name="alias" placeholder="Eg. Biology 101"/>
        </div>

        <div>
          <label htmlFor="discordUid">Discord Username</label>
          <input type="text" id="discordUid" name="discordUid" placeholder="Eg. Rand0Boi#8712"/>
        </div>

        <div id="private-container" className="horizontal-container">
          <label htmlFor="private">Private deck?</label>
          <input type="checkbox" name="private" id="private" defaultChecked />
        </div>

        <input type="file" id="deck" name="deck" onChange={this.onChangeHandler} />
        <button type="button" onClick={this.onClickHandler}>Upload</button>
      </form>
    );
  }
}

export default FileUpload;