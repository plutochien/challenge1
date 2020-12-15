import React from 'react';
import PropTypes from 'prop-types';
import UserCard from "../../components/UserCard/UserCard";
import UserPost from "../../components/UserPost/UserPost";

const UserPage = ({
  match: {
    params: { userId },
  },
}) => {
  return (
    <div className="container">
      <UserCard userId={userId} />
      <UserPost userId={userId} />
    </div>
  );
};

UserPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string.isRequired,
    }),
  }),
};

export default UserPage;
