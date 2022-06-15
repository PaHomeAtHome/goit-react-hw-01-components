import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({title, stats}) {
    return <section className="statistics">
  <h2 className="title">{title}</h2>

        <ul className="stat-list">
            {stats.map(({ id, label, percentage }) =>
                <li className="item" key={id}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}</span>
                </li>
            )}
   
  </ul>
</section> 
}

Statistics.propTypes = {
    // username: PropTypes.string.isRequired,
    // stats: PropTypes.objectOf(PropTypes.number),
}