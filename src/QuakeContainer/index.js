import React, {Component} from 'react';

class QuakeContainer extends Component {

  render() {
    const quakeList = this.props.earthquakes.map((earthquakes, i) => {
      return (
        <div key={i} id="info">
        <h2><p>{earthquakes.properties.title} </p></h2>
        <h2><p>Latitude:{earthquakes.geometry.coordinates[0]} </p></h2>
        <h2><p>Longitude:{earthquakes.geometry.coordinates[1]} </p></h2><br/>

        </div>
      )
    });
    return(
      <div>
      <ul>
      {quakeList}
      </ul>
      </div>
    )
  }
}

export default QuakeContainer;
