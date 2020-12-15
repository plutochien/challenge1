import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../../actions/postAction';
import { connect } from 'react-redux';
import { UserPostContainer, Text } from './styles';
import Spinner from '../Spinner/Spinner';
import Post from '../Post/Post';
import { Button } from '../Post/styles';
import { SHOW_ALL } from '../../util/constatns';
import ArrowIcon from '../../assets/icons/expand_arrow.svg';

const UserPost = ({
  userId,
  posts,
  fetchPosts,
  isPostLoading,
  currentPostId,
}) => {
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetchPosts(userId);
  }, [userId, fetchPosts]);

  const handleClick = event => {
    event.preventDefault();
    setShowAll(true);
  };

  const renderPostList = () => {
    return (
      <Fragment>
        {posts.map((post, index) => {
          if (!showAll && index > 2) {
            return null;
          }
          return (
            <Post key={post.id} post={post} currentPostId={currentPostId} />
          );
        })}
        {!showAll && (
          <Button onClick={handleClick}>
            <img src={ArrowIcon} alt="show all" /> <Text>{SHOW_ALL}</Text>
          </Button>
        )}
      </Fragment>
    );
  };
  return (
    <UserPostContainer>
      <Fragment>
        {isPostLoading && <Spinner />}
        {renderPostList()}
      </Fragment>
    </UserPostContainer>
  );
};

UserPost.propTypes = {
  userId: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  isPostLoading: PropTypes.bool,
  currentPostId: PropTypes.number,
};

const mapStateToProps = (state, ownProps) => ({
  isPostLoading: state.postsReducer.isPostLoading,
  currentPostId: state.commentsReducer.currentPostId,
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPosts,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(UserPost);
