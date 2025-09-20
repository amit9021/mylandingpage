// ShopWidget.jsx
import { useMemo, useState } from "react";

export const ShopWidget = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  // גלריית מוצרים - קופסאות מתנה
  const products = [
    {
      id: 1,
      title: "קופסת מתנה יוקרה - זהב",
      description:
        "קופסת מתנה מעוצבת בצבע זהב עם סרט אלגנטי, מושלמת למתנות יקרות ואירועים מיוחדים.",
      price: "₪89",
      image: "img/shop/01.jpeg",
      paymentUrl: "https://pay.sumit.co.il/htu7xi/hwrikz/hwrins/payment/",
    },
    {
      id: 2,
      title: "חבילת מתנה רומנטית",
      description:
        "חבילה מעוצבת עם שוקולדים, פרחים ופתק אישי - מושלמת לזוגות ולחגיגות אהבה.",
      price: "₪149",
      image: "img/shop/02.jpeg",
      paymentUrl: "https://pay.sumit.co.il/htu7xi/hwrikz/hwrins/payment/",
    },
    {
      id: 3,
      title: "קופסת מתנה ליום הולדת",
      description:
        "קופסה צבעונית ומעוצבת עם בלונים וקישוטים, מושלמת לחגיגות יום הולדת.",
      price: "₪79",
      image: "img/shop/03.jpeg",
      paymentUrl: "https://pay.sumit.co.il/htu7xi/hwrikz/hwrins/payment/",
    },
  ];

  const openPaymentModal = (product) => {
    setSelectedProduct(product);
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setSelectedProduct(null);
  };

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex(
      (prev) => (prev - 1 + products.length) % products.length
    );
  };

  const goToProduct = (index) => {
    setCurrentProductIndex(index);
  };

  return (
    <>
      <div id="shop" className="max-w-6xl mx-auto p-4">
        {/* כותרת הגלריה */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            קופסאות מתנה מעוצבות
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            גלו את המגוון הרחב של קופסאות המתנה המעוצבות שלנו - מושלמות לכל
            אירוע מיוחד
          </p>
        </header>

        <div className="product-carousel">
          <div className="carousel-container">
            {/* כפתורי ניווט */}
            <button
              className="carousel-nav prev"
              onClick={prevProduct}
              aria-label="מוצר קודם"
            >
              ‹
            </button>

            <button
              className="carousel-nav next"
              onClick={nextProduct}
              aria-label="מוצר הבא"
            >
              ›
            </button>

            {/* מוצר נוכחי */}
            <div className="current-product">
              <div className="product-card">
                <div className="product-image">
                  <img
                    src={products[currentProductIndex].image}
                    alt={products[currentProductIndex].title}
                    className="product-img"
                  />
                  <div className="product-overlay">
                    <button
                      onClick={() =>
                        openPaymentModal(products[currentProductIndex])
                      }
                      className="btn-custom"
                      style={{
                        fontSize: "16px",
                        padding: "12px 30px",
                      }}
                    >
                      קנה עכשיו
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="text-xl font-bold mb-2">
                    {products[currentProductIndex].title}
                  </h3>
                  <p className="text-sm opacity-80 mb-3">
                    {products[currentProductIndex].description}
                  </p>
                  <div className="text-2xl font-bold text-center">
                    {products[currentProductIndex].price}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* נקודות ניווט */}
          <div className="carousel-dots">
            {products.map((_, index) => (
              <button
                key={index}
                className={`dot ${
                  index === currentProductIndex ? "active" : ""
                }`}
                onClick={() => goToProduct(index)}
                aria-label={`עבור למוצר ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* FAQ קצר + הבטחת אבטחה */}
        <details className="rounded-lg border p-4 mt-8">
          <summary className="cursor-pointer font-medium">איך זה עובד?</summary>
          <ol className="list-decimal ms-5 mt-2 space-y-1">
            <li>בוחרים קופסת מתנה מהגלריה ולוחצים על "קנה עכשיו".</li>
            <li>מופיע חלון תשלום מאובטח עם פרטי המוצר.</li>
            <li>ממלאים פרטים ולוחצים "תשלום" בתוך הטופס.</li>
            <li>המערכת מחברת אוטומטית ל־Smoove (התחלת רכישה/השלמה).</li>
            <li>בסיום תקבלו מייל עם פרטי המשלוח והמעקב.</li>
          </ol>
        </details>
      </div>

      {/* מודל תשלום */}
      {showPaymentModal && selectedProduct && (
        <div className="payment-modal-overlay" onClick={closePaymentModal}>
          <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
            <div className="payment-modal-header">
              <div>
                <h2>תשלום מאובטח</h2>
                <p className="text-sm opacity-90">{selectedProduct.title}</p>
              </div>
              <button
                className="close-button"
                onClick={closePaymentModal}
                aria-label="סגור חלון תשלום"
              >
                ×
              </button>
            </div>
            <div className="payment-modal-content">
              <iframe
                title="Grow Checkout"
                src={selectedProduct.paymentUrl}
                className="payment-iframe"
                allow="payment"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
