import { useState } from "react";

export default function Home() {
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const [setlists, setSetlists] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🎸 TimeTunnel</h1>
      <p>Explore real concert setlists from your favorite artists.</p>

      <input
        type="text"
        placeholder="Artist name (e.g. Coldplay)"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        style={{ marginRight: "1rem", padding: "0.5rem" }}
      />
      <input
        type="text"
        placeholder="Year (e.g. 2012)"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        style={{ marginRight: "1rem", padding: "0.5rem" }}
      />
      <button onClick={fetchSetlists} style={{ padding: "0.5rem 1rem" }}>
        Search
      </button>

      {loading && <p>Loading setlists...</p>}

      <ul>
        {setlists.map((s, i) => (
          <li key={i} style={{ margin: "1rem 0" }}>
            <strong>{s.eventDate}</strong> — {s.venue?.name}, {s.venue?.city?.name}
            <ul>
              {s.sets?.set?.[0]?.song?.map((song, idx) => (
                <li key={idx}>{song.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
