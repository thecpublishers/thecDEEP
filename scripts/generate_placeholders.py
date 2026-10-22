from __future__ import annotations

import html
from pathlib import Path
from textwrap import wrap

ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "public" / "images"

PALETTE = {
    "red": "#E11D2A",
    "deep": "#9E0F1A",
    "ink": "#1E1E1E",
    "white": "#FFFFFF",
    "soft": "#FFF2F3",
    "neutral": "#F5F5F5",
    "muted": "#626262",
    "paper": "#F3ECE3",
    "cream": "#FAF6EF",
    "line": "#D8CEC3",
}

FONT_SERIF = "Georgia, 'Times New Roman', serif"
FONT_SANS = "'Helvetica Neue', Arial, sans-serif"


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content.strip() + "\n", encoding="utf-8")


def defs() -> str:
    return f"""
  <defs>
    <linearGradient id="paperWash" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FAF6EF"/>
      <stop offset="0.55" stop-color="#F0E7DC"/>
      <stop offset="1" stop-color="#E8DDD0"/>
    </linearGradient>
    <linearGradient id="redWash" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#E11D2A"/>
      <stop offset="1" stop-color="#9E0F1A"/>
    </linearGradient>
    <linearGradient id="inkWash" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2A2724"/>
      <stop offset="1" stop-color="#141312"/>
    </linearGradient>
    <filter id="softShadow" x="-30%" y="-30%" width="160%" height="170%">
      <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#1E1E1E" flood-opacity="0.18"/>
    </filter>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="table" tableValues="0 0.045"/></feComponentTransfer>
    </filter>
    <pattern id="fineGrid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M30 0H0V30" fill="none" stroke="#1E1E1E" stroke-opacity="0.06" stroke-width="1"/>
    </pattern>
  </defs>
"""


def grain_rect(w: int, h: int) -> str:
    return f'<rect width="{w}" height="{h}" filter="url(#grain)" opacity="0.7"/>'


def mark(x: int, y: int, scale: float = 1.0, color: str = PALETTE["red"]) -> str:
    return f"""
  <g transform="translate({x} {y}) scale({scale})">
    <rect width="44" height="44" fill="{color}"/>
    <path d="M10 15c4-1 7 .1 12 3.4v15c-5-3.3-8-4.4-12-3.4V15Z" fill="#fff" opacity="0.98"/>
    <path d="M34 15c-4-1-7 .1-12 3.4v15c5-3.3 8-4.4 12-3.4V15Z" fill="#fff" opacity="0.7"/>
  </g>
  """


