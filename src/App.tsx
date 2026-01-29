import ComparisonView from './components/ComparisonView';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🎵 YouTube Music Regions</h1>
        <p className="app-subtitle">Compare top 10 music videos across different regions</p>
      </header>
      <main className="app-main">
        <ComparisonView />
      </main>
    </div>
  );
}

export default App;
