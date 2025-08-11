// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Soft Start, Strong Finish</title>
        <meta name="description" content="A podcast about faith, finances, and real talk." />
      </Head>

      <main className="wrap">
        <h1>Soft Start, <span>Strong Finish</span></h1>
        <p className="tag">A podcast about faith, finances, and real talk.</p>

        <div className="cta">
          <a href="https://open.spotify.com/" target="_blank" rel="noreferrer">Listen on Spotify</a>
          <a href="https://podcasts.apple.com/" target="_blank" rel="noreferrer" className="secondary">Apple Podcasts</a>
        </div>

        <div className="panel">
          <h2>Newest Episode</h2>
          <p>Episode embed coming soon. For now, follow us on Spotify or Apple to get updates.</p>
        </div>

        <div className="links">
          <a href="https://www.facebook.com/softstartstrongfinish" target="_blank" rel="noreferrer">Facebook Page</a>
          <a href="mailto:softstartstrongfinish@outlook.com">Contact</a>
        </div>
      </main>

      <style jsx>{`
        .wrap {
          min-height: 100vh;
          display: grid;
          place-items: center;
          text-align: center;
          padding: 2rem;
          background: #0b0b0b;
          color: #f1f1f1;
        }
        h1 {
          font-size: clamp(2rem, 6vw, 3.2rem);
          margin: 0 0 .25rem;
          letter-spacing: .5px;
        }
        h1 span { color: #9ae6b4; }
        .tag { color: #cfcfcf; margin: 0 0 1.25rem; }
        .cta { display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap; margin: 1rem 0 1.25rem; }
        .cta a {
          padding: .75rem 1rem; border-radius: 10px; text-decoration: none; font-weight: 600;
          background: #fff; color: #111;
        }
        .cta a.secondary { background: transparent; color: #fff; outline: 1px solid #3a3a3a; }
        .panel {
          max-width: 680px; width: 100%;
          background: #151515; border: 1px solid #2a2a2a; border-radius: 12px;
          padding: 1rem; margin: 0 auto 1rem;
        }
        .panel h2 { margin: 0 0 .5rem; font-size: 1.25rem; }
        .links { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; opacity: .9; }
        .links a { color: #9ae6b4; text-decoration: none; }
      `}</style>
    </>
  );
}