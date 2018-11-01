import './App.css';
import React, { Component } from 'react';
import MapContainer from './MapContainer';
import Map from './MapContainer'
import QuakeContainer from './QuakeContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      earthquakes: []
    }
  }

  getEarthquakes = async () => {
    try {
      const earthquakes = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');
      const earthquakeJson = await earthquakes.json();
      return earthquakeJson
    } catch(err) {
      return err
    }
  }



  componentDidMount(){
    this.getEarthquakes().then((earthquakes) => {
      console.log(earthquakes, ' this is earthquakes');

    this.setState({earthquakes: earthquakes.features})
 }).catch((err) => {
      console.log(err);
 })
}

  render() {

    const earthquakesList = this.state.earthquakes.map((earthquakes, i) => {
      return (
        <li key={i}>
        <p>{earthquakes.geometry.coordinates[0]};</p>
        <p>{earthquakes.geometry.coordinates[1]};</p>
        </li>
      )
    });

    return (
      <div className="app">

        <div className="mapContainer">
        <Map earthquakes={this.state.earthquakes} earthquakesList={this.earthquakesList}/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <QuakeContainer earthquakes={this.state.earthquakes}/>

        </div>
      </div>
    );
  }
}

export default App;
