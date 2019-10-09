import React from 'react';
import Profile from './profile/profile';
import Stats from './stats/stats';
import FriendsList from './friendsList/friendsList';
import friends from './friendsList/friends.json';
import transactions from './transactionHistory/transactions.json';
import TransactionHistory from './transactionHistory/transactionHistory';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: ['js-1', 5603],
    views: ['js-2', 4827],
    likes: ['js-3', 1308],
  },
};

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

const App = () => (
  <div>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <FriendsList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </div>
);

export default App;
