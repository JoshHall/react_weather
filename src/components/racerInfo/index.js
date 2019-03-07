import React, { Component } from 'react';
import './index.css';

class RacerInfo extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-md-12">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Name</th>
                  <th>Nationality</th>
                  <th>Sponsor</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {this.props.standings &&
                  this.props.standings.map(driver =>
                    <tr key={driver.Driver.driverId}>
                      <td>{driver.position}</td>
                      <td>
                        <a target="_blank" className="driver-link" href={driver.Driver.url}>{driver.Driver.givenName} {driver.Driver.familyName}</a>
                      </td>
                      <td>{driver.Driver.nationality}</td>
                      <td>{driver.Constructors[0].name}</td>
                      <td>{driver.points}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>

          {/*
          {this.props.data.cod === "404" &&
            <h3>Error: {this.props.data.message}</h3>
          }
          */}
          </div>
        </div>
    );
  }
}

export default RacerInfo;
