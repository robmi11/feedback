import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: uuidv4(),
      rating: 10,
      text: "Ten komentarz pochodzi z context.",
    },
  ]);

  const feedbackStats = {
    num: feedback.length,
    avg: (
      feedback.reduce((acc, cur) => {
        return acc + cur.rating;
      }, 0) / feedback.length
    )
      .toFixed(1)
      .replace(/[.,]0$/, ""),
  };

  function addFeedback(feedbackAdd) {
    setFeedback([feedbackAdd, ...feedback]);
  }

  function deleteFeedback(id) {
    if (window.confirm(`Czy napewno chcesz usunąć komentarz o id: ${id}?`)) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackStats,
        addFeedback,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
