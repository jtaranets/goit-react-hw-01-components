import React from 'react';
import PropTypes from 'prop-types';
import style from './stats.module.css';
import color from '../../helpers/color';


const Stats = ({ title, stats = [] }) => (
  <section className={style.stats__section}>
    {title && <h2 className={style.title}>{title}</h2>}
    <ul className={style.stats__list}>
      {stats.map((item, ind, arr) => (
        <li
          style={{
            backgroundColor: `rgb(${color()},${color()},${color()})`,
            width: `calc(100% / ${arr.length})`,
          }}
          key={item.id}
          className={style.item}
        >
          <span className={style.label}>{item.label}</span>
          <span className={style.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;
