import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
const colors = ['#00AAAA', '#770077', '#CC0044', '#00AA00', '#0044BB'];

const makeRandomColor = colors => {
  return Math.floor(Math.random() * colors.length);
};

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={styles.item}
            key={id}
            style={{ backgroundColor: colors[makeRandomColor(colors)] }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
