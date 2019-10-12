import React from 'react';
import axios from 'axios';
import Player from './Player';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({ 
          name: res.data
        })

        console.log(this.state.name);
        console.log(res.data[0].name);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Women's World Cup Roster</h1>
        </header>
        <Player 
          players={this.state.players}
        />
    </div>
    )
  }
}

export default App;
