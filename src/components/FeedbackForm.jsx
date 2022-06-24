import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { v4 as uuidv4 } from "uuid";
import Button from "./shared/Button";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import { AnimatePresence, motion } from "framer-motion";

function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [rating, setRating] = useState(10);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  function handleTextChange(event) {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("komentarz musi się składać z conajmniej 10 znaków");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage("");
    }
    setText(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        rating,
        text,
      };
    }

    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, { text, rating });
    } else {
      addFeedback({ text, rating });
    }

    setText("");
    setBtnDisabled(true);
  }

  return (
    <AnimatePresence>
      <Card reverse={true}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <form onSubmit={(event) => handleFormSubmit(event)}>
            <h2>Jak oceniasz nasze usługi?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
              <input
                onChange={handleTextChange}
                type="text"
                placeholder="Twój komentarz..."
                value={text}
              />
              <Button type="submit" isDisabled={btnDisabled}>
                Zapisz
              </Button>
            </div>
            {message && <div className="message">{message}</div>}
          </form>
        </motion.div>
      </Card>
    </AnimatePresence>
  );
}

export default FeedbackForm;
