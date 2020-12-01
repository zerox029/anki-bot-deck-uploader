import { React, Component } from 'react';
import axios from 'axios';

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
      <div className="App">
        <input type="file" id="deck" name="deck" onChange={this.onChangeHandler} />
        <button type="button" className="btn btn success btn-block" onClick={this.onClickHandler}>Upload</button>
      </div>
    );
  }
}

export default FileUpload;