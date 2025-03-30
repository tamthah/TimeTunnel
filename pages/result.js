// /pages/result.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const router = useRouter();
  const { artist, year } = router.query;

  const [tourName, setTourName] = useState("");
  const [tourImage, setTourImage] = useState("");
  const [concerts, setConcerts] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (!artist || !year) return;

      try {
        const res = await fetch(`/api/concertData?artist=${artist}&year=${year}`);
        if (!res.ok) throw new Error("Network error");

        const data = await res.json();
        setTourName(data.tourName);
        setTourImage(data.image);
        setConcerts(data.concerts || []);
        setTopSongs(data.topSongs || []);
        setError(false);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    }

    fetchData();
  }, [artist, year]);

  return (
    <div style={{ backgroundImage: "url('/images/background.jpg')", minHeight: "100vh", color: "white", fontFamily: "'Courier New', monospace", padding: "2rem" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: "3rem", textShadow: "0 0 10px #00ffff" }}>
          {tourName || `${artist} ${year} Tour`}
        </h1>
        {tourImage && (
          <div style={{ backgroundColor: "#111", padding: "0.5rem 1rem", borderRadius: "10px", boxShadow: "0 0 8px #ff00ff" }}>
            <p>🎤 {tourImage}</p>
          </div>
        )}
      </header>

      {error && (
        <p style={{ color: "red", marginTop: "1rem" }}>❌ Failed to load data. Please try again.</p>
      )}

      <div style={{ display: "flex", marginTop: "2rem", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)", padding: "1rem", borderRadius: "1rem", border: "2px solid #00ffff" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Concerts</h2>
          <ul>
            {concerts.map((concert, i) => (
              <li key={i} style={{ marginBottom: "0.5rem" }}>
                • {concert.location} — {concert.date}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)", padding: "1rem", borderRadius: "1rem", border: "2px solid #ff00ff" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Top 5 Songs</h2>
          <ol>
            {topSongs.map((song, i) => (
              <li key={i} style={{ marginBottom: "0.5rem" }}>
                🎵 {song}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