def hero_art() -> str:
    w, h = 1200, 1400
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-labelledby="title desc">
  <title id="title">Editorial publishing still life placeholder</title>
  <desc id="desc">Layered books, paper, and typography in the Thec red and near-black palette. This is designed placeholder artwork for future brand photography.</desc>
  {defs()}
  <rect width="{w}" height="{h}" fill="url(#paperWash)"/>
  <rect x="0" y="0" width="{w}" height="{h}" fill="url(#fineGrid)" opacity="0.35"/>
  <circle cx="970" cy="310" r="235" fill="{PALETTE['red']}" opacity="0.96"/>
  <path d="M0 1010 C260 940 450 1110 710 1030 C930 960 1050 980 1200 920 L1200 1400 L0 1400Z" fill="#E8DDD0"/>
  <text x="70" y="92" font-family="{FONT_SANS}" font-size="15" letter-spacing="4.8" fill="{PALETTE['ink']}">THEC WRITERS &amp; PUBLISHERS</text>
  <text x="70" y="122" font-family="{FONT_SANS}" font-size="13" letter-spacing="2.2" fill="{PALETTE['muted']}">KEFFI · NIGERIA · EST. 2024</text>

  <g transform="translate(150 270) rotate(-7 270 400)" filter="url(#softShadow)">
    <rect x="0" y="0" width="470" height="660" fill="url(#inkWash)"/>
    <rect x="0" y="0" width="32" height="660" fill="{PALETTE['red']}"/>
    <text x="70" y="100" font-family="{FONT_SANS}" font-size="14" letter-spacing="4" fill="#EDE4D8">A THEC PUBLICATION</text>
    <line x1="70" y1="132" x2="400" y2="132" stroke="#EDE4D8" stroke-opacity="0.3"/>
    <text x="68" y="250" font-family="{FONT_SERIF}" font-size="88" fill="#FAF6EF">Ideas</text>
    <text x="68" y="334" font-family="{FONT_SERIF}" font-style="italic" font-size="76" fill="#E11D2A">in</text>
    <text x="68" y="420" font-family="{FONT_SERIF}" font-size="88" fill="#FAF6EF">print.</text>
    <path d="M70 500h220" stroke="{PALETTE['red']}" stroke-width="6"/>
    <text x="70" y="550" font-family="{FONT_SANS}" font-size="16" letter-spacing="1.3" fill="#C9BFB3">STORIES · KNOWLEDGE · CULTURE</text>
    <text x="70" y="606" font-family="{FONT_SANS}" font-size="12" letter-spacing="2.4" fill="#8E857B">COVER STUDY / PLACEHOLDER</text>
  </g>

  <g transform="translate(650 190) rotate(9 220 330)" filter="url(#softShadow)">
    <rect width="410" height="620" fill="#FAF6EF"/>
    <rect x="0" y="0" width="410" height="20" fill="{PALETTE['red']}"/>
    <text x="52" y="105" font-family="{FONT_SANS}" font-size="13" letter-spacing="3.5" fill="{PALETTE['muted']}">THE AFRICAN IMAGINATION</text>
    <text x="50" y="235" font-family="{FONT_SERIF}" font-size="77" fill="{PALETTE['ink']}">Our</text>
    <text x="50" y="315" font-family="{FONT_SERIF}" font-size="77" fill="{PALETTE['ink']}">words,</text>
    <text x="50" y="395" font-family="{FONT_SERIF}" font-size="77" fill="{PALETTE['deep']}">our</text>
    <text x="50" y="475" font-family="{FONT_SERIF}" font-style="italic" font-size="77" fill="{PALETTE['deep']}">world.</text>
    <line x1="52" y1="525" x2="155" y2="525" stroke="{PALETTE['ink']}" stroke-width="2"/>
    <text x="52" y="565" font-family="{FONT_SANS}" font-size="12" letter-spacing="2.4" fill="{PALETTE['muted']}">COVER STUDY / PLACEHOLDER</text>
  </g>

  <g transform="translate(255 960)">
    <g filter="url(#softShadow)">
      <rect x="0" y="150" width="610" height="72" fill="#1E1E1E"/>
      <rect x="0" y="150" width="26" height="72" fill="#9E0F1A"/>
      <rect x="18" y="80" width="570" height="70" fill="#F8F1E7"/>
      <rect x="18" y="80" width="22" height="70" fill="#E11D2A"/>
      <rect x="36" y="18" width="520" height="62" fill="#D9CFC2"/>
    </g>
    <text x="58" y="196" font-family="{FONT_SANS}" font-size="12" letter-spacing="3.2" fill="#F8F1E7">THE PUBLISHING HOUSE FOR AFRICAN IDEAS</text>
  </g>

  <g transform="translate(852 885) rotate(-13)">
    <rect width="260" height="356" fill="#FFFDF9" filter="url(#softShadow)"/>
    <path d="M28 38h204M28 58h160M28 78h184M28 98h144M28 118h190M28 138h170M28 158h198M28 178h128M28 198h170" stroke="#CBBFB2" stroke-width="4"/>
    <path d="M60 240l40 18-26 34 68-8-22 38" fill="none" stroke="{PALETTE['red']}" stroke-width="4" stroke-linecap="round"/>
  </g>

  <g transform="translate(70 1240)">
    <rect width="700" height="78" fill="{PALETTE['red']}"/>
    <text x="34" y="34" font-family="{FONT_SANS}" font-size="12" letter-spacing="3" fill="#fff">DESIGNED IMAGE PLACEHOLDER</text>
    <text x="34" y="59" font-family="{FONT_SANS}" font-size="15" fill="#fff" opacity="0.9">Replace with genuine Thec publishing photography.</text>
  </g>
</svg>"""


def about_art() -> str:
    w, h = 1200, 900
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-labelledby="title desc">
  <title id="title">Thec editorial studio placeholder</title>
  <desc id="desc">A top-down designed study of a manuscript, pencil, book blocks, and a red bookmark. This is intentional placeholder art for future company photography.</desc>
  {defs()}
  <rect width="{w}" height="{h}" fill="url(#paperWash)"/>
  <rect width="{w}" height="{h}" fill="url(#fineGrid)" opacity="0.28"/>
  <rect x="0" y="0" width="22" height="900" fill="{PALETTE['red']}"/>
  <text x="76" y="82" font-family="{FONT_SANS}" font-size="13" letter-spacing="4" fill="{PALETTE['muted']}">THE WORKING STUDIO / KEFFI</text>
  <text x="76" y="128" font-family="{FONT_SERIF}" font-size="40" fill="{PALETTE['ink']}">Where ideas take shape.</text>

  <g transform="translate(632 176) rotate(8)" filter="url(#softShadow)">
    <rect width="340" height="460" fill="#FAF6EF"/>
    <rect x="0" y="0" width="340" height="16" fill="{PALETTE['red']}"/>
    <text x="42" y="84" font-family="{FONT_SANS}" font-size="11" letter-spacing="2" fill="{PALETTE['muted']}">MANUSCRIPT / DRAFT 03</text>
    <text x="42" y="145" font-family="{FONT_SERIF}" font-size="43" fill="{PALETTE['ink']}">A story</text>
    <text x="42" y="192" font-family="{FONT_SERIF}" font-size="43" fill="{PALETTE['ink']}">worth</text>
    <text x="42" y="239" font-family="{FONT_SERIF}" font-style="italic" font-size="43" fill="{PALETTE['deep']}">telling.</text>
    <path d="M42 286h238M42 306h190M42 326h220M42 346h160" stroke="#CFC2B4" stroke-width="4"/>
    <path d="M42 382h118" stroke="{PALETTE['red']}" stroke-width="3"/>
  </g>

  <g transform="translate(94 275) rotate(-9)" filter="url(#softShadow)">
    <rect width="500" height="470" fill="#FFFDF9"/>
    <path d="M60 90h380M60 118h300M60 146h354M60 174h380M60 202h280M60 230h340" stroke="#C6B8A9" stroke-width="5"/>
    <path d="M60 310h220M60 338h292M60 366h180" stroke="#C6B8A9" stroke-width="5"/>
    <path d="M285 282l23 23-50 50-32 7 7-32 52-48Z" fill="none" stroke="{PALETTE['red']}" stroke-width="5" stroke-linejoin="round"/>
    <path d="M60 420h380" stroke="{PALETTE['red']}" stroke-width="2" opacity="0.45"/>
  </g>

  <g transform="translate(710 676) rotate(-4)">
    <rect x="0" y="70" width="390" height="52" fill="#1E1E1E"/>
    <rect x="16" y="22" width="360" height="48" fill="#9E0F1A"/>
    <rect x="34" y="0" width="336" height="22" fill="#D7CAB9"/>
    <rect x="354" y="22" width="22" height="100" fill="{PALETTE['red']}"/>
  </g>

  <g transform="translate(280 750)">
    <rect width="330" height="46" fill="{PALETTE['ink']}"/>
    <text x="20" y="28" font-family="{FONT_SANS}" font-size="11" letter-spacing="2.7" fill="#FAF6EF">STUDIO STUDY · DESIGNED PLACEHOLDER</text>
  </g>
  {grain_rect(w, h)}
</svg>"""


