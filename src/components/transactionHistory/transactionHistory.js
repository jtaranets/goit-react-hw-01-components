import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  margin: 0 auto;
  width: 50%;
`;

const Heading = styled.thead`
  background-color: #8bd3ea;
`;

const Title = styled.th`
  color: #fff;
  text-transform: uppercase;
  width: calc(100% / 3);
  padding: 10px 30px;
`;

const RowGrey = styled.tr`
  background-color: rgb(238, 235, 235);
`;

const RowWhite = styled.tr`
  background-color: #fff;
`;

const Data = styled.td`
  color: #808080;
  text-align: center;
  padding: 10px 30px;
  &:first-letter {
    text-transform: uppercase;
  }
`;

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
