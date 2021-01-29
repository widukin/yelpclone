const comments = ({ comments }) => {
  return (
    <>
      <h4>Comments:</h4>
      <ul className="comments">
        {comments.map((comment, index) => {
          return (
            <li className="comment" key={index}>
              <hr />
              <p className="date">{comment.date}</p>
              <p>{comment.text}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default comments;