def book_cover(title: str, author: str, variant: int) -> str:
    designs = [
        ("#F6F0E6", "#1E1E1E", "#E11D2A", "#9E0F1A"),
        ("#9E0F1A", "#FAF6EF", "#E11D2A", "#1E1E1E"),
        ("#1E1E1E", "#F6F0E6", "#E11D2A", "#9E0F1A"),
        ("#FFF2F3", "#1E1E1E", "#E11D2A", "#9E0F1A"),
        ("#F5F5F5", "#1E1E1E", "#E11D2A", "#626262"),
        ("#2A1517", "#F6F0E6", "#D9AFA3", "#E11D2A"),
        ("#E8DDD0", "#1E1E1E", "#9E0F1A", "#E11D2A"),
        ("#FFFFFF", "#1E1E1E", "#E11D2A", "#9E0F1A"),
    ]
    bg, ink, accent, secondary = designs[variant % len(designs)]
    words = title.upper().split()
    if len(words) == 1:
        lines = [words[0]]
    elif len(words) == 2:
        lines = words
    else:
        lines = [" ".join(words[: len(words) // 2]), " ".join(words[len(words) // 2 :])]
    font_size = 94 if max(len(line) for line in lines) <= 8 else 78
    title_x = 72
    title_y = 450 if len(lines) == 1 else 415
    title_svg = "".join(
        f'<text x="{title_x}" y="{title_y + i * (font_size + 8)}" font-family="{FONT_SERIF}" font-size="{font_size}" fill="{ink}" letter-spacing="-2">{html.escape(line)}</text>'
        for i, line in enumerate(lines)
    )

    motifs = {
        0: f'<circle cx="620" cy="250" r="150" fill="{accent}" opacity="0.92"/><path d="M470 250h300" stroke="{bg}" stroke-width="8"/>',
        1: f'<path d="M0 805 L800 620 L800 745 L0 930Z" fill="{secondary}" opacity="0.24"/><path d="M70 820h260" stroke="{ink}" stroke-width="3" opacity="0.6"/>',
        2: f'<rect x="0" y="815" width="800" height="385" fill="{accent}" opacity="0.96"/><text x="70" y="1045" font-family="{FONT_SANS}" font-size="20" letter-spacing="7" fill="#FAF6EF">A THEC PUBLICATION</text>',
        3: f'<circle cx="650" cy="930" r="190" fill="none" stroke="{accent}" stroke-width="2"/><circle cx="650" cy="930" r="130" fill="none" stroke="{accent}" stroke-width="2"/><circle cx="650" cy="930" r="70" fill="{accent}" opacity="0.9"/>',
        4: f'<g opacity="0.85">{"".join(f"<path d=M70 {870+i*22}h660 stroke={secondary} stroke-width=2 opacity=0.4 />" for i in range(8))}</g><rect x="70" y="820" width="250" height="7" fill="{accent}"/>',
        5: f'<path d="M70 865 C240 800 400 950 730 840" fill="none" stroke="{accent}" stroke-width="2"/><path d="M70 900 C280 845 430 970 730 880" fill="none" stroke="{accent}" stroke-width="2" opacity="0.6"/><circle cx="630" cy="850" r="50" fill="{accent}" opacity="0.9"/>',
        6: f'<path d="M0 900 L800 760 L800 1200 L0 1200Z" fill="{secondary}" opacity="0.12"/><rect x="70" y="858" width="660" height="1" fill="{ink}" opacity="0.4"/>',
        7: f'<rect x="0" y="0" width="800" height="18" fill="{accent}"/><text x="70" y="1020" font-family="{FONT_SERIF}" font-size="220" fill="{secondary}" opacity="0.08" font-style="italic">E</text><path d="M70 862h95" stroke="{accent}" stroke-width="9"/>',
    }

    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" role="img" aria-labelledby="title desc">
  <title id="title">Placeholder cover artwork for {html.escape(title)}</title>
  <desc id="desc">An original typographic placeholder design. It is not the published cover and should be replaced with the approved cover artwork.</desc>
  <rect width="800" height="1200" fill="{bg}"/>
  {motifs[variant % len(motifs)]}
  <g transform="translate(68 72)">
    <rect width="32" height="32" fill="{accent}"/>
    <path d="M7 11c3-.8 6 .1 9 2.5v11c-4-2.4-6-3.2-9-2.5V11Z" fill="#fff" opacity="0.95"/>
    <path d="M25 11c-3-.8-6 .1-9 2.5v11c4-2.4 6-3.2 9-2.5V11Z" fill="#fff" opacity="0.65"/>
  </g>
  <text x="116" y="95" font-family="{FONT_SANS}" font-size="17" letter-spacing="3.5" fill="{ink}">THEC</text>
  <text x="68" y="155" font-family="{FONT_SANS}" font-size="12" letter-spacing="3" fill="{ink}" opacity="0.62">WRITERS &amp; PUBLISHERS</text>
  {title_svg}
  <text x="72" y="{title_y + len(lines) * (font_size + 8) + 42}" font-family="{FONT_SANS}" font-size="15" letter-spacing="3.2" fill="{ink}" opacity="0.72">{html.escape(author.upper())}</text>
  <line x1="72" y1="1122" x2="728" y2="1122" stroke="{ink}" stroke-opacity="0.3"/>
  <text x="72" y="1153" font-family="{FONT_SANS}" font-size="11" letter-spacing="2.4" fill="{ink}" opacity="0.62">PLACEHOLDER COVER ARTWORK</text>
  <text x="728" y="1153" text-anchor="end" font-family="{FONT_SANS}" font-size="11" letter-spacing="2.4" fill="{ink}" opacity="0.62">NOT FINAL</text>
</svg>"""


def team_portrait(name: str, role: str, initials: str, variant: int) -> str:
    tones = [("#E8DDD0", "#1E1E1E"), ("#F2E6E5", "#1E1E1E"), ("#E6E2DC", "#1E1E1E")]
    bg, ink = tones[variant % len(tones)]
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" role="img" aria-labelledby="title desc">
  <title id="title">Portrait placeholder for {html.escape(name)}</title>
  <desc id="desc">A typographic placeholder for a real team photograph. No portrait of a person is shown.</desc>
  <rect width="800" height="1000" fill="{bg}"/>
  <rect x="0" y="0" width="18" height="1000" fill="#E11D2A"/>
  <path d="M80 80h36M80 80v36M720 80h-36M720 80v36M80 920h36M80 920v-36M720 920h-36M720 920v-36" stroke="{ink}" stroke-width="2" opacity="0.45"/>
  <text x="400" y="430" text-anchor="middle" font-family="{FONT_SERIF}" font-size="270" fill="{ink}" opacity="0.18">{html.escape(initials)}</text>
  <circle cx="400" cy="350" r="150" fill="none" stroke="#E11D2A" stroke-width="2" opacity="0.6"/>
  <text x="400" y="620" text-anchor="middle" font-family="{FONT_SANS}" font-size="13" letter-spacing="5" fill="#9E0F1A">PORTRAIT PLACEHOLDER</text>
  <text x="400" y="690" text-anchor="middle" font-family="{FONT_SERIF}" font-size="46" fill="{ink}">{html.escape(name)}</text>
  <text x="400" y="733" text-anchor="middle" font-family="{FONT_SANS}" font-size="14" letter-spacing="2.2" fill="{ink}" opacity="0.6">{html.escape(role.upper())}</text>
  <line x1="300" y1="780" x2="500" y2="780" stroke="{ink}" stroke-opacity="0.35"/>
  <text x="400" y="826" text-anchor="middle" font-family="{FONT_SANS}" font-size="11" letter-spacing="2.5" fill="{ink}" opacity="0.5">A REAL PHOTOGRAPH HAS NOT BEEN SUPPLIED</text>
  <text x="400" y="862" text-anchor="middle" font-family="{FONT_SANS}" font-size="11" letter-spacing="2.5" fill="{ink}" opacity="0.5">REPLACE VIA public/images/team/</text>
</svg>"""


def service_art(number: str, title: str, variant: int) -> str:
    motifs = [
        f"""
        <g transform="translate(660 220) rotate(7)">
          <rect width="330" height="430" fill="#FFFDF9" filter="url(#softShadow)"/>
          <path d="M40 70h240M40 98h190M40 126h250M40 154h220M40 182h160" stroke="#C9BCAD" stroke-width="5"/>
          <path d="M40 260h180M40 288h240M40 316h120" stroke="#C9BCAD" stroke-width="5"/>
          <path d="M260 350l22 22-49 49-31 7 7-31 51-47Z" fill="none" stroke="#E11D2A" stroke-width="5"/>
        </g>
        <circle cx="850" cy="205" r="120" fill="#E11D2A" opacity="0.95"/>
        """,
        f"""
        <g transform="translate(600 180) rotate(-5)">
          <rect width="420" height="480" fill="#FFFDF9" filter="url(#softShadow)"/>
          <path d="M50 90h300M50 124h230M50 158h320M50 192h280M50 226h320M50 260h210" stroke="#C9BCAD" stroke-width="5"/>
          <path d="M50 340h130" stroke="#E11D2A" stroke-width="4"/>
          <path d="M270 330l55 22M300 310l-8 62M330 335l21 14" stroke="#9E0F1A" stroke-width="4" stroke-linecap="round"/>
          <text x="50" y="402" font-family="Georgia, serif" font-size="34" font-style="italic" fill="#9E0F1A">clarity.</text>
        </g>
        """,
        f"""
        <g transform="translate(610 210)">
          <rect x="0" y="90" width="430" height="280" fill="#1E1E1E" filter="url(#softShadow)"/>
          <rect x="32" y="42" width="366" height="42" fill="#FAF6EF"/>
          <rect x="32" y="42" width="366" height="6" fill="#E11D2A"/>
          <path d="M32 380h366" stroke="#1E1E1E" stroke-width="2" opacity="0.25"/>
          <path d="M75 430v40M420 430v40M75 452h-28M448 452h-28M75 452v25M448 452v25" stroke="#9E0F1A" stroke-width="2"/>
          <text x="58" y="242" font-family="{FONT_SANS}" font-size="13" letter-spacing="4" fill="#FAF6EF">PRINT READY</text>
          <text x="58" y="292" font-family="{FONT_SERIF}" font-size="46" fill="#FAF6EF">Form &amp; finish</text>
        </g>
        <rect x="720" y="110" width="230" height="230" fill="#E11D2A" opacity="0.9"/>
        """,
        f"""
        <g transform="translate(700 140)">
          <rect width="300" height="450" rx="16" fill="#1E1E1E" filter="url(#softShadow)"/>
          <rect x="18" y="38" width="264" height="360" rx="3" fill="#FAF6EF"/>
          <rect x="42" y="68" width="128" height="170" fill="#E11D2A"/>
          <path d="M54 206h104M54 220h88" stroke="#fff" stroke-width="3"/>
          <text x="54" y="110" font-family="{FONT_SERIF}" font-size="22" fill="#fff">IDEAS</text>
          <path d="M52 270h190M52 290h150M52 310h190M52 330h112" stroke="#BFB2A4" stroke-width="3"/>
          <circle cx="150" cy="428" r="6" fill="#FAF6EF" opacity="0.4"/>
        </g>
        <g opacity="0.7"><circle cx="760" cy="190" r="230" fill="none" stroke="#9E0F1A" stroke-width="1"/><circle cx="760" cy="190" r="280" fill="none" stroke="#9E0F1A" stroke-width="1"/></g>
        """,
        f"""
        <g transform="translate(700 270)">
          <circle cx="0" cy="0" r="250" fill="none" stroke="#9E0F1A" stroke-width="1" opacity="0.45"/>
          <circle cx="0" cy="0" r="190" fill="none" stroke="#9E0F1A" stroke-width="1" opacity="0.65"/>
          <circle cx="0" cy="0" r="130" fill="#E11D2A" opacity="0.96"/>
          <path d="M-65 -38v90h22l52 30V-68L-43-38h-22Z" fill="#FAF6EF"/>
          <path d="M42-28c15 9 24 19 24 31s-9 22-24 31" fill="none" stroke="#FAF6EF" stroke-width="5" stroke-linecap="round"/>
        </g>
        <path d="M1010 70v180M940 160h140" stroke="#9E0F1A" stroke-width="1" opacity="0.4"/>
        """,
        f"""
        <g transform="translate(570 280)">
          <rect width="500" height="300" fill="#1E1E1E" filter="url(#softShadow)"/>
          <path d="M45 90v120M75 60v180M105 110v80M135 75v150M165 95v110M195 55v190M225 80v140M255 110v80M285 70v160M315 96v108M345 50v200M375 90v120M405 115v70M435 70v160" stroke="#E11D2A" stroke-width="6" stroke-linecap="round"/>
          <text x="45" y="252" font-family="{FONT_SANS}" font-size="12" letter-spacing="4" fill="#FAF6EF">VOICE → TEXT</text>
        </g>
        <rect x="960" y="160" width="170" height="170" fill="#9E0F1A" opacity="0.9"/>
        """,
    ]
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-labelledby="title desc">
  <title id="title">Designed placeholder image for {html.escape(title)}</title>
  <desc id="desc">Abstract editorial publishing artwork for the {html.escape(title)} service. This is an intentional placeholder for future service photography.</desc>
  {defs()}
  <rect width="1200" height="800" fill="url(#paperWash)"/>
  <rect width="1200" height="800" fill="url(#fineGrid)" opacity="0.3"/>
  <rect x="0" y="0" width="18" height="800" fill="{PALETTE['red']}"/>
  <text x="70" y="94" font-family="{FONT_SANS}" font-size="12" letter-spacing="4" fill="{PALETTE['muted']}">THEC / PUBLISHING SERVICES</text>
  <text x="70" y="218" font-family="{FONT_SERIF}" font-size="126" fill="{PALETTE['ink']}" opacity="0.13">{html.escape(number)}</text>
  {motifs[variant % len(motifs)]}
  <text x="70" y="650" font-family="{FONT_SANS}" font-size="13" letter-spacing="3" fill="{PALETTE['deep']}">SERVICE {html.escape(number)}</text>
  <text x="70" y="706" font-family="{FONT_SERIF}" font-size="50" fill="{PALETTE['ink']}">{html.escape(title)}</text>
  <text x="70" y="752" font-family="{FONT_SANS}" font-size="11" letter-spacing="2.3" fill="{PALETTE['muted']}">DESIGNED IMAGE PLACEHOLDER · REPLACE WITH BRAND PHOTOGRAPHY</text>
  {grain_rect(1200, 800)}
</svg>"""


def blog_art() -> str:
    w, h = 1400, 900
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-labelledby="title desc">
  <title id="title">Manuscript to book editorial placeholder</title>
  <desc id="desc">An open manuscript on the left and a finished dark book on the right, joined by a red editorial line. Designed placeholder artwork for the blog.</desc>
  {defs()}
  <rect width="{w}" height="{h}" fill="url(#paperWash)"/>
  <rect width="{w}" height="{h}" fill="url(#fineGrid)" opacity="0.28"/>
  <rect x="0" y="0" width="18" height="900" fill="{PALETTE['red']}"/>
  <text x="80" y="96" font-family="{FONT_SANS}" font-size="13" letter-spacing="4" fill="{PALETTE['muted']}">THE THEC EDITORIAL DESK</text>
  <text x="80" y="152" font-family="{FONT_SERIF}" font-size="38" fill="{PALETTE['ink']}">From manuscript to book.</text>

  <g transform="translate(80 240)">
    <path d="M0 0 C150-30 290-10 400 40 L400 500 C290 450 150 430 0 460Z" fill="#FFFDF9" filter="url(#softShadow)"/>
    <path d="M400 40 C510-10 650-30 800 0 L800 460 C650 430 510 450 400 500Z" fill="#FFFDF9" filter="url(#softShadow)"/>
    <path d="M60 100h260M60 130h220M60 160h280M60 190h200M60 220h260M60 250h240" stroke="#C8B9A9" stroke-width="5"/>
    <path d="M60 340h190M60 370h250M60 400h160" stroke="#C8B9A9" stroke-width="5"/>
    <path d="M460 100h260M460 130h220M460 160h280M460 190h200M460 220h240" stroke="#C8B9A9" stroke-width="5"/>
    <path d="M460 340h130" stroke="{PALETTE['red']}" stroke-width="4"/>
    <path d="M540 388l58 22-55 40" fill="none" stroke="{PALETTE['red']}" stroke-width="4" stroke-linecap="round"/>
  </g>

  <g transform="translate(980 240) rotate(-5 150 240)" filter="url(#softShadow)">
    <rect width="300" height="480" fill="url(#inkWash)"/>
    <rect x="0" y="0" width="24" height="480" fill="{PALETTE['red']}"/>
    <text x="54" y="82" font-family="{FONT_SANS}" font-size="11" letter-spacing="3" fill="#D8CCBE">THE FINISHED BOOK</text>
    <text x="52" y="205" font-family="{FONT_SERIF}" font-size="50" fill="#FAF6EF">Your</text>
    <text x="52" y="258" font-family="{FONT_SERIF}" font-size="50" fill="#FAF6EF">story,</text>
    <text x="52" y="311" font-family="{FONT_SERIF}" font-style="italic" font-size="50" fill="{PALETTE['red']}">held.</text>
    <path d="M54 360h130" stroke="{PALETTE['red']}" stroke-width="5"/>
    <text x="54" y="430" font-family="{FONT_SANS}" font-size="10" letter-spacing="2" fill="#B9AEA2">PLACEHOLDER ARTWORK</text>
  </g>

  <g transform="translate(760 650)">
    <rect width="540" height="44" fill="{PALETTE['red']}"/>
    <text x="20" y="27" font-family="{FONT_SANS}" font-size="11" letter-spacing="2.7" fill="#fff">DESIGNED BLOG IMAGE PLACEHOLDER</text>
  </g>
  {grain_rect(w, h)}
</svg>"""


def careers_art() -> str:
    w, h = 1400, 900
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-labelledby="title desc">
  <title id="title">Thec careers bookshelf placeholder</title>
  <desc id="desc">A designed bookshelf illustration with book spines in neutral tones and one red volume. This is intentional placeholder artwork for careers photography.</desc>
  {defs()}
  <rect width="{w}" height="{h}" fill="url(#paperWash)"/>
  <rect width="{w}" height="{h}" fill="url(#fineGrid)" opacity="0.25"/>
  <rect x="0" y="0" width="18" height="900" fill="{PALETTE['red']}"/>
  <text x="76" y="90" font-family="{FONT_SANS}" font-size="13" letter-spacing="4" fill="{PALETTE['muted']}">BUILD THE NEXT CHAPTER</text>
  <text x="76" y="147" font-family="{FONT_SERIF}" font-size="40" fill="{PALETTE['ink']}">A team for African ideas.</text>

  <g transform="translate(80 235)">
    <rect x="0" y="0" width="800" height="480" fill="#E8DDD0" filter="url(#softShadow)"/>
    <path d="M0 150h800M0 310h800M0 470h800" stroke="#1E1E1E" stroke-width="8"/>
    <rect x="38" y="30" width="56" height="120" fill="#9E0F1A"/>
    <rect x="104" y="48" width="34" height="102" fill="#1E1E1E"/>
    <rect x="148" y="24" width="70" height="126" fill="#FAF6EF"/>
    <rect x="228" y="59" width="42" height="91" fill="#D9C9B7"/>
    <rect x="280" y="40" width="58" height="110" fill="#2A2724"/>
    <rect x="348" y="18" width="38" height="132" fill="#E11D2A"/>
    <rect x="396" y="62" width="74" height="88" fill="#FAF6EF"/>
    <rect x="480" y="35" width="45" height="115" fill="#1E1E1E"/>
    <rect x="535" y="55" width="60" height="95" fill="#C9B6A3"/>
    <rect x="605" y="26" width="36" height="124" fill="#9E0F1A"/>
    <rect x="651" y="46" width="52" height="104" fill="#FAF6EF"/>
    <rect x="713" y="34" width="42" height="116" fill="#1E1E1E"/>

    <rect x="34" y="330" width="48" height="140" fill="#1E1E1E"/>
    <rect x="92" y="352" width="64" height="118" fill="#FAF6EF"/>
    <rect x="166" y="322" width="38" height="148" fill="#E11D2A"/>
    <rect x="214" y="344" width="52" height="126" fill="#C9B6A3"/>
    <rect x="276" y="360" width="66" height="110" fill="#9E0F1A"/>
    <rect x="352" y="330" width="42" height="140" fill="#FAF6EF"/>
    <rect x="404" y="352" width="58" height="118" fill="#1E1E1E"/>
    <rect x="472" y="318" width="36" height="152" fill="#D9C9B7"/>
  </g>

  <g transform="translate(960 260) rotate(6)">
    <rect width="310" height="440" fill="#1E1E1E" filter="url(#softShadow)"/>
    <text x="34" y="68" font-family="{FONT_SANS}" font-size="11" letter-spacing="3" fill="#B9AEA2">NOW HIRING</text>
    <text x="34" y="150" font-family="{FONT_SERIF}" font-size="62" fill="#FAF6EF">Add</text>
    <text x="34" y="212" font-family="{FONT_SERIF}" font-size="62" fill="#FAF6EF">your</text>
    <text x="34" y="274" font-family="{FONT_SERIF}" font-style="italic" font-size="62" fill="{PALETTE['red']}">voice.</text>
    <line x1="34" y1="322" x2="276" y2="322" stroke="#FAF6EF" stroke-opacity="0.3"/>
    <text x="34" y="360" font-family="{FONT_SANS}" font-size="12" letter-spacing="2" fill="#B9AEA2">KEFFI · NASARAWA STATE</text>
    <text x="34" y="402" font-family="{FONT_SANS}" font-size="10" letter-spacing="2" fill="#8C8278">DESIGNED PLACEHOLDER ARTWORK</text>
  </g>

  <g transform="translate(74 776)">
    <rect width="450" height="44" fill="{PALETTE['red']}"/>
    <text x="20" y="27" font-family="{FONT_SANS}" font-size="11" letter-spacing="2.7" fill="#fff">DESIGNED CAREERS IMAGE PLACEHOLDER</text>
  </g>
  {grain_rect(w, h)}
</svg>"""


def brand_logo() -> str:
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 160" role="img" aria-labelledby="title">
  <title id="title">Thec Writers &amp; Publishers logo</title>
  <rect width="112" height="112" x="12" y="24" fill="{PALETTE['red']}"/>
  <path d="M35 60c12-3 21 .3 34 9.6v38c-13-9.3-22-12.3-34-9.6V60Z" fill="#fff"/>
  <path d="M101 60c-12-3-21 .3-34 9.6v38c13-9.3 22-12.3 34-9.6V60Z" fill="#fff" opacity="0.7"/>
  <text x="150" y="83" font-family="Arial, sans-serif" font-size="50" font-weight="800" letter-spacing="-1.5" fill="{PALETTE['ink']}">THEC<tspan fill="{PALETTE['red']}">.</tspan></text>
  <text x="152" y="113" font-family="Arial, sans-serif" font-size="16" letter-spacing="4.7" fill="{PALETTE['muted']}">WRITERS &amp; PUBLISHERS</text>
</svg>"""


def favicon() -> str:
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="{PALETTE['red']}"/>
  <path d="M13 20c8-2 14 .5 19 6v23c-8-5.5-14-7.5-19-5.5V20Z" fill="#fff"/>
  <path d="M51 20c-8-2-14 .5-19 6v23c8-5.5 14-7.5 19-5.5V20Z" fill="#fff" opacity="0.7"/>
</svg>"""


def build() -> None:
    write(IMAGES / "hero" / "hero-editorial.svg", hero_art())
    write(IMAGES / "hero" / "about-studio.svg", about_art())
    write(IMAGES / "brand" / "logo.svg", brand_logo())
    write(IMAGES / "brand" / "favicon.svg", favicon())
    write(IMAGES / "blog" / "manuscript-to-book.svg", blog_art())
    write(IMAGES / "careers" / "careers-shelf.svg", careers_art())

    book_records = [
        ("Fund It", "Author to be confirmed", 0),
        ("Second Halve", "Author to be confirmed", 1),
        ("Tyrannus", "Author to be confirmed", 2),
        ("Wisdom", "Author to be confirmed", 3),
        ("Logistics", "Author to be confirmed", 4),
        ("Palace of Thieves", "Author to be confirmed", 5),
        ("Whisper in Bukavu", "Author to be confirmed", 6),
        ("Extra Ordinary", "Author to be confirmed", 7),
    ]
    for title, author, variant in book_records:
        slug = title.lower().replace(" ", "-")
        write(IMAGES / "books" / f"{slug}.svg", book_cover(title, author, variant))

    team_records = [
        ("Paul Elijah", "Founder & Chief Executive Officer", "PE", 0, "paul-elijah"),
        ("Joshua Caleb Mechi", "Human Resources", "JM", 1, "joshua-caleb-mechi"),
        ("Aardhan Abdull", "Project Manager", "AA", 2, "aardhan-abdull"),
    ]
    for name, role, initials, variant, slug in team_records:
        write(IMAGES / "team" / f"{slug}.svg", team_portrait(name, role, initials, variant))

    service_records = [
        ("01", "Ghostwriting", 0, "ghostwriting"),
        ("02", "Editing & Proofreading", 1, "editing-proofreading"),
        ("03", "Printing & Consultation", 2, "printing-publishing-consultation"),
        ("04", "Digital Publishing & ISBN", 3, "digital-publishing-isbn"),
        ("05", "Marketing & Distribution", 4, "book-marketing-distribution"),
        ("06", "Transcription", 5, "transcription"),
    ]
    for number, title, variant, slug in service_records:
        write(IMAGES / "services" / f"{slug}.svg", service_art(number, title, variant))

    write(IMAGES / "README.md", image_readme())


def image_readme() -> str:
    return """# Image library

All imagery on the website is local. Nothing is loaded from an external CMS,
remote image host, or another website.

## Folders

| Folder | Purpose | Recommended replacement |
| --- | --- | --- |
| `brand/` | Approved logo artwork and brand files. | Replace `logo.svg` only when an official master file is approved. The live header uses the same mark in code. |
| `hero/` | Homepage hero artwork. | Use a high-resolution landscape or portrait publishing photograph, ideally 1600–2400px on the long edge. Keep the focal point near the centre. |
| `team/` | Team portraits. | Replace each SVG with a real JPG/WebP portrait with the person’s permission. Use a 4:5 portrait crop. Update the path in `src/content/team.ts` and set `imagePlaceholder: false`. |
| `services/` | Service editorial imagery. | Replace with relevant publishing/work photography. Landscape 3:2 works best. Update the image path in `src/content/services.ts`. |
| `books/` | Book cover images. | Replace each placeholder SVG with the approved cover. A 2:3 portrait ratio is best (for example 1200×1800px). Update `cover` and `coverAlt` in `src/content/books.ts`, then set `placeholder: false`. |
| `blog/` | Blog featured images. | Use a 16:10 or 3:2 image, ideally 1600px wide. Update `image`, `imageAlt`, and `imageCaption` in the article frontmatter. |
| `careers/` | Careers page imagery. | Replace with genuine team/office photography. Landscape 3:2 works best. |

## Current status

The designed SVG files in `hero/`, `team/`, `services/`, `books/`, `blog/`,
and `careers/` are **intentional placeholders**. The interface labels them as
placeholders. They are original artwork created for this build, not photographs
of real people or approved book covers.

Do not present a placeholder as evidence of a real team member, a published
cover, or genuine company photography.

## File rules

- Use relative local paths that start with `/images/`.
- Prefer `.webp` or `.jpg` for photographs. SVG is suitable for artwork and
  placeholders.
- Use lowercase, hyphenated filenames, for example `team-paul-elijah.webp`.
- Keep filenames unique and descriptive.
- Optimise photographs before upload. Aim for under 300KB where practical.
- Always write useful alt text. Describe the image, not the filename.
- When replacing a book cover or team portrait, update the content file and
  remove the placeholder label.
"""


if __name__ == "__main__":
    build()

