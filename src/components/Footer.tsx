import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const Footer = () => {
  return (
    <footer className="mono-footer">
      <Container>
        <Row>
          {/* About Us Section */}
          <Col xs={12} md={4} className="footer-column">
            <h5>About Us</h5>
            <p>
              Bhutan is a land of stunning natural beauty, rich culture, and
              deep spirituality. We invite you to explore all that this mystical
              kingdom has to offer.
            </p>
          </Col>

          {/* Contact Section */}
          <Col xs={12} md={4} className="footer-column">
            <h5>Contact</h5>
            <ul>
              <li>Email: discoverbhutanholidays@gmail.com</li>
              <li>Phone(Whatsapp): +97517548755</li>
              <li>Address: Thimphu, Bhutan</li>
            </ul>
          </Col>

          {/* Social Media Section */}
          <Col xs={12} md={4} className="footer-column">
            <h5>Follow Us</h5>
            <div className="social-links">
              <ul>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <Container>
          <p className="text-center">
            &copy; {new Date().getFullYear()} Bhutan Travel. All Rights
            Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
