import { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";

export const Header = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images to rotate through
  const backgroundImages = [
    "img/heroimg/01.jpeg",
    "img/heroimg/02.jpeg",
    "img/heroimg/03.jpeg",
  ];

  // Rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <header id="header">
      {/* Contact Bar */}
      <div className="contact-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-info">
                <a href="tel:050-1234567" className="contact-link">
                  <i className="fa fa-phone"></i> 050-1234567
                </a>
                <a
                  href="https://wa.me/0501234567"
                  className="contact-link whatsapp"
                >
                  <i className="fa fa-whatsapp"></i> WhatsApp
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="brand-name">
                <h3>GiftBox</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="intro compact rotating-bg"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      >
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#shop" className="btn btn-custom btn-lg page-scroll">
                  צפה במוצרים
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
