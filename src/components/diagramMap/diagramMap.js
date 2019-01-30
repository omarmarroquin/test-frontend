import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./diagramMap.css";

const styles = {
  selectButton: {
    right: "1rem"
  },
  iconContainer: {
    width: 60,
    height: 60
  },
  icon: {
    color: "#000",
    fontSize: 35
  },
  separator: {
    width: "5%"
  }
};

class DiagramMap extends Component {
  state = { showDiagram: true }

  selectOption = (showDiagram) => {
    this.setState({ showDiagram });
  }
  
  render() {
    const { showDiagram } = this.state;
    return (
      <div className="diagram-map-container row d-flex flex-column p-3 text-center position-relative">
        <div className="btn-group btn-group-toggle position-absolute r-1" style={styles.selectButton} data-toggle="buttons">
          <label className="btn btn-outline-secondary active" onClick={() => this.selectOption(true)}>
            <input type="radio" name="options" id="option1" autocomplete="off" checked /> Diagram
          </label>
          <label className="btn btn-outline-secondary" onClick={() => this.selectOption(false)}>
            <input type="radio" name="options" id="option2" autocomplete="off" /> Map
          </label>
        </div>
        <div className="font-weight-bold mt-4">Text</div>
        <div className="card">
          <div className="card-body">
            {
              showDiagram ? (
                <div className="diagram-container d-flex justify-content-center align-items-center">
                  <div className="border rounded-circle d-flex justify-content-center align-items-center" style={styles.iconContainer}>
                    <FontAwesomeIcon icon="industry" style={styles.icon} />
                  </div>
                  <div className="border-bottom flex-grow-1" />
                  <div className="border rounded-circle d-flex justify-content-center align-items-center" style={styles.iconContainer}>
                    <FontAwesomeIcon icon="industry" style={styles.icon} />
                  </div>
                  <div className="border-bottom flex-grow-1" />
                  <div className="border rounded-circle d-flex justify-content-center align-items-center" style={styles.iconContainer}>
                    <FontAwesomeIcon icon="industry" style={styles.icon} />
                  </div>
                  <div className="border-bottom flex-grow-1" />
                  <div className="border rounded-circle d-flex justify-content-center align-items-center" style={styles.iconContainer}>
                    <FontAwesomeIcon icon="industry" style={styles.icon} />
                  </div>
                  <div className="border-bottom flex-grow-1" />
                  <div className="border rounded-circle d-flex justify-content-center align-items-center" style={styles.iconContainer}>
                    <FontAwesomeIcon icon="industry" style={styles.icon} />
                  </div>
                  <div className="border-bottom flex-grow-1" />
                  <div className="border rounded-circle d-flex justify-content-center align-items-center" style={styles.iconContainer}>
                    <FontAwesomeIcon icon="industry" style={styles.icon} />
                  </div>
                  <div className="border-bottom flex-grow-1" />
                  <div className="border rounded-circle d-flex justify-content-center align-items-center" style={styles.iconContainer}>
                    <FontAwesomeIcon icon="industry" style={styles.icon} />
                  </div>
                </div>
              ) : (
                <div className="map-container">
                  <img className="w-100" src="/images/map.png" alt="map" />
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default DiagramMap;
