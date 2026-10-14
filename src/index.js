
const links = [
  {
    icon: "🌐",
    title: "Pajara Website",
    description: "Website resmi Pajara Studio",
    url: "https://pajara-website.pajarastd.workers.dev"
  },
  {
    icon: "🛍️",
    title: "Customer Website",
    description: "Pesan dan kelola desain kamu",
    url: "https://pajara-customer.pajarastd.workers.dev/"
  },
  {
    icon: "📰",
    title: "Pajara News",
    description: "Informasi dan edukasi desain",
    url: "https://pajara-news.pajarastd.workers.dev"
  },
  {
    icon: "💬",
    title: "Konsultasi & Tanya Seputar Pemesanan",
    description: "Hubungi kami melalui WhatsApp",
    url: "https://wa.me/message/TBAFLG4D554PC1"
  },
  {
    icon: "📸",
    title: "Instagram",
    description: "Ikuti karya Pajara Studio",
    url: "https://instagram.com/pajarastudio.id?dlrf=eDJ5cXBrdDJ2OHc4"
  },
  {
    icon: "📷",
    title: "Instagram Backup",
    description: "Akun Instagram cadangan",
    url: "https://instagram.com/pajarastudio.co?rpxt=NmxiYWRqZmh5eGFy"
  },
  {
    icon: "♪",
    title: "TikTok",
    description: "Konten kreatif Pajara Studio",
    url: "https://www.tiktok.com/@pajarastudio.id?_r=1&_t=ZS-9AXWd2nMkxo"
  }
];

const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);

export default {
  async fetch() {
    const cards = links.map((link) => `
      <a class="link-card" href="${escapeHTML(link.url)}"
         target="_blank" rel="noopener noreferrer">
        <span class="link-icon">${escapeHTML(link.icon)}</span>
        <span class="link-copy">
          <strong>${escapeHTML(link.title)}</strong>
          <small>${escapeHTML(link.description)}</small>
        </span>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>
    `).join("");

    const html = `<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f7f4ee">
  <meta name="description" content="Semua tautan resmi Pajara Studio dalam satu tempat. Berakar di Tanah Pasundan.">
  <title>Pajara Links — Pajara Studio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      color-scheme: light;
      --green: #2f6b45;
      --dark: #214d32;
      --brown: #8a6a4a;
      --cream: #f7f4ee;
      --white: #fff;
      --line: #e8e2d8;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      background:
        radial-gradient(ellipse at 50% 0%, #e9eee4 0%, transparent 58%),
        var(--cream);
      color: var(--dark);
      font-family: "DM Sans", sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    main {
      width: min(100% - 32px, 480px);
      margin: 0 auto;
      padding: 54px 0 28px;
    }
    .profile { text-align: center; margin-bottom: 30px; }
    .logo {
      width: 76px;
      height: 76px;
      margin: 0 auto 18px;
      border-radius: 25px;
      background: var(--green);
      color: white;
      display: grid;
      place-items: center;
      font-family: "Playfair Display", Georgia, serif;
      font-size: 32px;
      box-shadow: 0 10px 26px #214d321c;
    }
    h1 {
      margin: 0;
      font: 600 34px/1.2 "Playfair Display", Georgia, serif;
      letter-spacing: -.8px;
    }
    .tagline {
      color: var(--brown);
      font-size: 12px;
      letter-spacing: 1.4px;
      margin: 10px 0 16px;
    }
    .intro {
      color: #696a61;
      font-size: 14px;
      line-height: 1.7;
      margin: 0 auto;
      max-width: 320px;
    }
    .section-label {
      margin: 0 0 12px 4px;
      color: var(--brown);
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 2px;
    }
    .links { display: grid; gap: 11px; }
    .link-card {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 15px;
      min-height: 76px;
      border: 1px solid var(--line);
      border-radius: 17px;
      background: #ffffffd9;
      color: inherit;
      text-decoration: none;
      box-shadow: 0 3px 12px #302d2205;
      transition: transform .18s ease, border-color .18s ease,
        box-shadow .18s ease;
    }
    .link-card:hover {
      transform: translateY(-2px);
      border-color: #b6c8b6;
      box-shadow: 0 8px 22px #214d320d;
    }
    .link-icon {
      flex: 0 0 43px;
      width: 43px;
      height: 43px;
      border-radius: 13px;
      background: var(--cream);
      display: grid;
      place-items: center;
      font-size: 20px;
    }
    .link-copy { flex: 1; min-width: 0; }
    .link-copy strong {
      display: block;
      font-size: 14px;
      font-weight: 700;
      line-height: 1.45;
    }
    .link-copy small {
      display: block;
      margin-top: 4px;
      color: #77766e;
      font-size: 11px;
      line-height: 1.5;
    }
    .arrow { color: var(--brown); font-size: 19px; padding-left: 3px; }
    footer {
      text-align: center;
      padding-top: 32px;
      color: #858174;
      font-size: 10px;
      letter-spacing: 1.8px;
    }
    footer strong {
      display: block;
      color: var(--green);
      font-size: 11px;
      margin-bottom: 8px;
    }
    @media (max-width: 380px) {
      main { padding-top: 36px; }
      h1 { font-size: 30px; }
      .link-card { gap: 11px; padding: 13px; }
      .link-copy strong { font-size: 13px; }
    }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { transition: none !important; }
    }
  </style>
</head>
<body>
  <main>
    <header class="profile">
      <div class="logo" aria-hidden="true">P</div>
      <h1>Pajara Studio</h1>
      <p class="tagline">BERAKAR DI TANAH PASUNDAN.</p>
      <p class="intro">Semua tautan penting Pajara Studio, dalam satu tempat.</p>
    </header>
    <section aria-label="Tautan resmi Pajara Studio">
      <p class="section-label">TEMUKAN KAMI</p>
      <div class="links">${cards}</div>
    </section>
    <footer>
      <strong>PAJARA STUDIO</strong>
      DESAIN YANG PUNYA ARAH.
    </footer>
  </main>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "public, max-age=300"
      }
    });
  }
};
