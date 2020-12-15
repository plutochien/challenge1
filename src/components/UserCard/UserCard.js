import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../../actions/userAction';
import { connect } from 'react-redux';
import { UserCardContainer, UserInfoContainer, Img } from './styles';
import { UserName } from '../User/styles';
import { AVATAR_URL, PROFILE_PHOTO } from '../../util/constatns';

const UserCard = ({ userId, user: { name, username }, fetchUsers }) => {
  useEffect(() => {
    if (name === undefined && username === undefined) {
      fetchUsers();
    }
  }, [fetchUsers, name, username]);
  return (
    <UserCardContainer>
      <UserInfoContainer>
        <Img src={`${AVATAR_URL}${userId}.svg`} alt={`${PROFILE_PHOTO}`} />
        <UserName>{name}</UserName>
        <UserName isUserName>{`@${username}`}</UserName>
      </UserInfoContainer>
    </UserCardContainer>
  );
};

UserCard.propTypes = {
  userId: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

const fetchUserFromState = (userId, users = []) => {
  const user = users.filter(user => user.id === parseInt(userId));
  if (user.length === 0) {
    return {};
  }
  return user[0];
};

const mapStateToProps = (state, ownProps) => ({
  user: fetchUserFromState(ownProps.userId, state.usersReducer.users),
  isUserLoading: state.usersReducer.isUserLoading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUsers,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
