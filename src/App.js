import React, { Component } from 'react';
import MapContainer from 'react-leaflet-polygon-map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-intro">
          <MapContainer
          />
        </div>
      </div>
    );
  }
}

export default App;
