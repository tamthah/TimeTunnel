import { useEffect } from 'react'

const data = {
  quote: '"We found love in a hopeless place." – Rihanna – We Found Love',
  artists: [
    { name: 'Taylor Swift', tour: 'The Eras Tour (2024)', image: 'taylor.jpg', videoUrl: 'https://youtube.com/playlist?list=PL8hc5b19QC9JFn-gk7Oyf6_UgN4hIPTVu&si=0LlSqVVU1Cw8pxQL' },
    { name: 'Rihanna', tour: 'The Loud Tour (2011)', image: 'rihanna.jpg', videoUrl: 'https://youtube.com/playlist?list=PL8hc5b19QC9IMx_oxWjQLFBhvScRAOzzx&si=XnH4cA4sydpIl-6n' },
    { name: 'Britney Spears', tour: 'The Circus Starring Britney Spears (2009)', image: 'BritneySpears.jpg', videoUrl: 'https://youtube.com/playlist?list=PL8hc5b19QC9JHAYR-XqcEACntZh3opYU9&si=6LDfYmDz6IOwS4ry' },
  ],
}

export default function PopGenrePage() {
  useEffect(() => {
    document.title = 'POP - TimeTunnel';
  }, [])

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.logo}>TimeTunnel</div>
        <div style={styles.links}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/#about" style={styles.link}>About</a>
          <a href="/#genres" style={styles.link}>Genres</a>
          <a href="/#contact" style={styles.link}>Contact</a>
        </div>
      </nav>

      <h1 style={styles.genreTitle}>POP</h1>
      <p style={styles.quote}>{data.quote}</p>

      <div style={styles.artistGrid}>
        {data.artists.map((artist, i) => (
          <div key={i} style={styles.artistCard}>
            <a href={artist.videoUrl} target="_blank" rel="noopener noreferrer">
              <div style={styles.artistImageContainer}>
                <img
                  src={`/artist-heads/${artist.image}`}
                  alt={artist.name}
                  style={styles.artistImage}
                />
              </div>
            </a>
            <p style={styles.artistName}>{artist.name}</p>
            <small style={styles.artistTour}>{artist.tour}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: '3rem 0rem',
    color: 'white',
    backgroundImage: `url('/genre-backgrounds/Popbg.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    overflowY: 'auto',
  },
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: '1rem 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 999,
  },
  logo: {
    color: '#1e3a8a',
    fontWeight: 'bold',
    fontSize: '2rem',
    textShadow: '0 0 5px #1e3a8a',
  },
  links: {
    display: 'flex',
    gap: '3rem',
    paddingRight: '7rem',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.2rem',
    textShadow: '0 0 6px #00ffff',
  },
  genreTitle: {
    fontSize: '10rem',
    marginBottom: '1rem',
    textAlign: 'center',
    marginTop: '5rem',
    fontFamily: 'AMORIA, cursive',
    fontWeight: 'bold',
    textShadow: '0 0 15px #ff00ff',
  },
  quote: {
    fontStyle: 'italic',
    fontSize: '2rem',
    marginBottom: '6rem',
    textAlign: 'center',
  },
  artistGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '4rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  artistCard: {
    textAlign: 'center',
    maxWidth: 200,
  },
  artistImageContainer: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    overflow: 'hidden',
    border: '4px solid #00f0ff',
    margin: '0 auto 1px',
    backgroundColor: '#000',
  },
  artistImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  artistName: {
    fontWeight: 'bold',
    fontSize: '1.3rem',
    marginBottom: 8,
  },
  artistTour: {
    color: '#ccc',
    fontSize: '1rem',
  },
}
