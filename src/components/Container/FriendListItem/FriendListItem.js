import styles from './FriendListItem.module.css';
// import PropTypes from 'prop-types';

export default function FriendListItem(avatar, name, isOnline) {
    return <li class="item">
        <span class="status"></span>
        <img class="avatar" src="" alt="User avatar" width="48" />
        <p class="name"></p>
    </li>
}

// Statistics.propTypes = {
//     title: PropTypes.string,
//     stats: PropTypes.arrayOf(PropTypes.object).isRequired
// }