"use client";

import { useState } from "react";
import { X } from "lucide-react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import "./ImageGallery.scss";

const ImageGallery = ({interior,images}:{interior: string, images: string[]}) => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // const images = [
  //   "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
  //   "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
  //   "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
  //   "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  //   "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
  //   "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&q=80",
  //   "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  //   "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  //   "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
  //   "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  //   "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  //   "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  // ];

  return (
    <>
      <div className="gallery-container">
        <BreadCrumbs title={interior} />
        {/* <SectionTitle title_1="Kitchen" /> */}
        <div className="collage-wrapper">
          {images.map((src, index) => (
            <div
              key={index}
              className="collage-item"
              onClick={() => setSelectedImage(src)}
            >
              <img src={src} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Full size" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageGallery;
