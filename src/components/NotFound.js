import React, { Link } from "react";
import '../components/Notfound.css';

const NotFound = () => {
  return (
    <div className="notback">
      <section className="notFound">
        <h1>There's Nothing Here</h1>
        <p>Don't worry, it's almost certainly our fault</p>
        <a href="./">Go back to homepage</a>
      </section>
    </div>

  );
};

export default NotFound;