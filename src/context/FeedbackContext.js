import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: uuidv4(),
      rating: 10,
      text: "To jest komentarz nr 1.",
    },
    {
      id: uuidv4(),
      rating: 3,
      text: "To jest komentarz nr 2.",
    },
    {
      id: uuidv4(),
      rating: 7,
      text: "To jest komentarz nr 3.",
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

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
    feedbackAdd.id = uuidv4();
    setFeedback([feedbackAdd, ...feedback]);
  }

  function deleteFeedback(id) {
    if (window.confirm(`Czy napewno chcesz usunąć komentarz o id: ${id}?`)) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  function editFeedback(item) {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  function updateFeedback(id, updItem) {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        feedbackStats,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
