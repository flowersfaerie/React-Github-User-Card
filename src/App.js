import React from 'react';

import './App.css';

class App extends React.Component {
  state = {
    userImages: [],
    userText: ""
  };

  componentDidMount() {
    fetch("https://api.github.com/users/flowersfairie")
      .then(response => response.json())
      .then(users => {
        console.log("sf: App.js: CDM: fetch: then2: users: ", users);
        this.setState({userImages: users.message});
      })
      .catch(error => console.error(error));
  }

  handleChanges = e => {
    this.setState({ ...this.state, userText: e.target.value});
  };

  // handleFetchUsers = e => {
  //   e.preventDefault();
  //   fetch()
  // }

  render() {
    return (
      <div className="App">
        <h1>Sarah's Followers!</h1>
        {/* <input
          type="text"
          value={this.state.userText}
          onChange={this.handleChanges}
        />
        <button onClick={this.handleFetchUsers}>Fetch User</button> */}
        <br />
        {this.state.userImages.map(userImg => {
          return <img alt="user" src={userImg} />
        })}
      </div>
    )
  }

}

export default App;
