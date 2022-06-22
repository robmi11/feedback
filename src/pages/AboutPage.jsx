import { Link } from "react-router-dom";
import Card from "../components/shared/Card";
import { FaHome } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";

function AboutPage() {
  return (
    <AnimatePresence>
      <Card reverse={true}>
        <motion.div
          className="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Informacje o aplikacjii</h1>
          <p>To jest prosta aplikacja React, umożliwiająca komentowanie.</p>
          <Link to="/">
            <FaHome size={50} />
          </Link>
        </motion.div>
      </Card>
    </AnimatePresence>
  );
}

export default AboutPage;
