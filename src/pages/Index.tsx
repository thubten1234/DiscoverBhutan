import { useInView } from "react-intersection-observer";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Home() {
  // Existing left/right image animations
  const [leftImageRef, leftImageInView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const [rightImageRef, rightImageInView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  // New animation for info div
  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <>
      <Navbar />
      <div className="banner">
        <img src="/image/Banner.webp" alt="Banner" className="img-fluid" />
      </div>

      <div className="banner-text position-absolute top-50 start-50 translate-middle text-center text-white">
        <Container>
          <h1 className="display-1 display-sm-2 display-md-3 display-lg-4">
            DISCOVER BHUTAN
          </h1>
          <h6 className="lead">
            A Land of Mystical Beauty, Timeless Traditions, and Adventures
          </h6>
        </Container>
      </div>

      <div className="intro-01">
        {/* Culture & Cuisine Section */}
        <div className="container my-1">
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div className="image-container flex-shrink-0 mb-4 mb-md-0">
              <img
                ref={leftImageRef}
                src="/image/spacer-div-001.png"
                alt="Description"
                className={`custom-img-size ${
                  leftImageInView ? "slide-in-left" : ""
                }`}
              />
            </div>

            <div className="text-container">
              <h1>Experience Bhutan's Rich Culture and Cuisine</h1>
              <p className="lead">
                <strong>
                  Immerse yourself in Bhutan's vibrant culture and savor its
                  unique cuisine. Witness colorful festivals, explore ancient
                  monasteries, and connect with the warmth of local traditions.
                  Relish authentic Bhutanese dishes like Ema Datshi and Suja,
                  offering a perfect blend of flavor and heritage. Experience
                  the harmony of tradition and taste in every moment.
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Religion Section */}
        <div className="container my-1">
          <div className="d-flex flex-column flex-md-row-reverse align-items-center">
            <div className="image-container flex-shrink-0 mb-4 mb-md-0">
              <img
                ref={rightImageRef}
                src="/image/spacer-div-002.png"
                alt="Description"
                className={`custom-img-size ${
                  rightImageInView ? "slide-in-right" : ""
                }`}
              />
            </div>
            <div className="text-container ms-md-4">
              <h1>Experience Bhutan's Spiritual Heritage</h1>
              <p className="lead">
                <strong>
                  Immerse yourself in Bhutan’s profound spiritual traditions and
                  explore its sacred sites. Witness vibrant religious festivals,
                  visit ancient monasteries like Tiger’s Nest and Punakha Dzong,
                  and connect with the peaceful practices of Buddhism. Discover
                  the harmony of faith, culture, and heritage in every serene
                  moment of your journey.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Background Info */}
      <div
        ref={infoRef}
        className={`info ${infoInView ? "slide-in-bottom in-view" : ""}`}
      >
        <img
          src="/image/background-01.webp"
          alt="background-div-01"
          className="bgimg-01"
        />
        <div className="Description-01 position-absolute translate-right text-center text-white">
          <Container>
            <h3 className="heading-responsive display-4 display-sm-5 display-md-6 display-lg-7">
              Experience the Magic of Bhutan
            </h3>
            <p className="text-responsive lead">
              Journey through Bhutan's stunning landscapes, rich culture, and
              spirituality. Visit iconic sites like Tiger's Nest and Punakha
              Dzong, trek the Himalayas, and experience vibrant festivals and
              traditional cuisine. Bhutan offers a unique blend of adventure,
              culture, and tranquility.
            </p>
          </Container>
        </div>
      </div>
      <Gallery />
      <div className="contact-form">
        <div className="shadow-fade-overlay">
          {"contact form "}
          <div className="contact-form-title">
            <h1>
              You're Only A Click <br /> Away From Your Dream Escape
            </h1>
            <br />

            <p className="lead">
              Discover Bhutan, where serene landscapes and timeless traditions
              create the perfect escape for your dream holiday
            </p>

            <Link
              to="/contactus"
              className="contact-button"
              onClick={() => window.scrollTo(0, 0)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
