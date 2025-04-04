import { useEffect } from 'react'

const data = {
  genre: 'R&B',
  quote: '"You showed me love, glory from above, regard my dear, it’s all downhill from here." – Frank Ocean – Pink + White',
  background: 'R&bbg.jpg',
  artists: [
    { name: 'SZA', tour: '“SOS Tour” (2023)', image: 'sza.jpg', videoUrl: 'https://youtube.com/playlist?list=PL8hc5b19QC9IczgN_o2G-mALpL8WYzCFD&si=_7hpV1EN02C1DVII' },
    { name: 'Frank Ocean', tour: '“Channel Orange tour”  (2012-2013)', image: 'frankocean.jpg', videoUrl: 'https://youtube.com/playlist?list=PL8hc5b19QC9JPEQwZD8ifwKhvh4vqkD9b&si=DU2MKnH_QWKr1OYD' },
    { name: 'Usher', tour: '“Raymond v. Raymond Tour” (2010)', image: 'usher.jpg', videoUrl: 'https://youtube.com/playlist?list=PL8hc5b19QC9JQPrtDDaWa-uJN2mvHLFJC&si=Gsrd5dMKVr9Ot0Jn' },
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
