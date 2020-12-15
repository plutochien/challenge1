import React, { Fragment, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../../actions/userAction';
import Spinner from '../../components/Spinner/Spinner';
import User from '../../components/User/User';

const UserListPage = ({ fetchUsers, users, isUserLoading }) => {
  const fetchAllUsers = useCallback(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return (
    <Fragment>
      {isUserLoading ? (
        <Spinner />
      ) : (
        users.map(user => <User key={user.id} user={user} />)
      )}
    </Fragment>
  );
};

UserListPage.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  isUserLoading: PropTypes.bool,
  users: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  users: state.usersReducer.users,
  isUserLoading: state.usersReducer.isUserLoading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUsers,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);
