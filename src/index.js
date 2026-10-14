
const links = [
  {
    icon: "globe",
    title: "Pajara Website",
    description: "Website resmi Pajara Studio",
    url: "https://pajara-website.pajarastd.workers.dev"
  },
  {
    icon: "shopping-bag",
    title: "Customer Website",
    description: "Pesan dan kelola desain kamu",
    url: "https://pajara-customer.pajarastd.workers.dev/"
  },
  {
    icon: "newspaper",
    title: "Pajara News",
    description: "Informasi dan edukasi desain",
    url: "https://pajara-news.pajarastd.workers.dev"
  },
  {
    icon: "message-circle",
    title: "Konsultasi & Tanya Seputar Pemesanan",
    description: "Konsultasi langsung melalui WhatsApp",
    url: "https://wa.me/message/TBAFLG4D554PC1"
  },
  {
    icon: "instagram",
    title: "Instagram",
    description: "Ikuti karya Pajara Studio",
    url: "https://instagram.com/pajarastudio.id?dlrf=eDJ5cXBrdDJ2OHc4"
  },
  {
    icon: "camera",
    title: "Instagram Backup",
    description: "Akun Instagram cadangan",
    url: "https://instagram.com/pajarastudio.co?rpxt=NmxiYWRqZmh5eGFy"
  },
  {
    icon: "tiktok",
    title: "TikTok",
    description: "Konten kreatif Pajara Studio",
    url: "https://www.tiktok.com/@pajarastudio.id?_r=1&_t=ZS-9AXWd2nMkxo"
  }
];

const icons = {
  globe: `
    <circle cx="12" cy="12" r="9"/>
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>
  `,
  "shopping-bag": `
    <path d="M5 8h14l1 13H4L5 8Z"/>
    <path d="M9 9V6a3 3 0 0 1 6 0v3"/>
  `,
  newspaper: `
    <path d="M4 5h14v15H5a2 2 0 0 1-2-2V7a2 2 0 0 1 1-2Z"/>
    <path d="M18 9h3v9a2 2 0 0 1-2 2h-1M7 9h8M7 13h3M7 16h8"/>
  `,
  "message-circle": `
    <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.1-4.2A8.5 8.5 0 1 1 21 11.5Z"/>
    <path d="M8 12h.01M12 12h.01M16 12h.01" stroke-width="2.5"/>
  `,
  instagram: `
    <rect x="3" y="3" width="18" height="18" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>
  `,
  camera: `
    <path d="M4 7h3l2-3h6l2 3h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/>
    <circle cx="12" cy="13" r="4"/>
  `,
  tiktok: `
    <path d="M14 3v11.2a4.2 4.2 0 1 1-4-4.2"/>
    <path d="M14 3c.6 3.3 2.7 5.2 6 5.5"/>
  `
};

const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);

function iconSVG(name) {
  const paths = icons[name] || icons.globe;

  return `
    <svg viewBox="0 0 24 24"
      width="23" height="23"
      fill="none"
      stroke="currentColor"
      stroke-width="1.65"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true">
      ${paths}
    </svg>
  `;
}

