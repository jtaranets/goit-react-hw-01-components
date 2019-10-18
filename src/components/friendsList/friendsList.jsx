import React from 'react';
import PropTypes from 'prop-types';
import * as els from './friendsList-style';

const { FriendsList, FriendItem, FriendStatus, FriendImg, FriendName } = els;

const Friends = ({ friends }) => (
  <FriendsList>
    {friends.map(item => (
      <FriendItem key={item.id}>
        <FriendStatus online={item.isOnline} />
        <FriendImg src={item.avatar} />
        <FriendName>{item.name}</FriendName>
      </FriendItem>
    ))}
  </FriendsList>
);

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Friends;
