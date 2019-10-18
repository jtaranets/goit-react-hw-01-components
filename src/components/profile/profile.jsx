import React from 'react';
import PropTypes from 'prop-types';
import styles from './profile.module.css';

const profile = ({ user }) => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img className={styles.avatar} src={avatar} alt="" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        {Object.keys(stats).map(key => (
          <li key={stats[key][0]} className={styles.item}>
            <span className={styles.label}>{key}</span>
            <span className={styles.quantity}>{stats[key][1]}</span>
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
