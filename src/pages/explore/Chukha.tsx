import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RelatedDestinations from "../../components/RelatedDestinations";

const Chukha = () => {
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <div className="intro-banner">
        <img
          src="../image/Chukha.jpg"
          className="explore-banner-image"
          alt="Chukha Valley Banner"
          loading="lazy"
        />
        <h1 className="intro-banner-title">Chukha</h1>
      </div>

      {/* Main Content Section */}
      <div className="content-container">
        <div className="main-content">
          <h2>About Chukha</h2>
          <p>
            Chukha, located in western Bhutan, is a district known for its lush
            forests, pristine rivers, and rich biodiversity. It is a hub for
            hydropower generation and offers a serene escape into nature.
          </p>

          <h3>Highlights</h3>
          <ul>
            <li>
              Visit the <strong>Chukha Hydropower Plant</strong>, one of
              Bhutan's largest power generation facilities.
            </li>
            <li>
              Explore the scenic <strong>Tala Waterfall</strong>, a hidden gem
              in the region.
            </li>
            <li>
              Discover the rich biodiversity of the{" "}
              <strong>Jigme Singye Wangchuck National Park</strong>.
            </li>
            <li>
              Enjoy the serene beauty of the <strong>Wangchhu River</strong>.
            </li>
            <li>
              Experience the vibrant <strong>Chukha Tshechu</strong>, a
              traditional festival showcasing Bhutanese culture.
            </li>
          </ul>

          <h3>How to Get There</h3>
          <p>
            Chukha is approximately a <strong>3-hour drive</strong> from Thimphu
            and a <strong>2-hour drive</strong> from Phuentsholing. The journey
            offers breathtaking views of valleys, rivers, and forests.
          </p>
        </div>

        {/* Sidebar Section */}
        <aside className="sidebar">
          <h3>Quick Facts</h3>
          <ul>
            <li>Location: Western Bhutan</li>
            <li>Altitude: 1,200 meters</li>
            <li>Main Attraction: Chukha Hydropower Plant</li>
            <li>Best Time to Visit: March to May, September to November</li>
          </ul>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35827.50279152442!2d90.4975245!3d27.4997715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e19989f8e9dfdf%3A0x25e7d6b1a1e3a06d!2sChukha%2C%20Bhutan!5e0!3m2!1sen!2s!4v1696500015678!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chukha Valley Map"
            ></iframe>
          </div>

          <h3>Related Destinations</h3>
          <RelatedDestinations currentPage="Chukha" />
        </aside>
      </div>

      {/* Image Gallery Section */}
      <div className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="/image/chukha1.jpg" alt="" loading="lazy" />
          <img src="/image/chukha2.jpg" alt="" loading="lazy" />
          <img src="/image/chukha3.jpg" alt="" loading="lazy" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Chukha;
