import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
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

  function addFeedback(feedbackAdd) {
    setFeedback([feedbackAdd, ...feedback]);
    console.log(feedbackAdd);
  }

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm addFeedback={addFeedback} />
                <FeedbackStats feedbackStats={feedbackStats} />
                <FeedbackList
                  feedback={feedback}
                  removeFeedback={removeFeedback}
                />
              </>
            }
          />
          <Route path="/about" element={<AboutPage reverse={true} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
