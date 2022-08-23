import styles from "../component-friends/friends.module.css"
import React from "react"
import PropTypes from "prop-types";


// const Status = ({ isOnline }) => {
//     const statClasses = [styles.status];
//     if (isOnline) {
//        statClasses.push(styles.disabled)
//     }
// }


const Friends = ({ friends }) => (
  <div className="friend">
    <ul className={styles.list}>
      {friends.map((f) => (
        <li className={styles.item} key={f.id}>
          <span className={`${styles.status} ${!f.isOnline ? styles.disabled : ''}`}></span>
          <img className="avatar" src={f.avatar} alt="User avatar" width="48" />
          <p className="name">{f.name}</p>
        </li>
      ))}
    </ul>
  </div>
);
Friends.prototype = {
  friends: PropTypes.array.isRequired,
};


export default Friends