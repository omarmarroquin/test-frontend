import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./overview.css";

class Overview extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    const { status, method, capacity, drayage, incoterms, serviceOptions, commodities } = data;
    return (
      <div className="overview-container row d-flex flex-column pl-3 pt-3 pr-3">
        <div className="card">
          <div className="border-bottom font-weight-bold p-3">OVERVIEW</div>
          <div className="row m-0 d-flex flex-grow-1 p-0">
            <div className="col-xs-12 col-md-6 border-right">
              <div className="pt-2">
                <table className="w-100">
                  <tbody>
                    <tr>
                      <td className="text-secondary">Status</td>
                      <td className="font-weight-bold text-right text-success">
                        <FontAwesomeIcon icon="check" /> {status}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Method</td>
                      <td className="font-weight-bold text-right">{method}</td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Capacity</td>
                      <td className="font-weight-bold text-right">{capacity}</td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Drayage</td>
                      <td className="font-weight-bold text-right">{drayage}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-xs-12 col-lg-6 border-right">
              <div className="pt-2">
                <table className="w-100">
                  <tbody>
                    <tr>
                      <td className="text-secondary">Incoterms</td>
                      <td className="font-weight-bold text-right">{incoterms}</td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Service Options</td>
                      <td className="font-weight-bold text-right">{serviceOptions}</td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Hazardous or forbidden commodities</td>
                      <td className="font-weight-bold text-right">{commodities}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;

Overview.propTypes = {
  data: PropTypes.shape({
    status: PropTypes.string,
    method: PropTypes.string,
    capacity: PropTypes.string,
    drayage: PropTypes.string,
    intercoms: PropTypes.string,
    serviceOptions: PropTypes.string,
    commodities: PropTypes.string
  }),
}
