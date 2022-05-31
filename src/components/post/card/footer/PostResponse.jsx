function PostResponse({ showComment }) {
  return (
    <div className="d-flex space-x-1 py-1">
      <button className="btn text-muted flex-1 d-flex align-items-center space-x-2 justify-content-center hover-bg-gray-200">
        <i className="fa-regular fa-thumbs-up" />
        <small className="fw-bold">Like</small>
      </button>
      <button
        className="btn text-muted flex-1 d-flex align-items-center space-x-2 justify-content-center hover-bg-gray-200"
        onClick={showComment}
      >
        <i className="fa-regular fa-message" />
        <small className="fw-bold">Comment</small>
      </button>
    </div>
  );
}

export default PostResponse;
