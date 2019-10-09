import React from 'react';
import PropTypes from 'prop-types';
import styles from './profile.module.css';

const profile = ({ user }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img className={styles.avatar} src={user.avatar} alt="" />
        <p className={styles.name}>{user.name}</p>
        <p className={styles.tag}>{user.tag}</p>
        <p className={styles.location}>{user.location}</p>
      </div>
      <ul className={styles.stats}>
        {Object.keys(user.stats).map(key => (
          <li key={user.stats[key][0]} className={styles.item}>
            <span className={styles.label}>{key}</span>
            <span className={styles.quantity}>{user.stats[key][1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.array.isRequired,
      views: PropTypes.array.isRequired,
      likes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default profile;
