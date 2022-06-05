import PostBody from './body/PostBody';
import PostFooter from './footer/PostFooter';
import PostHeader from './header/PostHeader';

function PostItem({ post }) {
  return (
    <div className="border bg-white rounded-lg shadow-sm px-3 tw-pt-3">
      <PostHeader post={post}></PostHeader>
      <PostBody post={post}></PostBody>
      <PostFooter post={post}></PostFooter>
    </div>
  );
}

export default PostItem;
