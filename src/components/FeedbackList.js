import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  if (!feedback) {
    return <h2>Brak komentarzy...</h2>;
  }
  return (
    <>
      {feedback.map((item, index) => (
        <FeedbackItem key={index} item={item} />
      ))}
    </>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf({
    type: Array,
  }),
};

export default FeedbackList;
