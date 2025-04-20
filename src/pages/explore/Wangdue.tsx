import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Wangdue = () => {
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <div className="intro-banner">
        <img
          src="../image/Wangdue.jpg"
          className="explore-banner-image"
          alt="Wangdi Valley Banner"
          loading="lazy"
        />
        <h1 className="intro-banner-title">Wangdue</h1>
      </div>

      {/* Main Content Section */}
      <div className="content-container">
        <div className="main-content">
          <h2>About Wangdue Phodrang</h2>
          <p>
            Wangdi, also known as Wangdue Phodrang, is a serene district in
            Bhutan known for its lush valleys, historic fortresses, and rich
            cultural heritage. It is a perfect destination for those seeking
            tranquility and a deeper connection with Bhutanese traditions.
          </p>

          <h3>Highlights</h3>
          <ul>
            <li>
              Visit the majestic <strong>Wangdue Phodrang Dzong</strong>, a
              historic fortress with stunning architecture.
            </li>
            <li>
              Explore the scenic <strong>Phobjikha Valley</strong>, home to the
              endangered black-necked cranes.
            </li>
            <li>
              Discover the spiritual significance of{" "}
              <strong>Gangtey Monastery</strong>.
            </li>
            <li>
              Enjoy panoramic views from <strong>Dochula Pass</strong>.
            </li>
            <li>
              Experience the vibrant <strong>Wangdue Phodrang Tshechu</strong>,
              a traditional festival showcasing Bhutanese culture.
            </li>
          </ul>

          <h3>How to Get There</h3>
          <p>
            Wangdi is approximately a <strong>3-hour drive</strong> from Thimphu
            and a <strong>2-hour drive</strong> from Punakha. The journey offers
            breathtaking views of valleys, rivers, and mountains.
          </p>
        </div>

        {/* Sidebar Section */}
        <aside className="sidebar">
          <h3>Quick Facts</h3>
          <ul>
            <li>Location: Central Bhutan</li>
            <li>Altitude: 1,300 meters</li>
            <li>Main Attraction: Wangdue Phodrang Dzong</li>
            <li>Best Time to Visit: March to May, September to November</li>
          </ul>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35827.50279152442!2d90.4975245!3d27.4997715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e19989f8e9dfdf%3A0x25e7d6b1a1e3a06d!2sWangdue%20Phodrang%2C%20Bhutan!5e0!3m2!1sen!2s!4v1696500015678!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wangdi Valley Map"
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
            src="/image/wangdue1.jpg"
            alt="Wangdue Phodrang Dzong"
            loading="lazy"
          />
          <img
            src="/image/wangdue2.jpg"
            alt="Phobjikha Valley"
            loading="lazy"
          />
          <img
            src="/image/wangdue3.jpg"
            alt="Gangtey Monastery"
            loading="lazy"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wangdue;
