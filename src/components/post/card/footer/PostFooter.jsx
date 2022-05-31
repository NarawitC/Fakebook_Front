import { useState } from 'react';
import CommentContainer from '../comment/CommentContainer';
import PostFeedback from './PostFeedback';
import PostResponse from './PostResponse';

function PostFooter({ post }) {
  const { Likes: likes } = post;
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const showComment = () => {
    setShow(true);
  };
  return (
    <>
      <PostFeedback toggleShow={toggleShow} post={post}></PostFeedback>
      <hr className="hr-sm my-0" />
      <PostResponse
        showComment={showComment}
        likes={likes}
        postId={post.id}
      ></PostResponse>
      {show && <CommentContainer post={post}></CommentContainer>}
    </>
  );
}

export default PostFooter;
