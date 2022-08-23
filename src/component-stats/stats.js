import styles from"../component-stats/stats.module.css";
import React from "react";
import PropTypes from "prop-types";

const Stats = ({ followers, views, likes }) => (
  <ul className={styles.stats}>
    <li className={styles.item}>
      <span className={styles.label}>Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li className={styles.item}>
      <span className={styles.label}>Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li className={styles.item}>
      <span className={styles.label}>Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
);

Stats.prototype = {
  followers: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.string.isRequired,
}


export default Stats;
