// import styles from './FriendListItem.module.css';
// import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
    return <li className="item">
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
}

// Statistics.propTypes = {
//     title: PropTypes.string,
//     stats: PropTypes.arrayOf(PropTypes.object).isRequired
// }