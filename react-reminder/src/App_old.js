import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
//второй вариант
export class App extends React.Component {
  this.state = {
    users: []
  }
  componentDidMount() {
    axios.get('http://localhost:8000/api/users')
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <ol>
        { this.state.users.map(user => <li>{user.name}</li>)}
      </ol>
    )
  }
}

/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  };
};

const url = "http://localhost:8000/api/users/";

Axios.get(url)
  .then(response => console.log(response));
/*
  componentDidMount() {
    fetch("http://localhost:8000/api/users/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.id} {item.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}
*/
//export default App;
