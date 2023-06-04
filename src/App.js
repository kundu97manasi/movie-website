// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from "react";
import MoviesHeader from "./components/movieHeader";
import Cards from "./components/card";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      loader: true
    };
  }

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war/")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ apiData: json, loader: false });
      });
  }

  render() {
    // let {loader, apiData} = this.state
    let { apiData } = this.state;
    let { loader } = this.state;
    if (!loader) {
      console.log(apiData.Search);
    }
    return (
      <div className="wrapper">
        <MoviesHeader />
        <div className="cards-wrapper">
          {loader ? (
            <h2 style={{ color: "white" }}>Loading...</h2>
          ) : (
            apiData.Search?.map((item) => (
              <Cards Poster={item.Poster} Title={item.Title} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default App;
