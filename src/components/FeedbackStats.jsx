import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedbackStats } = useContext(FeedbackContext);
  return (
    <div className="feedback-stats">
      <div>
        {feedbackStats.num > 0 && `Liczba komentarzy ${feedbackStats.num}`}
      </div>
      <div>{feedbackStats.num > 0 && `Średnio: ${feedbackStats.avg}`}</div>
    </div>
  );
}

export default FeedbackStats;
