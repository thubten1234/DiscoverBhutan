import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Bumthang = () => {
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <div className="intro-banner">
        <img
          src="../image/bumthang.jpg"
          className="explore-banner-image"
          alt="Bumthang Valley Banner"
          loading="lazy"
        />
        <h1 className="intro-banner-title">Bumthang</h1>
      </div>

      {/* Main Content Section */}
      <div className="content-container">
        <div className="main-content">
          <h2>About Bumthang</h2>
          <p>
            Bumthang, known as the spiritual heartland of Bhutan, is home to
            some of the country's oldest temples, monasteries, and legends. Its
            beautiful valleys and cultural landmarks make it an essential
            destination for visitors seeking tranquility and history.
          </p>

          <h3>Highlights</h3>
          <ul>
            <li>
              Visit sacred sites such as <strong>Jakar Dzong</strong>,{" "}
              <strong>Kurje Monastery</strong>,{" "}
              <strong>Tamzhing Monastery</strong>, and{" "}
              <strong>Jambay Monastery</strong>.
            </li>
            <li>
              Explore the mystical <strong>Burning Lake</strong>, steeped in
              local folklore.
            </li>
            <li>
              Discover Bhutanese heritage at the{" "}
              <strong>Ugyen Choling Heritage Museum</strong>.
            </li>
            <li>
              Experience the vibrant colors and culture of the{" "}
              <strong>Jambay Lhakhang Drup festival</strong>.
            </li>
          </ul>

          <h3>How to Get There</h3>
          <p>
            Bumthang is accessible via domestic flights to{" "}
            <strong>Bathpalathang Airport</strong> or a long yet scenic road
            journey from <strong>Thimphu</strong> or <strong>Paro</strong>. The
            journey offers stunning views of the Himalayas and lush valleys.
          </p>
        </div>

        {/* Sidebar Section */}
        <aside className="sidebar">
          <h3>Quick Facts</h3>
          <ul>
            <li>Location: Central Bhutan</li>
            <li>Altitude: 2,600–4,000 meters</li>
            <li>Main Attraction: Jakar Dzong</li>
            <li>Best Time to Visit: March to May, September to November</li>
          </ul>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44554.88156673134!2d90.7167982!3d27.5540511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e1e8d16ae49e3f%3A0x6c4e9c71a39362b2!2sBumthang%2C%20Bhutan!5e0!3m2!1sen!2s!4v1696498034567!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bumthang Valley Map"
            ></iframe>
          </div>

          <h3>Related Destinations</h3>
          <ul>
            <li>
              <Link to="/explore/punakha" onClick={() => window.scrollTo(0, 0)}>
                Punakha
              </Link>
            </li>
            <li>
              <Link to="/explore/thimphu" onClick={() => window.scrollTo(0, 0)}>
                Thimphu
              </Link>
            </li>
            <li>
              <Link to="/explore/paro" onClick={() => window.scrollTo(0, 0)}>
                Paro
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
            src="/image/bumthang.jpg"
            alt="Bumthang Valley Landscape"
            loading="lazy"
          />
          <img
            src="/image/bumthang1.jpeg"
            alt="Bumthang Monasteries"
            loading="lazy"
          />
          <img
            src="/image/bumthang2.jpeg"
            alt="Bumthang Festivals"
            loading="lazy"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Bumthang;
