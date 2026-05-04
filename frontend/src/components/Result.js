function Result() {
  return (
    <section className="result-section">
      <h2 className="result-title">Detection Result</h2>

      <div className="result-images">
        <div className="image-card">
          <h4>Original Image</h4>
          <div className="image-box">Image Preview</div>
        </div>

        <div className="image-card">
          <h4>Processed Image</h4>
          <div className="image-box">Detected Microplastics</div>
        </div>
      </div>

      <div className="summary">
        <p><strong>Microplastics Detected:</strong> </p>
        <p><strong>Confidence:</strong> </p>
        <p><strong>Risk Level:</strong> </p>
      </div>
    </section>
  );
}

export default Result;
