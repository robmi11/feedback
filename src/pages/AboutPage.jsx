import { Link } from "react-router-dom";
import Card from "../components/shared/Card";
import { FaHome } from "react-icons/fa";

function AboutPage() {
  return (
    <Card reverse={true}>
      <div className="about">
        <h1>Informacje o aplikacjii</h1>
        <p>To jest prosta aplikacja React, umożliwiająca komentowanie.</p>
        <Link to="/">
          <FaHome size={50} />
        </Link>
      </div>
    </Card>
  );
}

export default AboutPage;
