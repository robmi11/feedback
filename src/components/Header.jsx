import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
    position: "relative",
  };

  const iconStyle = {
    position: "absolute",
    right: "50px",
    fontSize: "20px",
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>
          <Link to="/" style={{ textDecoration: "none" }}>
            {text}
          </Link>
        </h2>
      </div>
      <Link to="/about">
        <FaQuestion style={iconStyle} />
      </Link>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback App UI",
  bgColor: "rgba(0, 0, 0, 0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
