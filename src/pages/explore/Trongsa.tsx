import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Trongsa = () => {
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <div className="intro-banner">
        <img
          src="../image/trongsa.jpg"
          className="explore-banner-image"
          alt="Trongsa Valley Banner"
          loading="lazy"
        />
        <h1 className="intro-banner-title">Trongsa</h1>
      </div>

      {/* Main Content Section */}
      <div className="content-container">
        <div className="main-content">
          <h2>About Trongsa</h2>
          <p>
            Trongsa, located in central Bhutan, is a historically significant
            town with breathtaking mountain views. It is home to the magnificent
            Trongsa Dzong, the largest fortress in Bhutan, which played a vital
            role in unifying the country.
          </p>

          <h3>Highlights</h3>
          <ul>
            <li>
              Visit the majestic <strong>Trongsa Dzong</strong>, a historical
              and architectural marvel.
            </li>
            <li>
              Explore the <strong>Trongsa Tower Museum</strong>, showcasing
              Bhutanese history and royal heritage.
            </li>
            <li>
              Enjoy panoramic views of the <strong>Black Mountains</strong>.
            </li>
            <li>
              Experience the annual <strong>Trongsa Tshechu festival</strong>.
            </li>
            <li>
              Discover nearby attractions such as{" "}
              <strong>Chendebji Chorten</strong> and{" "}
              <strong>Kuenga Rabten Palace</strong>.
            </li>
          </ul>

          <h3>How to Get There</h3>
          <p>
            Trongsa is about a <strong>6-hour drive</strong> from Thimphu and{" "}
            <strong>4 hours from Bumthang</strong>. The journey offers
            spectacular views of valleys, forests, and winding mountain roads.
          </p>
        </div>

        {/* Sidebar Section */}
        <aside className="sidebar">
          <h3>Quick Facts</h3>
          <ul>
            <li>Location: Central Bhutan</li>
            <li>Altitude: 2,200 meters</li>
            <li>Main Attraction: Trongsa Dzong</li>
            <li>Best Time to Visit: March to May, September to November</li>
          </ul>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35827.50279152442!2d90.4975245!3d27.4997715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e19989f8e9dfdf%3A0x25e7d6b1a1e3a06d!2sTrongsa%2C%20Bhutan!5e0!3m2!1sen!2s!4v1696500015678!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Trongsa Valley Map"
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
              <Link
                to="/explore/bumthang"
                onClick={() => window.scrollTo(0, 0)}
              >
                Bumthang
              </Link>
            </li>
            <li>
              <Link to="/explore/thimphu" onClick={() => window.scrollTo(0, 0)}>
                Thimphu
              </Link>
            </li>
          </ul>
        </aside>
      </div>

      {/* Image Gallery Section */}
      <div className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="/image/trongsa.jpeg" alt="Trongsa Dzong" loading="lazy" />
          <img src="/image/trongsa1.jpeg" alt="Trongsa Valley" loading="lazy" />
          <img
            src="/image/trongsa2.jpeg"
            alt="Trongsa Tshechu Festival"
            loading="lazy"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Trongsa;
