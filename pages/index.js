import { useState } from "react";

export default function Home() {
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const [setlists, setSetlists] = useState([]);
  const [loading, setLoading] = useState(false);
  const genres = [
    { name: "Pop", image: "/images/pop.jpg" },
    { name: "Rock", image: "/images/rock.jpg" },
    { name: "Latin", image: "/images/latin.jpg" },
    { name: "HipHop", image: "/images/hiphop.jpg" },
    { name: "R&B", image: "/images/rnb.jpg" },
    { name: "Country", image: "/images/country.jpg" }
  ];

  const navLinkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "1.2rem",
    textShadow: "0 0 6px #00ffff",
    transition: "color 0.3s",
    padding: "0.75rem 1.25rem"
  };

  const fetchSetlists = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/setlist?artist=${artist}&year=${year}`);
      const data = await response.json();
      setSetlists(data.setlists || []);
    } catch (error) {
      console.error("Error fetching setlists:", error);
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundImage: "url('/images/background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "#fdfdfd",
      fontFamily: "'Courier New', Courier, monospace",
      textAlign: "center",
      position: "relative",
      paddingTop: "5.5rem"
    }}>
      {/* Top Navigation Bar */}
      <nav style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "1rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        zIndex: 999
      }}>
        <div style={{ color: "#1e3a8a", fontWeight: "bold", fontSize: "2rem", textShadow: "0 0 5px #1e3a8a" }}>
          TimeTunnel
        </div>
        <div style={{ display: "flex", gap: "3rem", paddingRight: "7rem" }}>
          <a href="#" style={navLinkStyle}>Home</a>
          <a href="#about" style={navLinkStyle}>About</a>
          <a href="#genres" style={navLinkStyle}>Genres</a>
          <a href="#contact" style={navLinkStyle}>Contact</a>
        </div>
      </nav>

      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "3rem 1rem 1rem",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        <img
          src="/images/logo.jpg"
          alt="TimeTunnel Logo"
          style={{
            width: "130px",
            marginBottom: "1rem",
            borderRadius: "12px",
            boxShadow: "0 0 20px #ff00ff"
          }}
        />

        <h1 style={{
          fontSize: "4rem",
          fontWeight: "bold",
          marginBottom: "0.1rem",
          color: "#1e3a8a",
          textShadow: "0 0 10px #1e3a8a, 0 0 20px #1e3a8a"
        }}>
          TimeTunnel
        </h1>

        <p style={{ fontSize: "1.3rem", marginBottom: "2.5rem", color: "#eeeeee" }}>
          Explore real concert setlists from your favorite artists.
        </p>

        {/* Search Bar */}
        <div style={{
          display: "flex",
          gap: "1.4rem",
          marginBottom: "1.8rem",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          <input
            type="text"
            placeholder="Artist name (e.g. Queen)"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            style={{
              padding: "1rem 1.3rem",
              borderRadius: "6px",
              border: "1px solid #555",
              backgroundColor: "#111",
              color: "#fff",
              fontSize: "1.1rem",
              width: "300px"
            }}
          />
          <input
            type="text"
            placeholder="Year (e.g. 1986)"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={{
              padding: "1rem 1.3rem",
              borderRadius: "6px",
              border: "1px solid #555",
              backgroundColor: "#111",
              color: "#fff",
              fontSize: "1.1rem",
              width: "200px"
            }}
          />
          <button
            onClick={fetchSetlists}
            style={{
              padding: "1rem 2rem",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#00ffff",
              color: "#000",
              fontWeight: "bold",
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 0 10px #00ffff"
            }}
          >
            Search
          </button>
        </div>

        {/* Genre Buttons with Images */}
        <div id="genres" style={{
          display: "flex",
          gap: "2.7rem",
          marginTop: "1rem",
          marginBottom: "4rem",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          {genres.map((genre) => (
            <div key={genre.name} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "5px solid #1e3a8a",
                boxShadow: "0 0 12px #1e3a8a",
                marginBottom: "0.7rem"
              }}>
                <img src={genre.image} alt={genre.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span style={{
                color: "#fff",
                fontSize: "1.05rem",
                textShadow: "0 0 4px #1e3a8a"
              }}>{genre.name}</span>
            </div>
          ))}
        </div>

        {/* Setlist Results */}
        {loading && <p style={{ color: "#999" }}>Loading setlists...</p>}

        <ul style={{
          maxWidth: "600px",
          textAlign: "left",
          listStyle: "none",
          padding: 0
        }}>
          {setlists.map((s, i) => (
            <li key={i} style={{
              marginBottom: "1.5rem",
              borderBottom: "1px dashed #444",
              paddingBottom: "1rem"
            }}>
              <strong style={{ color: "#00ffff" }}>{s.eventDate}</strong> — {s.venue?.name}, {s.venue?.city?.name}
              <ul style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
                {s.sets?.set?.[0]?.song?.map((song, idx) => (
                  <li key={idx} style={{ color: "#ccc" }}>🎵 {song.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>

      {/* Sections */}
      <section id="about" style={{ padding: "6rem 2rem 4rem", color: "#fff" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem", textShadow: "0 0 6px #ff00ff" }}>About TimeTunnel</h2>
        <p style={{ fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
          TimeTunnel is your nostalgic gateway into live music history. Built with love for fans & artists.
        </p>
      </section>

      <section id="contact" style={{ padding: "4rem 2rem", color: "#fff" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem", textShadow: "0 0 6px #ff00ff" }}>Contact</h2>
        <p style={{ fontSize: "1.1rem" }}>Email us at <a href="mailto:info@timetunnel.app" style={{ color: "#00ffff", textDecoration: "none" }}>info@timetunnel.app</a></p>
      </section>
    </div>
  );
}
