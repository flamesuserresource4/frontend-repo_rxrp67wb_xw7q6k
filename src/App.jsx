import Hero from "./components/Hero";
import MetaDashboard from "./components/MetaDashboard";
import TipsAndCounters from "./components/TipsAndCounters";
import VideoAnalyzer from "./components/VideoAnalyzer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <MetaDashboard />
      <TipsAndCounters />
      <VideoAnalyzer />
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-500">
          Built for Clash Royale players who want to improve fast. Not affiliated with Supercell.
        </div>
      </footer>
    </div>
  );
}

export default App;
