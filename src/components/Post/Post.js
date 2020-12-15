import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PostContainer, PostTitle, PostBody, Button } from './styles';
import ArrowIcon from '../../assets/icons/expand_arrow.svg';
import { bindActionCreators } from 'redux';
import { fetchComments } from '../../actions/commentAction';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import Comment from '../Comment/Comment';

const Post = ({
  post: { id, title, body },
  comments,
  fetchComments,
  currentPostId,
  isCommentLoading,
}) => {
  const [showComment, setShowCommet] = useState(false);
  useEffect(() => {
    if (currentPostId !== id) {
      setShowCommet(false);
    }
  }, [currentPostId, id]);

  const handleClick = event => {
    event.preventDefault();

    fetchComments(id);
    setShowCommet(!showComment);
  };

  const renderShowComment = () => {

    if (!showComment || isCommentLoading) {
      return (
        <Button onClick={handleClick}>
          <img src={ArrowIcon} alt="expand" />
        </Button>
      );
    }
    return (
      <Fragment>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} postId={id} />
        ))}
        <Button onClick={handleClick}>
          <img
            src={ArrowIcon}
            style={{ transform: 'scaleY(-1)' }}
            alt="collapse"
          />
        </Button>
      </Fragment>
    );
  };
  return (
    <PostContainer>
      {isCommentLoading && <Spinner />}
      <PostTitle>{title}</PostTitle>
      <PostBody>{body}</PostBody>
      {renderShowComment()}
    </PostContainer>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.array.isRequired,
  fetchComments: PropTypes.func.isRequired,
  currentPostId: PropTypes.number,
  isCommentLoading: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => ({
  comments: state.commentsReducer.comments,
  isCommentLoading: state.usersReducer.isCommentLoading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchComments,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Post);
