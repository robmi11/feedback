import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });
  useEffect(() => {
    getFeedback();
  }, []);

  async function getFeedback() {
    const response = await fetch("/feedback?_sort=id&_order=desc");
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  }
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

  async function addFeedback(feedbackAdd) {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackAdd),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  }

  async function deleteFeedback(id) {
    if (window.confirm(`Czy napewno chcesz usunąć komentarz o id: ${id}?`)) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  function editFeedback(item) {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  async function updateFeedback(id, updItem) {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        feedbackStats,
        isLoading,
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
