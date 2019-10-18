import React from 'react';
import PropTypes from 'prop-types';
import * as elems from './transactionHistory-styles';

const { Table, Heading, Title, RowGrey, RowWhite, Data } = elems;

const TransactionHistory = ({ transactions }) => (
  <Table>
    <Heading>
      <tr>
        <Title>Type</Title>
        <Title>Amount</Title>
        <Title>Currency</Title>
      </tr>
    </Heading>
    <tbody>
      {transactions.map((transact, ind) =>
        ind % 2 ? (
          <RowGrey key={transact.id}>
            <Data>{transact.type}</Data>
            <Data>{transact.amount}</Data>
            <Data>{transact.currency}</Data>
          </RowGrey>
        ) : (
          <RowWhite key={transact.id}>
            <Data>{transact.type}</Data>
            <Data>{transact.amount}</Data>
            <Data>{transact.currency}</Data>
          </RowWhite>
        ),
      )}
    </tbody>
  </Table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
