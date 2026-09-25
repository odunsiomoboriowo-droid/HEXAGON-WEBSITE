export default function Home() {
  return (
    <main className="page">
      <div className="frame">
        <img src="/logo.png" alt="Hexagon Visuals logo" className="logo" />
        <p className="brand-row">Hexagon Visuals</p>

        <p className="tagline">
          PHOTOGRAPHY &middot; VIDEOGRAPHY &middot; REELS &middot; CONTENT
        </p>

        <h1>Hexagon</h1>
        <h1 className="italic">Visuals</h1>

        <p className="description">
          We create videos that give you something to relive long after the
          moment, with storytelling at its peak.
        </p>

        <hr />

        <div className="avatar">
          <img src="/founder.jpg" alt="Jonah Precious Chidera" />
        </div>
        <p className="owner-label">Founder &mdash; Jonah Precious Chidera</p>

        <p className="cta-line">Have an event or brand shoot coming up?</p>

        <a
          className="cta-button"
          href="https://wa.me/2348079680788"
          target="_blank"
          rel="noopener"
        >
          Get in touch
        </a>

        <p className="social-links">
          <a
            href="https://www.instagram.com/derah.of.god"
            target="_blank"
            rel="noopener"
          >
            Instagram
          </a>
          <span className="sep">|</span>
          <a
            href="https://www.tiktok.com/@hexagon.visuals"
            target="_blank"
            rel="noopener"
          >
            TikTok
          </a>
          <span className="sep">|</span>
          <a href="mailto:hexagonvisualsproduction@gmail.com">Gmail</a>
        </p>
      </div>
    </main>
  );
}
