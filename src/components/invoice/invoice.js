import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./invoice.css";

class Invoice extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    const { invoice, number, date, dueDate, terms, balance } = data;
    return (
      <div className="invoice-container row d-flex flex-column pl-3 pt-3 pr-3">
        <h2>Invoice <small className="text-secondary ml-3">{ invoice }</small></h2>
        <div className="card">
          <div className="border-bottom font-weight-bold p-3">INVOICE - REVISION</div>
          <div className="row m-0 d-flex flex-grow-1 p-0">
            <div className="col-xs-12 col-md-3 border-right">
              <div className="pt-2">
                <table className="w-100">
                  <tbody>
                    <tr>
                      <td className="text-secondary">Invoice #</td>
                      <td className="font-weight-bold text-right">{number}</td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Date</td>
                      <td className="font-weight-bold text-right">{date}</td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Due Date</td>
                      <td className="font-weight-bold text-right">{dueDate}</td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Terms</td>
                      <td className="font-weight-bold text-right">{terms}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-xs-12 col-lg-6 border-right">
              <div className="pt-2">
                <div className="font-weight-bold mt-2">Bill to</div>
              </div>
            </div>
            <div className="col-xs-12 col-md-3">
              <div className="pt-2">
                <div className="font-weight-bold mt-2 mb-2">New Balance upon Re-booking</div>
                <div className="font-weight-bold text-warning">{balance}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Invoice;

Invoice.propTypes = {
  data: PropTypes.shape({
    invoice: PropTypes.string,
    date: PropTypes.string,
    dueDate: PropTypes.string,
    terms: PropTypes.string,
    balance: PropTypes.string
  }),
}
