import React from 'react';

import './App.css';

class App extends React.Component {
  state = {
    followers: []
    // userImages: "",
    // userLogin: "",
    // userName: "",
    // userLocation: "",
    // userWebsite: "",
    // userRepos: "",
    // userFollowers: "",
    // userId: ""
  };

  componentDidMount() {
    fetch("https://api.github.com/users/flowersfaerie/followers")
      .then(response => response.json())
      .then(users => {
        console.log("sf: App.js: CDM: fetch: then2: users: ", users);
        this.setState({
          followers: users
        //     userImages: users.avatar_url,
        //     userLogin: users.login,
        //     userName: users.name,
        //     userLocation: users.location,
        //     userWebsite: users.blog,
        //     userRepos: users.repos_url,
        //     userFollowers: users.followers_url,
        //     userId: users.id
        })
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="App">
        {this.state.followers.map(login => {
          return (
            <>
              <h1>{login.login}</h1>
              <img alt="user" src={login.avatar_url} />
              {/* <h2>{`Location: ${login.location}`}</h2>
              <p>{`Website: ${login.blog}`}</p> */}
              <p>{`Repositories: ${login.repos_url}`}</p>
            </>
         )}
      )}
      </div>
    )
  }

}

export default App;
