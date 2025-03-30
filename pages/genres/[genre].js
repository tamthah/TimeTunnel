import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const mockData = {
  pop: {
    quote: '"We found love in a hopeless place." – Rihanna – We Found Love',
    artists: [
      { name: 'Taylor Swift', tour: 'The Eras Tour (2024)', image: 'taylor.jpg' },
      { name: 'Rihanna', tour: 'The Loud Tour (2011)', image: 'rihanna.jpg' },
      { name: 'Britney Spears', tour: 'The Circus Starring Britney Spears (2009)', image: 'BritneySpears.jpg' },
    ],    
  },
}

export default function GenrePage() {
  const router = useRouter()
  const [genreName, setGenreName] = useState('')

  useEffect(() => {
    if (router.isReady && router.query.genre) {
      setGenreName(router.query.genre.toLowerCase())
    }
  }, [router.isReady, router.query.genre])

  const data = mockData[genreName]

  if (!genreName || !data) return <div style={{ padding: '2rem' }}>Loading genre...</div>

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: '3rem 0rem',
        color: 'white',
        backgroundImage: "url('/genre-backgrounds/popbg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        overflowY: 'auto',
      }}
    >
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
          <a href="/" style={{ color: "#ffffff", textDecoration: "none", fontSize: "1.2rem", textShadow: "0 0 6px #00ffff" }}>Home</a>
          <a href="/#about" style={{ color: "#ffffff", textDecoration: "none", fontSize: "1.2rem", textShadow: "0 0 6px #00ffff" }}>About</a>
          <a href="/#genres" style={{ color: "#ffffff", textDecoration: "none", fontSize: "1.2rem", textShadow: "0 0 6px #00ffff" }}>Genres</a>
          <a href="/#contact" style={{ color: "#ffffff", textDecoration: "none", fontSize: "1.2rem", textShadow: "0 0 6px #00ffff" }}>Contact</a>
        </div>
      </nav>

      <h1 style={{
  fontSize: '10rem', // Increased
  marginBottom: '1rem',
  textAlign: 'center',
  marginTop: '5rem',
  fontFamily: 'AMORIA, cursive',
  fontWeight: 'bold',
  textShadow: '0 0 15px #ff00ff'
}}>
  POP
</h1>


      <p style={{ fontStyle: 'italic', fontSize: '2rem', marginBottom: '6rem', textAlign: 'center' }}>{data.quote}</p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '4rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {data.artists.map((artist, i) => (
          <div key={i} style={{ textAlign: 'center', maxWidth: 200 }}>
            <div
              style={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #00f0ff',
                margin: '0 auto 1px',
                backgroundColor: '#000',
              }}
            >
              <img
                src={`/artist-heads/${artist.image}`}
                alt={artist.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
            <p style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: 8 }}>{artist.name}</p>
            <small style={{ color: '#ccc', fontSize: '1rem' }}>{artist.tour}</small>
          </div>
        ))}
      </div>

      <p style={{
        marginTop: '3rem',
        fontSize: '1rem',
        color: '#ddd',
        textAlign: 'center',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
       </p>
    </div>
  )
}
