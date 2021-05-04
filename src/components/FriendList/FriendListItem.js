import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';


const FriendListItem = ({ avatar, name, isOnline }) => (
<Fragment>
  <span className={styles.status} style={{ backgroundColor: isOnline? 'green': 'red'}}>{isOnline}</span>
  <img className={styles.avatar} src={avatar} alt="" width="48" />
  <p className={styles.name}>{name}</p>
</Fragment>


);

FriendListItem.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;