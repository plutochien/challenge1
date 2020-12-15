import React from 'react';
import PropTypes from 'prop-types';
import { CommentContainer } from './styles';
import Spinner from '../Spinner/Spinner';

const Comment = ({ comment: { postId: commentPostId, body }, postId }) => {
  if (commentPostId !== postId) {
    return <Spinner />;
  }
  return <CommentContainer>{body}</CommentContainer>;
};

Comment.propTypes = {
  comment: PropTypes.shape({
    postId: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  postId: PropTypes.number.isRequired,
};

export default Comment;
