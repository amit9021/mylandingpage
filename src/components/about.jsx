export const About = (props) => {
  return (
    <div id="about" className="compact-about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <img
              src="img/heroimg/02.jpeg"
              className="img-responsive about-image"
              alt="GiftBox"
            />
          </div>
          <div className="col-xs-12 col-md-8">
            <div className="about-text">
              <h2>אודות GiftBox</h2>
              <p className="about-description">
                {props.data ? props.data.paragraph : "loading..."}
              </p>
              <div className="features-grid">
                <div className="feature-item">
                  <i className="fa fa-gift"></i>
                  <span>עיצוב ייחודי ומותאם אישית</span>
                </div>
                <div className="feature-item">
                  <i className="fa fa-star"></i>
                  <span>איכות גבוהה וחומרים מעולים</span>
                </div>
                <div className="feature-item">
                  <i className="fa fa-truck"></i>
                  <span>משלוח מהיר ובטוח</span>
                </div>
                <div className="feature-item">
                  <i className="fa fa-shield"></i>
                  <span>אחריות מלאה על המוצרים</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
