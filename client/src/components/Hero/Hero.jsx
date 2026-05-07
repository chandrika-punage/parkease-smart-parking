import "./hero.css";


const Hero = () => {
  return (
    <>
      {/* APP PROMOTION SECTION */}
      <section className="app-section">
        <div className="hero-container app-flex">

          {/* LEFT SIDE IMAGE */}
          <div className="app-left">
            <img
              src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/final-app-ui-1.gif?fit=1080%2C880&ssl=1"
              alt="ValetEZ app"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="app-right">
            <h2>
              Think of Parking? Think of <span className="highlight">ParkEase</span>
            </h2>

            <p>
              Tired of feeling like a lost driver in a maze with no end?
              ParkEase is your parking solution! With our app, you can pre-book
              your parking spot and save time and energy. Give us a try and
              say goodbye to parking headaches!
            </p>

            <button onClick={() => window.open("https://valetez.app", "_blank")} className="btn primary-btn">
              Find Parking →
            </button>
          </div>

        </div>
      </section>


      {/* IMAGE GRID SECTION */}
      <section className="gallery-section">
        <div className="hero-container gallery-grid">

          <div className="gallery-item">
            <img
              src="/savings.jpg"
              alt="Big Savings On Parking"
            />
          </div>

          <div className="gallery-item">
            <img
              src="/contactless.png"
              alt="Contactless Payment"
            />
          </div>

          <div className="gallery-item">
            <img
              src="/carefree.png"
              alt="Park Carefree With ValetEZ"
            />
          </div>

        </div>
      </section>


      {/* VALET SERVICE SECTION */}
      <section className="valet-section">
        <div className="hero-container valet-flex">

          {/* LEFT SIDE */}
          <div className="valet-left">
            <h2>ParkEase Services & Drivers</h2>

            <p>
              Experience true smart parking with Valet service. Whether you
              need short-term or long-term parking, pre-book your spot and
              enjoy a seamless and contactless parking experience.
            </p>

            <img
              src="/one.png"
              alt="Valet parking service"
              className="valet-main-img"
            />

            <h5 className="valet-subtitle">
              Park your car with ease and convenience with ParkEase
            </h5>
          </div>

          {/* RIGHT SIDE */}
          <div className="valet-right">

            <div className="feature-box">
              <img src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/Untitled-design-24.png?fit=150%2C150&ssl=1" alt="Book Online" />
              <div>
                <h3>Book Online</h3>
                <p>Just book a Valet online or scan a QR code at the location</p>
              </div>
            </div>

            <div className="feature-box">
              <img src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/32.png?fit=150%2C150&ssl=1" alt="Park Smart" />
              <div>
                <h3>Park Smart</h3>
                <p>Get real-time updates and notifications on your parking status</p>
              </div>
            </div>

            <div className="feature-box">
              <img src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/43.png?fit=150%2C150&ssl=1" alt="Park Secure" />
              <div>
                <h3>Park Secure</h3>
                <p>No more worrying about the safety and security of your car</p>
              </div>
            </div>

            <div className="feature-box">
              <img src="https://i0.wp.com/valetez.com/wp-content/uploads/2023/06/14.png?fit=150%2C150&ssl=1" alt="Vehicle Recall" />
              <div>
                <h3>Vehicle Recall</h3>
                <p>Recall over EZ app and track time to return</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </>
  );
};

export default Hero;
