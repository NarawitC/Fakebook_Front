import { usePost } from '../../../../contexts/PostContext';
import CommentList from './CommentList';
import NewCommentBox from './NewCommentBox';

function CommentContainer({ post: { id } }) {
  const { commentMapping } = usePost();
  const comments = commentMapping[id];
  // console.log(comments);
  return (
    <div className="pb-2">
      <hr className="my-0 hr-sm" />
      <div className="pt-1">
        {comments.length > 10 && (
          <button className="btn p-0 pt-1 text-muted shadow-none text-3.5 hover-underline">
            View 5 previous comments
          </button>
        )}
      </div>
      <CommentList comments={comments}></CommentList>
      <NewCommentBox postId={id}></NewCommentBox>
    </div>
  );
}

export default CommentContainer;
