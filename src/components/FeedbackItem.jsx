import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ item, removeFeedback }) {
  function handleRemove(id) {
    removeFeedback(id);
  }
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleRemove(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
