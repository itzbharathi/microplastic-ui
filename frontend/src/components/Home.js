function Home() {
  return (
    <section className="hero">
      <h1>AI-Powered Microplastic Detection</h1>
      <p>
        This system uses Artificial Intelligence to analyze microscopic water
        sample images and detect microplastics efficiently.
      </p>

      <div className="cards">
        <div className="card">
          <h3>🌍 Problem</h3>

          <p>
            Microplastics are very small and invisible to the naked eye.
            Manual detection is slow and error-prone.
          </p>
        </div>

        <div className="card">
          <h3>🤖 AI Solution</h3>
          <p>
            AI automates the detection process, improving accuracy
            and reducing human effort.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
