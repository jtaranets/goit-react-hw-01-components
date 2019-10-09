import React from 'react';
import PropTypes from 'prop-types';
import styles from './friends.module.css';

const FriendsList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(friend => {
      const classNames = [styles.status];
      if (friend.isOnline) {
        classNames.push(styles.online);
      }
      return (
        <li key={friend.id} className={styles.item}>
          <span className={classNames.join(' ')} />
          <img className={styles.avatar} src={friend.avatar} alt="avatar" />
          <p className={styles.name}>{friend.name}</p>
        </li>
      );
    })}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendsList;
