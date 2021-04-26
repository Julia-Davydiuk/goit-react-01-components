import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => (
<Fragment>
  <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt="" width="48" />
  <p class="name">{name}</p>
</Fragment>


);

FriendListItem.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;