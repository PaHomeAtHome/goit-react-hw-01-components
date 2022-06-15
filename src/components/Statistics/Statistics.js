import styles from './Statistics.module.css';
// import PropTypes from 'prop-types';
const colors = ['#00AAAA', '#770077', '#CC0044', '#00AA00', '#0044BB'];

export default function Statistics({ title, stats }) {
    return <section className={styles.statistics}>
        {title && (<h2 className={styles.title}>{title}</h2>)}
        <ul className={styles.statList}>
            {stats.map(({ id, label, percentage }, index) =>

                <li className={styles.item} key={id} style={{backgroundColor: colors[index]}}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
                </li>
            )}
        </ul>
    </section> 
}

// Statistics.propTypes = {
//     username: PropTypes.string.isRequired,
//     stats: PropTypes.objectOf(PropTypes.number),
// }