import "../components-transaction/transaction.css"
import React from "react"
import PropTypes from "prop-types";

const Transaction = ({ transaction }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transaction.map((t) => (
        <tr key={t.id}>
          <td>{t.type}</td>
          <td>{t.amount}</td>
          <td>{t.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Transaction.prototype = {
  transaction: PropTypes.array.isRequired,
};
export default Transaction