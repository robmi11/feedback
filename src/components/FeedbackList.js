import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, removeFeedback }) {
  if (!feedback || feedback.length === 0) {
    return <h2>Brak komentarzy...</h2>;
  }
  return (
    <>
      {feedback.map((item, index) => (
        <FeedbackItem key={index} item={item} removeFeedback={removeFeedback} />
      ))}
    </>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      rating: PropTypes.number,
      text: PropTypes.string,
    })
  ),
};

export default FeedbackList;
