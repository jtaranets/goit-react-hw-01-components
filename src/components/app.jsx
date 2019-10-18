import React from 'react';
import Profile from './profile/profile';
import Stats from './stats/stats';
import FriendsList from './friendsList/friendsList';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import TransactionHistory from './transactionHistory/transactionHistory';
import user from '../data/user';
import stats from '../data/stats';

const App = () => (
  <div>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <FriendsList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </div>
);

export default App;
