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
          position: "sticky",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          background: "#8DD815",
          color: "black",
          textDecoration: "none",
        }}
      >
        <p>
          Built with 💝 by{" "}
          <a
            href="https://gravatar.com/miracletimothy?utm_source=hovercard"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "900",
            }}
          >
            Miracle Timothy
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
