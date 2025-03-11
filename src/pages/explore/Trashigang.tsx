import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Tashigang = () => {
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <div className="intro-banner">
        <img
          src="/image/tashigang.jpg"
          className="explore-banner-image"
          alt="Tashigang Valley Banner"
          loading="lazy"
        />
        <h1 className="intro-banner-title">Trashigang</h1>
      </div>

      {/* Main Content Section */}
      <div className="content-container">
        <div className="main-content">
          <h2>About Trashigang</h2>
          <p>
            Trashigang, located in eastern Bhutan, is the largest district in
            the country and is known for its vibrant culture, stunning
            landscapes, and historical significance. It is often referred to as
            the "Jewel of the East" and serves as a hub for trade and commerce.
          </p>

          <h3>Highlights</h3>
          <ul>
            <li>
              Visit the majestic <strong>Trashigang Dzong</strong>, a fortress
              that stands as a testament to Bhutanese architecture.
            </li>
            <li>
              Explore the sacred <strong>Gom Kora Temple</strong>, known for its
              annual religious festival.
            </li>
            <li>
              Discover the traditional weaving village of <strong>Radhi</strong>
              , famous for its intricate textiles.
            </li>
            <li>
              Experience the serene beauty of the{" "}
              <strong>Dangme Chhu River</strong>.
            </li>
            <li>
              Attend the vibrant <strong>Trashigang Tshechu</strong>, a festival
              showcasing Bhutanese culture and traditions.
            </li>
          </ul>

          <h3>How to Get There</h3>
          <p>
            Trashigang is approximately a <strong>14-hour drive</strong> from
            Thimphu and a <strong>6-hour drive</strong> from Mongar. The journey
            offers breathtaking views of valleys, rivers, and mountains.
          </p>
        </div>

        {/* Sidebar Section */}
        <aside className="sidebar">
          <h3>Quick Facts</h3>
          <ul>
            <li>Location: Eastern Bhutan</li>
            <li>Altitude: 1,100 meters</li>
            <li>Main Attraction: Tashigang Dzong</li>
            <li>Best Time to Visit: March to May, September to November</li>
          </ul>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35827.50279152442!2d90.4975245!3d27.4997715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e19989f8e9dfdf%3A0x25e7d6b1a1e3a06d!2sTashigang%2C%20Bhutan!5e0!3m2!1sen!2s!4v1696500015678!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tashigang Valley Map"
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
          <img
            src="/image/trashigang.jpg"
            alt="Tashigang Dzong"
            loading="lazy"
          />
          <img
            src="/image/tashigang1.jpg"
            alt="Gom Kora Temple"
            loading="lazy"
          />
          <img
            src="/image/trashigang2.jpg"
            alt="Radhi Village"
            loading="lazy"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Tashigang;
