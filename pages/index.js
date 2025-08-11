export default function Home() {
  return (
    <main style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      height: '100vh',
      backgroundImage: 'url("https://images.unsplash.com/photo-1531746790731-6c087fecd65a")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '2rem',
        borderRadius: '12px',
        textAlign: 'center',
        maxWidth: '700px'
      }}>
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          Soft Start, Strong Finish
        </h1>
        <p style={{
          fontSize: '1.3rem',
          lineHeight: '1.6'
        }}>
          Faith. Vulnerability. Healing.  
          Breaking taboos one honest conversation at a time.
        </p>
      </div>
    </main>
  );
}