import React, { Component } from 'react';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';
import Login from './context/Login';

class App extends Component {
  handleLoggedIn = (username) => {
    console.log("Getting the user: " + username);
    const user = { name: "ABC" };
    this.setState({ currentUser: user });
  }

  state = { currentUser: null };

  render() {
    return (
      <UserContext.Provider
        value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn
        }}
      >
        <div>
          <MoviePage />
          <Login />
      </div>
      </UserContext.Provider>
    );
  }
}

export default App;






// import logo from './logo.svg';
// import './App.css';
// import Movie from './hoc/Movie';
// import Counter from './hooks/Counter';
// import Users from './hooks/Users';

// function App() {
//   return (
//     <Movie id={1} />
//   );
// }

// export default App;
