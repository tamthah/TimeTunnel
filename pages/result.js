import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const router = useRouter();
  const { artist, year } = router.query;
  const [setlists, setSetlists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!artist || !year) return;

    const fetchSetlists = async () => {
      try {
        const res = await fetch(`/api/setlist?artist=${artist}&year=${year}`);
        const data = await res.json();
        setSetlists(data.setlist || []);
      } catch (err) {
        console.error("Failed to fetch:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSetlists();
  }, [artist, year]);

  // Top 3 songs logic
  const getTopSongs = () => {
    const songCount = {};
    setlists.forEach((set) => {
      const songs = set.sets?.set?.[0]?.song || [];
      songs.forEach((song) => {
        if (song.name) {
          songCount[song.name] = (songCount[song.name] || 0) + 1;
        }
      });
    });

    return Object.entries(songCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([song]) => song);
  };

  const topSongs = getTopSongs();

  return (
    <div style={{
      minHeight: "100vh",
      background: "url('/images/background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      fontFamily: "'Courier New', Courier, monospace",
      padding: "2rem"
    }}>
      {/* Tour Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: "1.5rem",
        borderRadius: "1rem",
        marginBottom: "2rem"
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          textShadow: "0 0 10px #00ffff"
        }}>
          {artist?.toUpperCase()} {year} Tour
        </h1>
        <img
          src="/images/logo.jpg"
          alt="Mic Logo"
          style={{ width: "80px", borderRadius: "10px", boxShadow: "0 0 15px #ff00ff" }}
        />
      </div>

      {/* Main Layout */}
      {loading ? (
        <p style={{ fontSize: "1.2rem" }}>Loading setlists...</p>
      ) : (
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {/* Left: Concert List */}
          <div style={{
            flex: "1",
            minWidth: "280px",
            maxHeight: "500px",
            overflowY: "scroll",
            backgroundColor: "rgba(0,0,0,0.4)",
            padding: "1rem",
            borderRadius: "1rem",
            boxShadow: "0 0 8px #00ffff"
          }}>
            <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>Concerts</h2>
            {setlists.length === 0 ? (
              <p>No concerts found.</p>
            ) : (
              <ul style={{ listStyle: "none", padding: 0 }}>
                {setlists.map((s, i) => (
                  <li key={i} style={{
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "1px dashed #888"
                  }}>
                    <strong>{s.venue?.name}</strong><br />
                    <span>{s.venue?.city?.name}, {s.venue?.city?.country?.name}</span><br />
                    <em>{s.eventDate}</em>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right: Top Songs */}
          <div style={{
            flex: "2",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem"
          }}>
            <h2 style={{ fontSize: "1.6rem" }}>Top 3 Tracklists</h2>
            <div style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap"
            }}>
              {topSongs.map((song, i) => (
                <div key={i} style={{
                  flex: "1",
                  minWidth: "150px",
                  height: "150px",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "1rem",
                  fontSize: "1.1rem",
                  boxShadow: "0 0 8px #00ffff",
                  textAlign: "center",
                  padding: "1rem"
                }}>
                  🎵 {song}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

