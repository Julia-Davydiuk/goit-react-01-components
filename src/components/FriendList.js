import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
    <ul class="friend-list">
        {friends.map(({id, avatar, name, isOnline}) => (
            <li key={id} class="item">
                <FriendListItem 
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />
            </li>
        ))}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

export default FriendList;