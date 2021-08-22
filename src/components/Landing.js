import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

function Landing() {
  return (
    <div>
      <div className="container">
        <div className="bg-image1"></div>

        <div className="text-button">
          <div className="text-box">
            <h1 className="heading-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              finibus a velit sed vulputate.
            </h1>
          </div>

          <Link to="/info">
            <button className="btn-learn-more">learn more</button>
          </Link>
        </div>
        <div className="summary-container">
          <h2 className="summary-header">Who We Are</h2>
          <p className="summary-text">
            Phasellus scelerisque, nulla nec posuere aliquam, odio tellus
            consectetur massa, ut pharetra lectus dui et libero. Maecenas
            bibendum maximus mi, at imperdiet dolor semper vitae. Curabitur
            viverra tellus quam, in congue mauris condimentum ut.
          </p>
          <div>
            <a href="mailto:jdt@live.ca">
              <button className="btn-email">email us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
