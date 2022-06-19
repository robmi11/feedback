import { useState } from "react";
import PropTypes from "prop-types";

import Card from "./shared/Card";

function FeedbackItem({ feedback }) {
  const [rating, setRating] = useState(6);
  const [text, setText] = useState("To jest pojedynczy komentarz.");

  return (
    <div className="card">
      <Card />
    </div>
  );
}

FeedbackItem.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackItem;