export default {
  async fetch() {
    const cards = links.map((link, index) => `
      <a class="link-card"
         href="${escapeHTML(link.url)}"
         target="_blank"
         rel="noopener noreferrer"
         style="--i:${index}">
        <span class="link-icon">${iconSVG(link.icon)}</span>
        <span class="link-copy">
          <strong>${escapeHTML(link.title)}</strong>
          <small>${escapeHTML(link.description)}</small>
        </span>
        <span class="arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="19" height="19"
            fill="none" stroke="currentColor" stroke-width="1.6"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 17 17 7M7 7h10v10"/>
          </svg>
        </span>
      </a>
    `).join("");

    const html = `<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f7f4ee">
  <meta name="description"
    content="Temukan semua tautan resmi Pajara Studio dalam satu tempat.">
  <title>Pajara Links — Pajara Studio</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --green: #2f6b45;
      --dark: #214d32;
      --brown: #8a6a4a;
      --cream: #f7f4ee;
      --white: #fff;
      --line: #e6e1d8;
      --muted: #77776f;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      background:
        radial-gradient(ellipse at 50% -10%, #e2eadf 0%, transparent 52%),
        var(--cream);
      color: var(--dark);
      font-family: "DM Sans", sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    a {
      -webkit-tap-highlight-color: transparent;
    }

    .page {
      width: min(100% - 36px, 470px);
      margin: 0 auto;
      padding: 54px 0 28px;
    }

    .profile {
      text-align: center;
      margin-bottom: 34px;
      animation: appear .6s ease both;
    }

    .brand-mark {
      display: grid;
      place-items: center;
      width: 70px;
      height: 70px;
      margin: 0 auto 20px;
      border: 1px solid #ffffff80;
      border-radius: 23px;
      background: linear-gradient(145deg, #39794f, #214d32);
      color: white;
      box-shadow: 0 10px 30px #214d321c;
    }

    .brand-mark svg {
      width: 30px;
      height: 30px;
    }

    .eyebrow {
      margin: 0 0 8px;
      color: var(--brown);
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 2.8px;
      text-transform: uppercase;
    }

    h1 {
      margin: 0;
      font-family: "Playfair Display", Georgia, serif;
      font-size: clamp(34px, 9vw, 42px);
      font-weight: 600;
      line-height: 1.15;
      letter-spacing: -1.1px;
    }

    .tagline {
      margin: 12px 0 15px;
      color: var(--brown);
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 2px;
    }

    .intro {
      max-width: 310px;
      margin: 0 auto;
      color: #707168;
      font-size: 13px;
      line-height: 1.8;
    }

    .section-heading {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0 2px 14px;
    }

    .section-heading span {
      flex-shrink: 0;
      color: var(--brown);
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 2px;
    }

    .section-heading::after {
      height: 1px;
      flex: 1;
      background: var(--line);
      content: "";
    }

    .links {
      display: grid;
      gap: 11px;
    }

    .link-card {
      position: relative;
      display: flex;
      min-height: 79px;
      align-items: center;
      gap: 14px;
      padding: 14px;
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: 17px;
      background: #ffffffc9;
      color: inherit;
      text-decoration: none;
      box-shadow: 0 3px 12px #302d2204;
      animation: appear .45s ease both;
      animation-delay: calc(var(--i) * 45ms);
      transition:
        transform .2s ease,
        border-color .2s ease,
        background .2s ease,
        box-shadow .2s ease;
    }

    .link-card:hover {
      transform: translateY(-2px);
      border-color: #b6c8b6;
      background: var(--white);
      box-shadow: 0 9px 24px #214d320b;
    }

    .link-card:focus-visible {
      outline: 2px solid var(--green);
      outline-offset: 3px;
    }

    .link-icon {
      display: grid;
      width: 46px;
      height: 46px;
      flex: 0 0 46px;
      place-items: center;
      border: 1px solid #eae6dc;
      border-radius: 14px;
      background: var(--cream);
      color: var(--green);
      transition: background .2s ease, color .2s ease;
    }

    .link-card:hover .link-icon {
      border-color: var(--green);
      background: var(--green);
      color: white;
    }

    .link-copy {
      min-width: 0;
      flex: 1;
    }

    .link-copy strong {
      display: block;
      color: var(--dark);
      font-size: 13px;
      font-weight: 700;
      line-height: 1.5;
    }

    .link-copy small {
      display: block;
      margin-top: 4px;
      color: var(--muted);
      font-size: 11px;
      line-height: 1.5;
    }

    .arrow {
      display: grid;
      flex: 0 0 26px;
      width: 26px;
      height: 26px;
      place-items: center;
      border-radius: 50%;
      color: #9b8a72;
      transition: transform .2s ease, color .2s ease;
    }

    .link-card:hover .arrow {
      transform: translate(2px, -2px);
      color: var(--green);
    }

    .footer {
      padding-top: 34px;
      text-align: center;
    }

    .footer-line {
      width: 34px;
      height: 1px;
      margin: 0 auto 17px;
      background: #bca88f;
    }

    .footer-brand {
      margin: 0;
      color: var(--green);
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 2.5px;
    }

    .footer-tagline {
      margin: 8px 0 0;
      color: #8b887d;
      font-size: 10px;
    }

    @keyframes appear {
      from {
        opacity: 0;
        transform: translateY(8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 380px) {
      .page {
        padding-top: 38px;
      }

      .link-card {
        gap: 11px;
        padding: 12px;
      }

      .link-copy strong {
        font-size: 12px;
      }

      .link-copy small {
        font-size: 10px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation: none !important;
        transition: none !important;
      }
    }
  </style>
</head>

<body>
  <main class="page">
    <header class="profile">
      <div class="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 21V11"/>
          <path d="M12 15c-5 0-8-3-8-8 5 0 8 3 8 8Z"/>
          <path d="M12 12c0-4 3-7 8-7 0 5-3 8-8 8"/>
          <path d="M7 21h10"/>
        </svg>
      </div>

      <p class="eyebrow">Creative Studio · Indonesia</p>
      <h1>Pajara Studio</h1>
      <p class="tagline">BERAKAR DI TANAH PASUNDAN.</p>
      <p class="intro">
        Satu tempat untuk menemukan karya, layanan,
        informasi, dan semua kanal resmi Pajara Studio.
      </p>
    </header>

    <section aria-label="Tautan resmi Pajara Studio">
      <div class="section-heading">
        <span>JELAJAHI PAJARA</span>
      </div>
      <div class="links">${cards}</div>
    </section>

    <footer class="footer">
      <div class="footer-line"></div>
      <p class="footer-brand">PAJARA STUDIO</p>
      <p class="footer-tagline">Desain yang punya arah.</p>
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
