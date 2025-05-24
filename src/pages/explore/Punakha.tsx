import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RelatedDestinations from "../../components/RelatedDestinations";

const Punakha = () => {
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <div className="intro-banner">
        <img
          src="../image/punakha.jpg"
          className="explore-banner-image"
          alt="Punakha Valley Banner"
          loading="lazy"
        />
        <h1 className="intro-banner-title">Punakha</h1>
      </div>

      {/* Main Content Section */}
      <div className="content-container">
        <div className="main-content">
          <h2>About Punakha</h2>
          <p>
            Punakha, a charming valley in Bhutan, is renowned for its
            breathtaking landscapes, historic monasteries, and serene rivers. As
            the former capital of Bhutan, it holds great historical and cultural
            significance.
          </p>

          <h3>Highlights</h3>
          <ul>
            <li>
              Visit the majestic <strong>Punakha Dzong</strong>, one of Bhutan's
              most iconic structures.
            </li>
            <li>
              Take a peaceful stroll along the <strong>Pho Chhu</strong> and{" "}
              <strong>Mo Chhu</strong> rivers.
            </li>
            <li>
              Marvel at the panoramic views from <strong>Dochula Pass</strong>.
            </li>
            <li>
              Experience the vibrant <strong>Punakha Tshechu festival</strong>.
            </li>
            <li>
              Explore cultural landmarks like <strong>Chimi Lhakhang</strong>,{" "}
              <strong>Khamsum Yulley Namgyal Stupa</strong>,{" "}
              <strong>Talo Monastery</strong>, and{" "}
              <strong>Nalanda Monastery</strong>.
            </li>
          </ul>

          <h3>How to Get There</h3>
          <p>
            Punakha is approximately a <strong>2.5-hour drive</strong> from
            Thimphu, the capital of Bhutan. The journey offers scenic views of
            lush valleys and mountains, with a stopover at the beautiful{" "}
            <strong>Dochula Pass</strong>.
          </p>
        </div>

        {/* Sidebar Section */}
        <aside className="sidebar">
          <h3>Quick Facts</h3>
          <ul>
            <li>Location: Western Bhutan</li>
            <li>Altitude: 1,200 meters</li>
            <li>Main Attraction: Punakha Dzong</li>
            <li>Best Time to Visit: March to May, September to November</li>
          </ul>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56606.84406111495!2d89.852933!3d27.5983902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e1932a1c4d9b79%3A0xf0a83da92f42c94e!2sPunakha%2C%20Bhutan!5e0!3m2!1sen!2s!4v1696498011234!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Punakha Valley Map"
            ></iframe>
          </div>

          <h3>Related Destinations</h3>
          <RelatedDestinations currentPage="Punakha" />
        </aside>
      </div>

      {/* Image Gallery Section */}
      <div className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="/image/punakha.jpg" alt="Punakha Dzong" loading="lazy" />
          <img src="/image/punakha1.jpg" alt="Punakha Valley" loading="lazy" />
          <img
            src="/image/punakha2.jpg"
            alt="Punakha Tshechu Festival"
            loading="lazy"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Punakha;
