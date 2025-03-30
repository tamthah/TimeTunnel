import { useEffect } from 'react'

const data = {
  genre: 'Country',
  quote: '"Take me home, country roads, to the place I belong." – – John Denver – Country Roads',
  background: 'Countrybg.jpg',
  artists: [
    { name: 'Morgan Wallen', tour: '“One Night At A Time World Tour” (2024)', image: 'morganwallen.jpg', videoUrl: 'https://youtube.com/playlist?list=PL8hc5b19QC9L9ikFgQ_jqchIiuWkO_h8w&si=BYxHBgibSTahZ-wY' },
    { name: 'Carrie Underwood', tour: '"The Storyteller Tour – Stories in the Round” (2016)', image: 'carrieunderwood.jpg', videoUrl: 'https://youtube.com/playlist?list=PL8hc5b19QC9Ld2LQatNtbJxhOe8apkrW-&si=wjvifUuhvBEzt_sF' },
    { name: 'Tim McGraw', tour: '“Soul2Soul II Tour” (2006-2007)', image: 'timmcgraw.jpg', videoUrl: 'https://youtube.com/playlist?list=PL8hc5b19QC9J2kBN4QWM6wW3s_tafNdtb&si=KSemue8_-414kZXq' },
  ]
}

export default function GenreTemplate() {
  useEffect(() => {
    document.title = `${data.genre.toUpperCase()} - TimeTunnel`
  }, [])

  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
      padding: '3rem 0', color: 'white',
      backgroundImage: `url('/genre-backgrounds/${data.background}')`,
      backgroundSize: 'cover', backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed',
      overflowY: 'auto'
    }}>

      <nav style={{
        position: 'fixed', top: 0, width: '100%', padding: '1rem 3rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)', zIndex: 999
      }}>
        <div style={{ color: '#1e3a8a', fontWeight: 'bold', fontSize: '2rem', textShadow: '0 0 5px #1e3a8a' }}>TimeTunnel</div>
        <div style={{ display: 'flex', gap: '3rem', paddingRight: '7rem' }}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/#about" style={linkStyle}>About</a>
          <a href="/#genres" style={linkStyle}>Genres</a>
          <a href="/#contact" style={linkStyle}>Contact</a>
        </div>
      </nav>

      <h1 style={{
        fontSize: '10rem', marginBottom: '1rem', textAlign: 'center', marginTop: '5rem',
        fontFamily: 'AMORIA, cursive', fontWeight: 'bold', textShadow: '0 0 15px #ff00ff'
      }}>{data.genre.toUpperCase()}</h1>

      <p style={{ fontStyle: 'italic', fontSize: '2rem', marginBottom: '6rem', textAlign: 'center' }}>{data.quote}</p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
        {data.artists.map((artist, i) => (
          <div key={i} style={{ textAlign: 'center', maxWidth: 200 }}>
            <a href={artist.videoUrl} target="_blank" rel="noopener noreferrer">
              <div style={{ width: 200, height: 200, borderRadius: '50%', overflow: 'hidden', border: '4px solid #00f0ff', backgroundColor: '#000', margin: '0 auto 1px' }}>
                <img src={`/artist-heads/${artist.image}`} alt={artist.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </a>
            <p style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: 8 }}>{artist.name}</p>
            <small style={{ color: '#ccc', fontSize: '1rem' }}>{artist.tour}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

const linkStyle = {
  color: '#ffffff', textDecoration: 'none', fontSize: '1.2rem', textShadow: '0 0 6px #00ffff'
}  
