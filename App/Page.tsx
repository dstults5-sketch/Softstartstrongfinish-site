export default function Home() {
  return (
    <main style={{minHeight:'100vh',display:'grid',placeItems:'center',padding:'2rem',background:'#0f3d4b',color:'#f7f7f7'}}>
      <section style={{maxWidth:900, width:'100%'}}>
        <h1 style={{fontSize:'clamp(2rem,4vw,3rem)', margin:'0 0 0.5rem', lineHeight:1.1}}>
          Soft Start, Strong Finish
        </h1>
        <p style={{opacity:.9, margin:'0 0 1.25rem'}}>
          Use the gifts of God to build — a podcast on faith, habit, and humble growth.
        </p>

        <div style={{background:'#0a2a33', padding:'1rem', borderRadius:12, border:'1px solid #154956'}}>
          <h2 style={{margin:'0 0 .5rem'}}>Trailer drops tonight</h2>
          <p style={{margin:0}}>
            Episode 1 goes live <strong>Aug 18</strong>. Follow for updates and links.
          </p>
        </div>

        <div style={{display:'flex', gap:12, marginTop:16, flexWrap:'wrap'}}>
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noreferrer"
             style={{padding:'10px 14px', background:'#e9f1f3', color:'#0f3d4b', borderRadius:10, textDecoration:'none', fontWeight:600}}>
            Facebook Page
          </a>
          <a href="mailto:contact@softstartstrongfinish.com"
             style={{padding:'10px 14px', border:'1px solid #e9f1f3', borderRadius:10, textDecoration:'none', color:'#e9f1f3'}}>
            Email
          </a>
        </div>

        <footer style={{opacity:.7, marginTop:18, fontSize:14}}>
          © {new Date().getFullYear()} Soft Start, Strong Finish
        </footer>
      </section>
    </main>
  );
}
