import { useState } from "react";

function Upload() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDetect = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/detect", {
        method: "POST"
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      alert("Backend connection failed");
    }

    setLoading(false);
  };

  return (
    <section className="upload">
      <h2>Upload Water Sample Image</h2>

      <div className="upload-box">
        <p>Drag & Drop Image Here</p>
        <p>or</p>
        <input type="file" />
      </div>

      <button className="detect-btn" onClick={handleDetect}>
        {loading ? "AI Processing..." : "Start AI Detection"}
      </button>

      {result && (
        <div className="summary">
          <p><strong>Microplastics Detected:</strong> {result.microplastics_detected}</p>
          <p><strong>Confidence:</strong> {result.confidence}</p>
          <p><strong>Risk Level:</strong> {result.risk_level}</p>
        </div>
      )}
    </section>
  );
}

export default Upload;
