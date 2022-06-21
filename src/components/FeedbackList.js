import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

import { motion, AnimatePresence } from "framer-motion";

function FeedbackList({ feedback, removeFeedback }) {
  if (!feedback || feedback.length === 0) {
    return <h2>Brak komentarzy...</h2>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={index}
              item={item}
              removeFeedback={removeFeedback}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      rating: PropTypes.number,
      text: PropTypes.string,
    })
  ),
};

export default FeedbackList;
