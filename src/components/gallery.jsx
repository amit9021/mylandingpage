import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import data from "../data/data.json";

export const Gallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const galleryData = data.Gallery;
  const images = galleryData.map((item) => item.large);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>גלריה</h2>
          <p>עבודות שביצענו</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {galleryData.map(({ title, thumb, description }, index) => (
              <div
                key={index}
                onClick={() => openImageViewer(index)}
                className="col-sm-6 col-md-4 col-lg-4"
              >
                <div className="portfolio-item cursor">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                    <img src={thumb} className="img-responsive" alt={title} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
