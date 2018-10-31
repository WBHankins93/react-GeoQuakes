// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import QuakeContainer from './QuakeContainer';
// import MapContainer from './MapContainer';
//
// class App extends Component {
//   constructor(){
//     super();
//
//     this.state = {
//       earthquakeData: []
//     }
//
//   }
//
//   getQuakes = async () => {
//
//     try{
//
//       const earthquakes = await fetch('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson')
//
//       const earthquakesJson = await earthquakes.json();
//       // this.state.earthquakes.push(earthquakesJson);
//       return earthquakesJson
//
//     } catch(err) {
//       return err
//     }
//   }
//
//   componentDidMount() {
//
//     this.getQuakes().then((earthquakeData) => {
//       console.log(earthquakeData, ' this is data');
//       this.setState({earthquakeData: earthquakes.features})
//     }).catch((err) => {
//       console.log(err)
//     })
//
//   }
//
//
//   render() {
//     return (
//       <div className="app">
//         <div className="mapContainer">
//
//           // <MapContainer />
//           // earthquakes={this.state.earthquakes}
//         </div>
//         <div className="quakeContainer">
//           <h1>Earthquakes from the past week: </h1>
//           <QuakeContainer earthquakes={this.state.earthquakes}/>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default App;

import React, { Component } from 'react';
// import Map from './Map';
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
    return (
      <div className="app">
        <div className="mapContainer">
          
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
