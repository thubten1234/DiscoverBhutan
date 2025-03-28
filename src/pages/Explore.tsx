import { useState } from "react";
import "../components/Services.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Explore = () => {
  const items = [
    {
      title: "Punakha",
      description: "Discover the beauty of Punakha.",
      link: "/explore/punakha",
      image: "./image/punakha.webp",
    },
    {
      title: "Thimphu",
      description: "",
      link: "/explore/thimphu",
      image: "./image/thimphu.webp",
    },
    {
      title: "Paro",
      description: "",
      link: "/explore/paro",
      image: "./image/paro.webp",
    },
    {
      title: "Bumthang",
      description: "",
      link: "/explore/bumthang",
      image: "./image/bumthang.webp",
    },
    {
      title: "Wangdue Phodrang",
      description: "",
      link: "/explore/wangdue",
      image: "./image/wangdue.webp",
    },
    {
      title: "Chukha",
      description: "",
      link: "/explore/chukha",
      image: "./image/chukha.webp",
    },
    {
      title: "Trongsa",
      description: "",
      link: "/explore/trongsa",
      image: "./image/trongsa.webp",
    },

    {
      title: "Trashiyangtse",
      description: "",
      link: "/explore/tashiyangtse",
      image: "./image/tashiyangtse.webp",
    },
    {
      title: "Mongar",
      description: "",
      link: "/explore/mongar",
      image: "./image/mongar.webp",
    },
    {
      title: "Trashigang",
      description: "",
      link: "/explore/trashigang",
      image: "./image/Tashigang.webp",
    },
  ];

  const itemsPerPage = 6; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get the items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination handlers
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <>
      <Navbar />
      <div className="intro-banner">
        <img
          src="./image/Banner.webp"
          className="img-fluid intro-banner-image"
          alt="intro-banner"
        />
        <h1 className="intro-banner-title">EXPLORE</h1>
      </div>

      <div className="image-grid-container">
        {currentItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="image-grid-item"
            aria-label={item.title}
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={item.image} alt={item.title} className="grid-image" />
            <div className="image-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Explore;
