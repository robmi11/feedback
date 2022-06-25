import Loader from "../assets/spinner.gif";

const spinnerStyle = {
  width: "100px",
  margin: "auto",
  display: "block",
};

function Spinner() {
  return <img src={Loader} alt="Ładowanie..." style={spinnerStyle} />;
}

export default Spinner;
