import "./features.css";

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Why Choose ValetEZ?</h2>

      <div className="feature-grid">
        <div className="card">
          <h3>Real-Time Parking</h3>
          <p>Live slot availability & smart navigation.</p>
        </div>

        <div className="card">
          <h3>AI Dynamic Pricing</h3>
          <p>Optimized pricing based on demand & usage.</p>
        </div>

        <div className="card">
          <h3>Contactless Entry</h3>
          <p>FASTag, QR & ANPR integration.</p>
        </div>

        <div className="card">
          <h3>Valet Services</h3>
          <p>Track & recall vehicle in real-time.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;