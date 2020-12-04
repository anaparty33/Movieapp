import React from "react";

const Footer = () => {
  return (
    <div className="row mt-3 mb-5">
      <div className="col-md-8 col-sm-6" style={{ color: "#5a606b" }}>
        <h3>ABOUT ME</h3>
        <p>
          I'm Bharadwaja , full stack web developer and Cybersecurity Graduate
        </p>
        <p></p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/" style={{ color: "#f4c10f" }}>
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/" style={{ color: "#f4c10f" }}>
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/" style={{ color: "#f4c10f" }}>
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/" style={{ color: "#f4c10f" }}>
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 col-sm-6" style={{ color: "#5a606b" }}>
        <h3>KEEP IN TOUCH</h3>
        <ul className="list-unstyled">
          <li>
            <p>
              <strong>
                <i class="fas fa-user"></i> Name:
              </strong>{" "}
              Bharadwaja Anaparty.
            </p>
          </li>

          <li>
            <p>
              <strong>
                <i className="fas fa-map-marker-alt"></i> Address:
              </strong>{" "}
              714 East 61 Vancouver, BC, Canada.
            </p>
          </li>
          <li>
            <p>
              <strong>
                <i class="fas fa-phone"></i> Phone:
              </strong>{" "}
              +1 7783218464
            </p>
          </li>
          <li>
            <p>
              <strong>
                <i className="fas fa-envelope"></i> Email:
              </strong>{" "}
              anapartybharath33@gmail.com
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
