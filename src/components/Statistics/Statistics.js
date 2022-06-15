import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
    return <section className={styles.statistics}>
        {title && (<h2 className={styles.title}>{title}</h2>)}

        <ul className={styles.statList}>
            {stats.map(({ id, label, percentage }) =>
                <li className={styles.item} key={id}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}</span>
                </li>
            )}
  </ul>
    </section> 
}

Statistics.propTypes = {
    // username: PropTypes.string.isRequired,
    // stats: PropTypes.objectOf(PropTypes.number),
}