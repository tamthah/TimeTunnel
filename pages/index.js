import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");

  const genres = [
    { name: "pop", label: "Pop", image: "/images/pop.jpg" },
    { name: "rock", label: "Rock", image: "/images/rock.jpg" },
    { name: "latin", label: "Latin", image: "/images/latin.jpg" },
    { name: "hiphop", label: "HipHop", image: "/images/hiphop.jpg" },
    { name: "randb", label: "R&B", image: "/images/rnb.jpg" },
    { name: "country", label: "Country", image: "/images/country.jpg" },
  ];

  const navLinkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "1.2rem",
    textShadow: "0 0 6px #00ffff",
    transition: "color 0.3s",
    padding: "0.75rem 1.25rem"
  };

  const handleSearch = () => {
    if (!artist || !year) return;
    router.push(`/result?artist=${encodeURIComponent(artist)}&year=${encodeURIComponent(year)}`);
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
      {/* Navigation Bar */}
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
        <div style={{ 
          color: "#ffffff", 
          fontFamily: "AMORIA, cursive", 
          fontWeight: "bold", 
          fontSize: "2rem", 
          textShadow: "0 0 5px #ffffff" 
        }}>
          TimeTunnel
        </div>
        <div style={{ display: "flex", gap: "3rem", paddingRight: "7rem" }}>
          <a href="#" style={navLinkStyle}>Home</a>
          <a href="#about" style={navLinkStyle}>About</a>
          <a href="#genres" style={navLinkStyle}>Genres</a>
          <a href="#contact" style={navLinkStyle}>Contact</a>
        </div>
      </nav>

      {/* Main Content */}
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
            width: "160px",
            marginBottom: "0.1rem",
            borderRadius: "12px",
            boxShadow: "0 0 20px #ff00ff"
          }}
        />

        <h1 style={{
          fontSize: "4rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          color: "#ffffff",
          fontFamily: "AMORIA, cursive",
          textShadow: "0 0 10px #ffffff, 0 0 20px #ffffff"
        }}>
          TimeTunnel
        </h1>

        <p style={{ fontSize: "1.3rem", marginBottom: "2rem", color: "#eeeeee" }}>
          Explore real concert setlists from your favorite artists.
        </p>

        {/* Search Bar */}
        <div style={{
          display: "flex",
          gap: "1.4rem",
          marginBottom: "2rem",
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
            onClick={handleSearch}
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

        {/* Genre Buttons */}
        <div id="genres" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "4rem",
          maxWidth: "1200px",
          margin: "10rem auto 0"
        }}>
          {genres.map((genre) => (
            <a
              key={genre.name}
              href={`/genres/${genre.name}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={{ textAlign: 'center', maxWidth: 200 }}>
                <div style={{
                  width: 180,
                  height: 180,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid #1e3a8a',
                  boxShadow: '0 0 12px #1e3a8a',
                  margin: '0 auto 12px',
                  backgroundColor: '#000'
                }}>
                  <img src={genre.image} alt={genre.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <span style={{ color: "#fff", fontSize: "1.2rem", fontWeight: "bold", textShadow: "0 0 4px #1e3a8a" }}>
                  {genre.label}
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* About Section */}
      <section id="about" style={{ padding: "6rem 2rem 4rem", color: "#fff" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem", textShadow: "0 0 6px #ff00ff" }}>About TimeTunnel</h2>
        <p style={{ fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
          TimeTunnel is your nostalgic gateway into live music history. Built with love for fans & artists.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "4rem 2rem", color: "#fff" }}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "1rem", textShadow: "0 0 6px #ff00ff" }}>Contact</h2>
        <p style={{ fontSize: "1.1rem" }}>Email us at <a href="mailto:info@timetunnel.app" style={{ color: "#00ffff", textDecoration: "none" }}>info@timetunnel.app</a></p>
      </section>
    </div>
  );
}