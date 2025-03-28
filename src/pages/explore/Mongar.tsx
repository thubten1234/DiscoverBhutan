import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Mongar = () => {
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <div className="intro-banner">
        <img
          src="../image/Mongar.jpg"
          className="explore-banner-image"
          alt="Mongar Valley Banner"
          loading="lazy"
        />
        <h1 className="intro-banner-title">Mongar</h1>
      </div>

      {/* Main Content Section */}
      <div className="content-container">
        <div className="main-content">
          <h2>About Mongar</h2>
          <p>
            Mongar, located in eastern Bhutan, is a vibrant town known for its
            lush landscapes, rich cultural heritage, and warm hospitality. It
            serves as a gateway to the eastern regions of Bhutan and offers a
            unique blend of tradition and modernity.
          </p>

          <h3>Highlights</h3>
          <ul>
            <li>
              Visit the majestic <strong>Mongar Dzong</strong>, a stunning
              example of Bhutanese architecture.
            </li>
            <li>
              Explore the serene <strong>Drametse Monastery</strong>, famous for
              its traditional mask dances.
            </li>
            <li>
              Discover the vibrant <strong>Mongar Market</strong>, offering
              local produce and handicrafts.
            </li>
            <li>
              Experience the rich biodiversity of the{" "}
              <strong>Thrumshingla National Park</strong>.
            </li>
            <li>
              Enjoy the scenic beauty of the <strong>Kuri Chhu River</strong>.
            </li>
          </ul>

          <h3>How to Get There</h3>
          <p>
            Mongar is approximately a <strong>12-hour drive</strong> from
            Thimphu and a <strong>6-hour drive</strong> from Trashigang. The
            journey offers breathtaking views of valleys, rivers, and mountains.
          </p>
        </div>

        {/* Sidebar Section */}
        <aside className="sidebar">
          <h3>Quick Facts</h3>
          <ul>
            <li>Location: Eastern Bhutan</li>
            <li>Altitude: 1,600 meters</li>
            <li>Main Attraction: Mongar Dzong</li>
            <li>Best Time to Visit: March to May, September to November</li>
          </ul>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35827.50279152442!2d90.4975245!3d27.4997715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e19989f8e9dfdf%3A0x25e7d6b1a1e3a06d!2sMongar%2C%20Bhutan!5e0!3m2!1sen!2s!4v1696500015678!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mongar Valley Map"
            ></iframe>
          </div>

          <h3>Related Destinations</h3>
          <ul>
            <li>
              <Link to="/explore/thimphu" onClick={() => window.scrollTo(0, 0)}>
                Thimphu
              </Link>
            </li>
            <li>
              <Link to="/explore/punakha" onClick={() => window.scrollTo(0, 0)}>
                Punakha
              </Link>
            </li>
            <li>
              <Link
                to="/explore/bumthang"
                onClick={() => window.scrollTo(0, 0)}
              >
                Bumthang
              </Link>
            </li>
          </ul>
        </aside>
      </div>

      {/* Image Gallery Section */}
      <div className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="/image/mongar1.jpg" alt="Mongar Dzong" loading="lazy" />
          <img
            src="/image/mongar2.jpg"
            alt="Drametse Monastery"
            loading="lazy"
          />
          <img src="/image/mongar3.jpg" alt="Kuri Chhu River" loading="lazy" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Mongar;
