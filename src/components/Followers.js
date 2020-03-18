import React from 'react';
// import App from '../App';

class Followers extends React.Component {
  state = {
    userImages: "",
    userLogin: "",
    userName: "",
    userLocation: "",
    userWebsite: "",
    userRepos: ""
  };

  componentDidMount() {
    fetch("https://api.github.com/users/flowersfaerie/followers")
      .then(response => response.json())
      .then(users => {
        console.log("sf: App.js: CDM: fetch: then2: users: ", users);
        this.setState({
            userImages: users.avatar_url,
            userLogin: users.login,
            userName: users.name,
            userLocation: users.location,
            userWebsite: users.blog,
            userRepos: users.repos_url
        })
      })
      .catch(error => console.error(error));
  }

  handleChanges = e => {
    this.setState({ ...this.state, userText: e.target.value});
  };

 

  render() {
    return (
      <div className="App">
        {this.state.userLogin.map(users => {
          return (
            <>
                <h1>{this.state.userName}</h1>
                <img alt="user" src={userImgages} />
                <h2>{this.state.userLocation}</h2>
                <p>{`Website: ${this.state.userWebsite}`}</p>
                <p>{`Repositories: ${this.state.userRepos}`}</p>
            </>
          )
        })}
      </div>
    )
  }

}

export default Followers;
