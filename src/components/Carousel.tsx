import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Carouselpage() {
  return (
    <div className="gallery py-5">
      <h1 className="text-center mb-4">Experience Bhutans Culture</h1>

      <Carousel>
        {/* Carousel Item 1 */}
        <Carousel.Item>
          <Container>
            <Row>
              <Col md={4}>
                <img
                  className="d-block w-100 gallery-image"
                  src="/image/grid-gallery-002.jpg"
                  alt="Gallery Item 1"
                />
                <h5 className="text-center mt-2">Sacred Sites </h5>
              </Col>
              <Col md={4}>
                <img
                  className="d-block w-100 gallery-image"
                  src="/image/grid-gallery-003.jpg"
                  alt="Gallery Item 2"
                />
                <h5 className="text-center mt-2">Vibrant Architecture </h5>
              </Col>
              <Col md={4}>
                <img
                  className="d-block w-100 gallery-image"
                  src="/image/grid-gallery-004.jpg"
                  alt="Gallery Item 3"
                />
                <h5 className="text-center mt-2">Cultural Wonders</h5>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        {/* Carousel Item 2 */}
        <Carousel.Item>
          <Container>
            <Row>
              <Col md={4}>
                <img
                  className="d-block w-100 gallery-image"
                  src="/image/grid-gallery-013.jpg"
                  alt="Gallery Item 4"
                />
                <h5 className="text-center mt-2">Majestic Monasteries</h5>
              </Col>
              <Col md={4}>
                <img
                  className="d-block w-100 gallery-image"
                  src="/image/grid-gallery-014.jpg"
                  alt="Gallery Item 5"
                />
                <h5 className="text-center mt-2">Hidden Valleys</h5>
              </Col>
              <Col md={4}>
                <img
                  className="d-block w-100 gallery-image"
                  src="/image/grid-gallery-015.jpg"
                  alt="Gallery Item 6"
                />
                <h5 className="text-center mt-2">Sacred Traditions</h5>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carouselpage;
