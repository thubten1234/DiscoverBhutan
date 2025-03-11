import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Thimphu = () => {
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <div className="intro-banner">
        <img
          src="../image/thimphu.jpg"
          className="explore-banner-image"
          alt="Thimphu Valley Banner"
          loading="lazy"
        />
        <h1 className="intro-banner-title">Thimphu</h1>
      </div>

      {/* Main Content Section */}
      <div className="content-container">
        <div className="main-content">
          <h2>About Thimphu</h2>
          <p>
            Thimphu, the vibrant capital of Bhutan, is a unique blend of modern
            and traditional lifestyles. It is known for its rich culture, iconic
            landmarks, and breathtaking natural beauty.
          </p>

          <h3>Highlights</h3>
          <ul>
            <li>
              Visit <strong>Tashichho Dzong</strong>, the seat of Bhutan's
              government.
            </li>
            <li>
              Marvel at the serene <strong>Semtokha Dzong</strong>, Bhutan's
              oldest fortress.
            </li>
            <li>
              Admire the giant <strong>Buddha Dordenma</strong> statue
              overlooking the valley.
            </li>
            <li>
              Pay homage at the <strong>Memorial Stupa</strong>.
            </li>
            <li>
              Visit <strong>Motithang Takin Preserve</strong> to see Bhutan's
              national animal.
            </li>
            <li>
              Experience the sacred <strong>Tandin Nye</strong>, a hidden gem of
              spirituality.
            </li>
            <li>
              Discover Bhutanese art at the{" "}
              <strong>National Institute of Arts & Crafts</strong>.
            </li>
            <li>
              Take in stunning views at <strong>Dochula Pass</strong> and{" "}
              <strong>Lamperi Park</strong>.
            </li>
            <li>Explore the bustling streets and markets of Thimphu.</li>
          </ul>

          <h3>How to Get There</h3>
          <p>
            Thimphu is about an hour's drive from <strong>Paro</strong>, where
            Bhutan's only international airport is located. The journey offers
            scenic views of terraced fields, villages, and mountains.
          </p>
        </div>

        {/* Sidebar Section */}
        <aside className="sidebar">
          <h3>Quick Facts</h3>
          <ul>
            <li>Location: Western Bhutan</li>
            <li>Altitude: 2,334 meters</li>
            <li>Main Attraction: Tashichho Dzong</li>
            <li>Best Time to Visit: March to May, September to November</li>
          </ul>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.5!2d89.6394924!3d27.4727925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e194916cf4e0f9%3A0x29f2e539d9b31a3f!2sThimphu%2C%20Bhutan!5e0!3m2!1sen!2s!4v1696598011234!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Thimphu Valley Map"
            ></iframe>
          </div>

          <h3>Related Destinations</h3>
          <ul>
            <li>
              <Link to="/explore/paro" onClick={() => window.scrollTo(0, 0)}>
                Paro
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
          <img src="/image/thimphu.jpg" alt="Tashichho Dzong" loading="lazy" />
          <img
            src="/image/thimphu1.jpg"
            alt="Buddha Dordenma Statue"
            loading="lazy"
          />
          <img src="/image/thimphu2.jpg" alt="Thimphu Streets" loading="lazy" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Thimphu;
