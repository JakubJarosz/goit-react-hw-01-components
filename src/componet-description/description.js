import styles from'../componet-description/description.module.css'
import React from 'react'
import PropTypes from "prop-types";

const Description = ({ imgUrl, name, tag, location }) => (
  <div className="description">
    <img src={imgUrl} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
  </div>
);

Description.prototype = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;

