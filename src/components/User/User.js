import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Img, UserContainer, UserInfoContainer, UserName } from './styles';
import { AVATAR_URL, PROFILE_PHOTO } from '../../util/constatns';

const User = ({ user: { id, name, username } }) => {
  return (
    <UserContainer>
      <Link to={`/user/${id}`}>
        <Img src={`${AVATAR_URL}${id}.svg`} alt={`${PROFILE_PHOTO}`} />
        <UserInfoContainer>
          <UserName>{name}</UserName>
          <UserName isUserName>{`@${username}`}</UserName>
        </UserInfoContainer>
      </Link>
    </UserContainer>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
