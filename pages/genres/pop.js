export default function PopPage() {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
      padding: '3rem 0', color: 'white',
      backgroundImage: "url('/genre-backgrounds/Popbg.jpg')",
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
        <div style={{
          color: '#ffffff', fontFamily: 'AMORIA, cursive',
          fontWeight: 'bold', fontSize: '2rem', textShadow: '0 0 5px #ffffff'
        }}>
          TimeTunnel
        </div>
        <div style={{ display: 'flex', gap: '3rem', paddingRight: '7rem' }}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/#about" style={linkStyle}>About</a>
          <a href="/#genres" style={linkStyle}>Genres</a>
          <a href="/#contact" style={linkStyle}>Contact</a>
        </div>
      </nav>

      <h1 style={{
        fontSize: '10rem', marginBottom: '1rem', textAlign: 'center',
        marginTop: '6rem', fontFamily: 'AMORIA, cursive', fontWeight: 'bold',
        textShadow: '0 0 15px #ff00ff'
      }}>POP</h1>

      <p style={{ fontStyle: 'italic', fontSize: '2rem', marginBottom: '6rem', textAlign: 'center' }}>
        "We found love in a hopeless place." – Rihanna – We Found Love
      </p>

      <div style={{
        display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
        gap: '4rem', maxWidth: '1200px', margin: '0 auto'
      }}>
        {[
          {
            name: "Taylor Swift",
            image: "taylor.jpg",
            tour: "The Eras Tour (2024)"
          },
          {
            name: "Rihanna",
            image: "rihanna.jpg",
            tour: "The Loud Tour (2011)"
          },
          {
            name: "Britney Spears",
            image: "BritneySpears.jpg",
            tour: "The Circus Starring Britney Spears (2009)"
          }
        ].map((artist, i) => (
          <div key={i} style={{ textAlign: 'center', maxWidth: 200 }}>
            <div style={{
              width: 200, height: 200, borderRadius: '50%', overflow: 'hidden',
              border: '4px solid #00f0ff', backgroundColor: '#000', margin: '0 auto 1px'
            }}>
              <img src={`/artist-heads/${artist.image}`} alt={artist.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <p style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: 8 }}>{artist.name}</p>
            <small style={{ color: '#ccc', fontSize: '1rem' }}>{artist.tour}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

const linkStyle = {
  color: '#ffffff', textDecoration: 'none', fontSize: '1.2rem', textShadow: '0 0 6px #00ffff'
};