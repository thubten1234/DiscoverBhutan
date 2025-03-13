import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = footerRef.current;
      if (!footerElement) return;

      const scrollPosition = window.scrollY + window.innerHeight;
      const footerPosition = footerElement.offsetTop;

      const imageElement = footerElement.querySelector<HTMLImageElement>(
        ".footer_reveal-image"
      );

      if (imageElement) {
        if (scrollPosition >= footerPosition) {
          imageElement.classList.add("revealed");
        } else {
          imageElement.classList.remove("revealed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="footer_reveal" ref={footerRef}>
      <img
        src="/image/logo.png"
        alt="Footer Banner"
        className="footer_reveal-image"
        loading="lazy"
      />

      <footer className="footer">
        <Container>
          <Row>
            {/* About Us Section */}
            <Col xs={12} md={4} className="footer-column">
              <h5>About Us</h5>
              <p>
                Bhutan is a land of stunning natural beauty, rich culture, and
                deep spirituality. We invite you to explore all that this
                mystical kingdom has to offer.
              </p>
            </Col>

            {/* Contact Section */}
            <Col xs={12} md={4} className="footer-column">
              <h5>Contact</h5>
              <ul>
                <li>Email: discoverbhutanholidays@gmail.com</li>
                <li>Phone(Whatsapp): +97517727077</li>
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
              &copy;{" "}
              {`${new Date().getFullYear()} Bhutan Travel. All Rights Reserved.`}
            </p>
          </Container>
        </div>
      </footer>
    </aside>
  );
}

export default Footer;
