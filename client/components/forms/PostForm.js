const PostForm = ({ content, setContent, postSubmit }) => {
  return (
    <div className="card">
      <div className="card-body pb-3">
        <form className="form-group ">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
            placeholder="Scrieti ceva..."
          ></textarea>
        </form>
      </div>
      <div className="card-footer">
        <button
          disabled={!content}
          onClick={postSubmit}
          className="btn btn-primary btn-sm mt-1"
        >
          Postează
        </button>
      </div>
    </div>
  );
};

export default PostForm;
