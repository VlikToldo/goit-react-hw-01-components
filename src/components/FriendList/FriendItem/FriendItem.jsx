import PropTypes from 'prop-types';
// import css from './friend-item.module.css'

const FriendItem = ({avatar, name, isOnline})=> {
    const fullClassName = isOnline ? "online" : "offline";

    return  <li className="item">
              <span className={fullClassName}></span>
              <img className="avatar" src={avatar} alt="User avatar" width="48" />
              <p className="name">{name}</p>
            </li>
}


export default FriendItem;

FriendItem.propTypes = {
    avatar:
    PropTypes.string.isRequired,
    name:
    PropTypes.string.isRequired,
    isOnline: 
    PropTypes.bool,
};