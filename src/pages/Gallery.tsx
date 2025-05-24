import { SetStateAction, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/1.jpg",
    alt: "",
    category: "festival",
  },
  {
    id: 2,
    src: "/gallery/2.jpeg",
    alt: "",
    category: "landscape",
  },
  {
    id: 3,
    src: "/gallery/3.jpeg",
    alt: "",
    category: "festival",
  },
  {
    id: 4,
    src: "/gallery/4.jpeg",
    alt: "",
    category: "festival",
  },
  {
    id: 5,
    src: "/gallery/5.jpeg",
    alt: "",
    category: "landscape",
  },
  {
    id: 6,
    src: "/gallery/6.jpeg",
    alt: "",
    category: "landscape",
  },
  {
    id: 7,
    src: "/gallery/7.jpeg",
    alt: "",
    category: "landscape",
  },
  {
    id: 8,
    src: "/gallery/8.jpeg",
    alt: "",
    category: "landscape",
  },
  {
    id: 9,
    src: "/gallery/9.jpeg",
    alt: " ",
    category: "adventure",
  },
  {
    id: 10,
    src: "/gallery/10.jpeg",
    alt: "",
    category: "culture",
  },
  {
    id: 11,
    src: "/gallery/11.jpeg",
    alt: " ",
    category: "adventure",
  },
  {
    id: 12,
    src: "/gallery/12.jpeg",
    alt: "",
    category: "culture",
  },
  {
    id: 13,
    src: "/gallery/13.jpeg",
    alt: "",
    category: "culture",
  },
  {
    id: 14,
    src: "/gallery/14.jpeg",
    alt: "",
    category: "adventure",
  },
  {
    id: 15,
    src: "/gallery/16.jpg",
    alt: "",
    category: "adventure",
  },
  {
    id: 16,
    src: "/gallery/17.jpg",
    alt: "",
    category: "culture",
  },
  {
    id: 17,
    src: "/gallery/18.jpg",
    alt: "",
    category: "landscape",
  },
  {
    id: 18,
    src: "/gallery/19.jpg",
    alt: "",
    category: "adventure",
  },
  {
    id: 19,
    src: "/gallery/20.jpg",
    alt: "",
    category: "landscape",
  },
  {
    id: 20,
    src: "/gallery/21.jpg",
    alt: "",
    category: "culture",
  },
  {
    id: 21,
    src: "/gallery/22.jpg",
    alt: "",
    category: "festival",
  },
  {
    id: 22,
    src: "/gallery/23.jpg",
    alt: "",
    category: "festival",
  },
  {
    id: 23,
    src: "/gallery/24.jpg",
    alt: "",
    category: "festival",
  },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter images by category
  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: SetStateAction<number>) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: string) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    } else {
      newIndex = (currentImageIndex + 1) % filteredImages.length;
    }
    setCurrentImageIndex(newIndex);
  };

  // Unique categories for filter buttons
  const categories = [
    "all",
    ...new Set(galleryImages.map((img) => img.category)),
  ];

  return (
    <>
      <div className="intro-banner">
        <img
          src="./image/Banner.webp"
          className="img-fluid intro-banner-image"
          alt="intro-banner"
        />
        <h1 className="intro-banner-title">GALLERY</h1>
      </div>
      <Head>
        <title>Discover Bhutan - Photo Gallery</title>
        <meta
          name="description"
          content="Explore beautiful photos of Bhutan's landscapes, culture, and adventures"
        />
      </Head>

      <Navbar />

      <main className="gallery-page">
        <div className="gallery-hero">
          <h1>Bhutan Through the Lens</h1>
          <p>Discover the breathtaking beauty of the Himalayan kingdom</p>
        </div>

        {/* Category Filters */}
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "active" : ""}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="gallery-grid-main">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item-main"
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="image-overlay1">
                <span>{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="lightbox">
            <div className="lightbox-content">
              <button className="close-btn" onClick={closeLightbox}>
                &times;
              </button>
              <button
                className="nav-btn prev"
                onClick={() => navigateImage("prev")}
              >
                &lt;
              </button>

              <img
                src={filteredImages[currentImageIndex].src}
                alt={filteredImages[currentImageIndex].alt}
              />

              <button
                className="nav-btn next"
                onClick={() => navigateImage("next")}
              >
                &gt;
              </button>
              <div className="image-caption">
                {filteredImages[currentImageIndex].alt}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
