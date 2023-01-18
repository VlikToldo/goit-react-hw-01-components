import PropTypes from 'prop-types';

// import css from './friend-list.module.css';
import FriendItem from './FriendItem/FriendItem';

const FriendList = ({friends})=> {
    const elements = friends.map(friend => <FriendItem key={friend.id} {...friend}/>)

    return  <ul className="friend-list">
        {elements}
    </ul>
}


export default FriendList;

FriendList.defaultProps = {
    friends: []
}

FriendList.propTypes = {
    friends:
    PropTypes.arrayOf(PropTypes.shape( {   
        id:
        PropTypes.number.isRequired,
        avatar:
        PropTypes.string.isRequired,
        name:
        PropTypes.string.isRequired,
        isOffline:
        PropTypes.bool,
    }))
}

