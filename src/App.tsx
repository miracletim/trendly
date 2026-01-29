import ComparisonView from "./components/ComparisonView";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🎵 YouTube Music Regions</h1>
        <p className="app-subtitle">
          Compare top 10 music videos across different regions
        </p>
      </header>
      <main className="app-main">
        <ComparisonView />
      </main>
      <footer
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          background: "rgba(255, 255, 255, 0.03)",
        }}
      >
        <p>
          Built with 💝 by{" "}
          <a
            href="https://gravatar.com/miracletimothy?utm_source=hovercard"
            target="_blank"
          >
            Miracle Timothy
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
