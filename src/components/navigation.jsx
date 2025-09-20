export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-left">
            <li>
              <a href="tel:050-1234567">
                <i className="fa fa-phone"></i>
              </a>
            </li>
            <li>
              <a href="https://wa.me/0501234567">
                <i className="fa fa-whatsapp"></i>
              </a>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-center">
            <li>
              <a href="#about" className="page-scroll">
                אודות
              </a>
            </li>
            <li>
              <a href="#shop" className="page-scroll">
                חנות
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-header navbar-right">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            GiftBox
          </a>{" "}
          <img src="/img/logo.webp" alt="logo" id="nav-logo" className="logo" />
        </div>
      </div>
    </nav>
  );
};
