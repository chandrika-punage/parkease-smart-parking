import "./LoadDistribution.css";

const LoadDistribution = () => {
  return (
    <section className="load-section">
      <div className="load-container">

        {/* Left Content */}
        <div className="load-left">
          <h3 className="load-title">Load Distribution</h3>

          <p className="load-text">
            Enables ParkEase to handle hundreds of thousands of vehicles per day
            and provide contactless parking and digital payments for users{" "}
            <strong>at massive scale</strong>
          </p>
        </div>

        {/* Right Animation */}
        <div className="load-right">
          <div className="circle-loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

          </div>
        </div>

      </div>

      {/* Bottom Button */}
      <div className="load-bottom-btn">
        <button className="load-btn">
          Process and analyze large amounts of parking data
        </button>
      </div>
    </section>
  );
};

export default LoadDistribution;
