import React, { Component } from 'react';
import './index.css';
import RacerForm from '../../components/racerForm';
import RacerInfo from '../../components/racerInfo';
// import RACER_API_KEY from '../../config.js';

class Racer extends Component {
  constructor() {
    super();
    this.state = {
      'data': [],
    }
  }

  getRacers = async(e) => {
    e.preventDefault();

    let year = e.target.elements.year.value;
    let season = e.target.elements.season.value;

    if (season === '' || season === null) {
      season = '3';
    }

    let url = `https://ergast.com/api/f1/${year}/${season}/driverStandings.json`

    let response = await fetch(url);
    let data = await response.json();

    this.setState({
      'standings': data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <RacerForm  getRacers={this.getRacers} />
          <RacerInfo  standings={this.state.standings}/>
        </div>
      </div>
    );
  }
}

export default Racer;
