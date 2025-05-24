import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RelatedDestinations from "../../components/RelatedDestinations";

const Tashiyangtse = () => {
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <div className="intro-banner">
        <img
          src="../image/Trashiyangtse.jpg"
          className="explore-banner-image"
          alt="Tashiyangtse Valley Banner"
          loading="lazy"
        />
        <h1 className="intro-banner-title">Tashiyangtse</h1>
      </div>

      {/* Main Content Section */}
      <div className="content-container">
        <div className="main-content">
          <h2>About Tashiyangtse</h2>
          <p>
            Tashiyangtse, located in eastern Bhutan, is a hidden gem known for
            its pristine natural beauty, rich cultural heritage, and vibrant
            festivals. It is a perfect destination for those seeking tranquility
            and an authentic Bhutanese experience.
          </p>

          <h3>Highlights</h3>
          <ul>
            <li>
              Visit the iconic <strong>Chorten Kora</strong>, a sacred stupa
              built in the 18th century.
            </li>
            <li>
              Explore the <strong>Bomdeling Wildlife Sanctuary</strong>, home to
              diverse flora and fauna.
            </li>
            <li>
              Discover the traditional arts and crafts at the{" "}
              <strong>Institute of Zorig Chusum</strong>.
            </li>
            <li>
              Experience the vibrant <strong>Tashiyangtse Tshechu</strong>, a
              traditional festival showcasing Bhutanese culture.
            </li>
            <li>
              Enjoy the serene beauty of the <strong>Kholongchu River</strong>.
            </li>
          </ul>

          <h3>How to Get There</h3>
          <p>
            Tashiyangtse is approximately a <strong>10-hour drive</strong> from
            Thimphu and a <strong>6-hour drive</strong> from Trashigang. The
            journey offers breathtaking views of valleys, rivers, and mountains.
          </p>
        </div>

        {/* Sidebar Section */}
        <aside className="sidebar">
          <h3>Quick Facts</h3>
          <ul>
            <li>Location: Eastern Bhutan</li>
            <li>Altitude: 1,800 meters</li>
            <li>Main Attraction: Chorten Kora</li>
            <li>Best Time to Visit: March to May, September to November</li>
          </ul>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35827.50279152442!2d90.4975245!3d27.4997715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e19989f8e9dfdf%3A0x25e7d6b1a1e3a06d!2sTashiyangtse%2C%20Bhutan!5e0!3m2!1sen!2s!4v1696500015678!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tashiyangtse Valley Map"
            ></iframe>
          </div>

          <h3>Related Destinations</h3>
          <RelatedDestinations currentPage="Trashiyangtse" />
        </aside>
      </div>

      {/* Image Gallery Section */}
      <div className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="/image/tashiyangtse1.jpg" alt="" loading="lazy" />
          <img src="/image/tashiyangtse2.jpg" alt="" loading="lazy" />
          <img src="/image/tashiyangtse3.jpg" alt="" loading="lazy" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Tashiyangtse;
