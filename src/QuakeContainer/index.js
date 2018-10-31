// import React, { Component } from 'react';
//
//
// class QuakeContainer extends Component {
//
//   render() {
//       const quakeList = this.props.earthquakeData.map((earthquakeData, i) => {
//       return (
//         <li key={i}>
//         Title: {earthquakeData.properties.title} <br/>
//         </li>
//       )
//     });
//
//     return(
//       <div>
//         <h4>QuakeContainer</h4>
//         <ul>
//           <li>{quakeList}</li>
//         </ul>
//       </div>
//     )
//   }
// }
//
// export default QuakeContainer;

import React, {Component} from 'react';

class QuakeContainer extends Component {

  render() {
    const quakeList = this.props.earthquakes.map((earthquakes, i) => {
      return (
        <div key={i} id="info">
        <h2><p>{earthquakes.properties.title} </p></h2><br/>

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
