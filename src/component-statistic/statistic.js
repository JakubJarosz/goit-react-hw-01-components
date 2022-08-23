import styles from  "../component-statistic/statistic.module.css"
import React from "react"
import PropTypes from "prop-types";

const Statistic = ({data}) => (
  <section className={styles.statistic}>
    <h2 className={styles.title}>Upload stats</h2>
    <ul className={styles.list}>
            {data.map(d => (
                <li className={styles.item} key={d.id}>
                    <span className={styles.label}>{d.label}</span>
                    <span className="percentage"> {d.percentage}%</span>
                </li>
        ))}
    </ul>
  </section>
);

Statistic.prototype = {
  data: PropTypes.array.isRequired
}
export default Statistic