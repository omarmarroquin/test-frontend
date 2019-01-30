/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faQuestionCircle, faBell, faIndustry, faCheck } from '@fortawesome/free-solid-svg-icons'
import Invoice from './components/invoice/invoice'
import DiagramMap from './components/diagramMap/diagramMap'
import Overview from './components/overview/overview'
import logo from './logo.svg';
import data from './data.json'
import './App.css';

library.add(faSearch, faQuestionCircle, faBell, faIndustry, faCheck, fab);

const styles = {
  icon: {
    fontSize: "25px",
    margin: "8px",
    color: "rgba(0,0,0,.5)"
  },
  iconNotification: {
    fontSize: "25px",
    margin: "8px",
    color: "rgb(0,0,0)"
  },
}

class App extends Component {
  state = {
    data1: null
  }
  
  componentDidMount() {
    const { invoice, number, date, dueDate, terms, balance, status, method, capacity, drayage, incoterms, serviceOptions, commodities } = data;
    const data1 = { invoice, number, date, dueDate, terms, balance };
    const data2 = { status, method, capacity, drayage, incoterms, serviceOptions, commodities }
    this.setState({ data1, data2 });
  }

  render() {
    const { data1, data2 } = this.state;
    return (
      <div className="App d-flex flex-column">
        <nav className="navbar navbar-expand-lg navbar-light container">
          <a className="navbar-brand" href="#"><img src={logo} className="App-logo" alt="logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto menu">
              <li className="nav-item">
                <a className="nav-link" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Network</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Network</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Network</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Network</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Network</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Billing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Network</a>
              </li>
            </ul>
            <a href="#">
              <FontAwesomeIcon icon="search" style={styles.icon} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon="question-circle" style={styles.icon} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon="bell" style={styles.iconNotification} />
            </a>
            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={["fab", "node-js"]} style={styles.icon} />
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex-grow-1 bg-light">
          <div className="container">
            <Invoice data={data1} />
            <DiagramMap />
            <Overview data={data2} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
