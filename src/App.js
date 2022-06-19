import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/Feedbackdata";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  function removeFeedback(id) {
    if (window.confirm(`Czy napewno chcesz usunąć komentarz o id: ${id}?`)) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
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

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedbackStats={feedbackStats} />
        <FeedbackList feedback={feedback} removeFeedback={removeFeedback} />
      </div>
    </>
  );
}

export default App;
