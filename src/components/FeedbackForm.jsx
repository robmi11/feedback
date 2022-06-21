import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./shared/Button";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ addFeedback }) {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

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
      addFeedback({ id: uuidv4(), rating, text });

      setText("");
      setBtnDisabled(true);
    } else {
      setMessage("Brak danych");
    }
  }

  return (
    <Card reverse={true}>
      <form onSubmit={handleFormSubmit}>
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
    </Card>
  );
}

export default FeedbackForm;
