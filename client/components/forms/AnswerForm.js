const AnswerForm = ({ addAnswer, setAnswer, answer }) => {
  return (
    <form onSubmit={(e) => addAnswer(e)}>
      <input
        type="text"
        className="form-control"
        placeholder="Scrie ceva..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button className="btn btn-primary btn-sm btn-block mt-3">Submit</button>
    </form>
  );
};
export default AnswerForm;
