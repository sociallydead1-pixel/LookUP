const STARS = [
  {
    name: "Reconnecting",
    x: 18,
    y: 8,
    memory: {
      title: "First great timing",
      text: "I never knew that a text so small can make a huge difference. remember the time near new years where you lost my account and then I texted? the joy in your text, the way you thought I logged off of discord, triple texted in the same second and its in fact, not a bad thing at all. The only question is, how would I leave the most important person I know and log off?",
      image: null
    }
  },
  {
    name: "ANYWAYS, GUYS",
    x: 40,
    y: 14,
    memory: {
      title: "Acheivment unlocked: best friends",
      text: "I can't even count how many times we said this, the inside jokes, the random words and key smashes, and that quiet comfortable moments that we built out of nowhere. It's weird how someone you knew online could matter so much, you were like... a bright light for me, shining.",
      image: null
    }
  },
  {
    name: "Lil therapist",
    x: 62,
    y: 11,
    memory: {
      title: "A Quiet Trust",
      text: "We both started at some point trusting each other with our daily lives, problems, urges. You always helped me so much, I lost count of how many times you talked to me through really hard times. You were always the therapist friend, even though you needed help yourself. I still remember the first time you helped me. (Life is like that sometimes. But trust me, this isn't permanent. Together we can go through it all. What you experience now will be useful in the future. And the future holds complete happiness for you. ofc I'm not a palm reader bro.)",
      image: null
    }
  },
  {
    name: "Ride or die",
    x: 78,
    y: 22,
    memory: {
      title: "First memory",
      text: "One of the reasons I believe in the butterfly effect, without you making that GC, we wouldn't have met. We wouldn't have made all of our inside jokes, known about each other's problems, or even stayed friends for all this time. I'd never forget the first time we talked.",
      image: null
    }
  },
  {
    name: "caught off guard",
    x: 25,
    y: 32,
    memory: {
      title: "unexpected comfort",
      text: "You have no idea, the amount of times you comforted me made such a difference. Something in your words sometimes burns the back of my eyes for some reason. I hated it. No one ever did that. No one took the time and effort to write an insanely long paragraph, and it always threw me off. But, it still made a huge difference, you don't even know.",
      image: null
    }
  },
  {
    name: "Late Nghts",
    x: 55,
    y: 40,
    memory: {
      title: "Achievement unlocked: sleep deprivation",
      text: "Is it wrong? Yes. Is it unhealthy? Of course. Am I gonna stop talking? Totally not. It always feels fun to stay up and talk together. It doesn't matter the topic, what we're doing, what's happening. You could be gaming, I could be listening to music, or even doing art. We know that we got each other. through the good and bad stuff.",
      image: null
    }
  },
  {
    name: "YOU'RE BACKKK",
    x: 14,
    y: 52,
    memory: {
      title: "Growing more comfortable with each other.",
      text: "From texting every minute, to sharing playlists, to random photos. Things that built more trust without us realizing. And at this point. I like it, I like how we communicate without being too... scared or worried, with trust and understanding. You know, not a lot of people do that, not a lot of people care this way. But, ehh. You. Are. An. Amazing. Person.",
      image: null
    }
  },
  {
    name: "Promises",
    x: 72,
    y: 58,
    memory: {
      title: "Achievement unlocked: Waiting",
      text: "I don't even know what to say about this. First off, I felt like it was impossible, like it could never happen, and I shouldn't get too hopeful about it. I doubted it a lot, maybe too much. But then, I didn't? You gave me that hope first, Rao, and I don't wanna lose it. I don't mind fighting for it, helping you with the things standing in your way. Just like you always do. I... I am starting to believe your promises more.",
      image: null
    }
  },
  {
    name: "Irelanddd",
    x: 42,
    y: 68,
    memory: {
      title: "man hater loll",
      text: "Trust me, I still don't understand that day, it confuses me so much. I didn't mean to send that thing, and it gave so many hints, I wanna hide under a rock. But I think you got some reassurance from it, that there's something worth it. And I was real about it; it means a lot. You mean a lot. and like Mariam said before, (it was gonna be said anyways, it just happened by accident. automatically done for you.)",
      image: null
    }
  },
  {
    name: "You",
    x: 30,
    y: 80,
    memory: {
      title: "June 25th, 2026",
      text: "So. Hope I didn't cause any tears? good. I wanted this gift to be special, something you'd remember and that really matters. I wanted to give you at least the whole world, or something tangible, at least. But I couldn't. So, I brought the stars. I really hope you do like it. I hope it makes you feel happier, cared for, appreciated, and wanted. I know I'm usually bad with words, so I hope I didn't mess up anything, and if I did, I'm sorry. I wanna wish you a nice, special birthday, and I want you to be happier this year. Okay, my lil bud? and, by the way, there is one last star, can you find it?",
      image: null
    }
  }
];

const CONSTELLATION_LINES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 4],
  [4, 5],
  [5, 6],
  [5, 7],
  [7, 8],
  [8, 9],
  [6, 9]
];



const SECRET_STAR = {
  x: 87,
  y: 45,
  label: "✦",            
  destination: "./outro.html" 
};


const SKY_CONFIG = {

  skyHeight: 4,


  bgStarCount: 340,

  
  lineOpacity: 0.25
};


const page = document.body.className;


/* ==========================================================
   PAGE TRANSITIONS — fade out before navigating, fade in on load
   ========================================================== */
initPageTransitions();

function initPageTransitions() {
  /* Intercept every internal link click and fade out before leaving */
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    /* Only intercept same-site .html links */
    if (!href || (!href.startsWith('./') && !href.endsWith('.html'))) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      /* ── Stamp the exact song position so the next page resumes mid-track ── */
      const aud = document.getElementById('bg-music');
      if (aud && !aud.paused) {
        sessionStorage.setItem('musicTime', aud.currentTime);
      }
      document.body.classList.add('page-fade-out');
      setTimeout(() => { window.location.href = href; }, 380);
    });
  });
}


/* ==========================================================
   MUSIC TOGGLE — auto-plays throughout the whole site
   ========================================================== */
initMusicToggle();

function initMusicToggle() {
  const audio = document.getElementById('bg-music');
  const btn   = document.getElementById('music-toggle');
  if (!audio || !btn) return;

  /* Default to ON. Only false when the visitor deliberately pauses. */
  let playing = sessionStorage.getItem('musicPlaying') !== 'false';

  /* ── Restore exact playback position saved by initPageTransitions ── */
  const savedTime = parseFloat(sessionStorage.getItem('musicTime') || '0');
  if (savedTime > 0) {
    /* Seek as soon as the browser has enough metadata to accept a seek */
    const doSeek = () => {
      audio.currentTime = savedTime;
      sessionStorage.removeItem('musicTime');
    };
    if (audio.readyState >= 1) {
      doSeek();
    } else {
      audio.addEventListener('loadedmetadata', doSeek, { once: true });
    }
  }

  function applyState(save) {
    btn.classList.toggle('playing', playing);
    if (save) sessionStorage.setItem('musicPlaying', playing);
    if (playing) {
      audio.play().catch(() => {
        /* Browser blocked autoplay — start on the very next user gesture */
        const startOnGesture = () => {
          if (playing) audio.play().catch(() => {});
          document.removeEventListener('click',      startOnGesture);
          document.removeEventListener('keydown',    startOnGesture);
          document.removeEventListener('touchstart', startOnGesture);
        };
        document.addEventListener('click',      startOnGesture, { once: true });
        document.addEventListener('keydown',    startOnGesture, { once: true });
        document.addEventListener('touchstart', startOnGesture, { once: true, passive: true });
      });
    } else {
      audio.pause();
    }
  }

  applyState(false);

  btn.addEventListener('click', e => {
    e.stopPropagation();
    playing = !playing;
    applyState(true);
  });
}


/* ==========================================================
   PAGE 1 & 3 — Animated background canvas (fixed)
   ========================================================== */
if (page === 'page-intro' || page === 'page-outro') {
  initBgCanvas();
  if (page === 'page-intro') initIntroParticles();
}

function initBgCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  const bgStars = [];

  function resize() {
    width  = canvas.width  = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); generateBgStars(); });

  function generateBgStars() {
    bgStars.length = 0;
    for (let i = 0; i < 200; i++) {
      bgStars.push({
        x:       Math.random() * width,
        y:       Math.random() * height,
        r:       Math.random() * 1.2 + 0.2,
        opacity: Math.random() * 0.7 + 0.1,
        speed:   Math.random() * 0.012 + 0.004,
        phase:   Math.random() * Math.PI * 2
      });
    }
  }
  generateBgStars();

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, width, height);
    t += 0.008;
    bgStars.forEach(s => {
      const alpha = s.opacity * (0.6 + 0.4 * Math.sin(t * s.speed * 80 + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220, 215, 255, ${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

function initIntroParticles() {
  const container = document.getElementById('intro-particles');
  if (!container) return;
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left   = Math.random() * 100 + 'vw';
    p.style.bottom = '-4px';
    p.style.setProperty('--drift', (Math.random() * 40 - 20) + 'px');
    p.style.animationDuration  = (Math.random() * 14 + 10) + 's';
    p.style.animationDelay     = (Math.random() * 12) + 's';
    container.appendChild(p);
  }
}


/* ==========================================================
   PAGE 2 — CONSTELLATION SKY
   ========================================================== */
if (page === 'page-stars') {
  initStarsPage();
}

function initStarsPage() {
  const starField = document.getElementById('star-field');
  const skyCanvas = document.getElementById('sky-canvas');
  const scrollHint = document.getElementById('scroll-hint');
  if (!starField || !skyCanvas) return;

  /* --- Set sky height --- */
  const skyH = window.innerHeight * SKY_CONFIG.skyHeight;
  starField.style.height = skyH + 'px';

  /* --- Background canvas --- */
  const ctx = skyCanvas.getContext('2d');
  skyCanvas.width  = window.innerWidth;
  skyCanvas.height = skyH;

  /* Generate random tiny background stars */
  const bgStars = Array.from({ length: SKY_CONFIG.bgStarCount }, () => ({
    x:       Math.random() * skyCanvas.width,
    y:       Math.random() * skyH,
    r:       Math.random() * 1.4 + 0.15,
    opacity: Math.random() * 0.8 + 0.1,
    speed:   Math.random() * 0.02 + 0.005,
    phase:   Math.random() * Math.PI * 2
  }));

  /* --- Compute pixel positions for each star --- */
  function starPx(star) {
    return {
      px: (star.x / 100) * skyCanvas.width,
      py: (star.y / 100) * skyH
    };
  }

  /* --- Draw sky canvas (background stars + constellation lines) --- */
  let t = 0;
  function drawSky() {
    ctx.clearRect(0, 0, skyCanvas.width, skyH);
    t += 0.005;

    /* Background stars */
    bgStars.forEach(s => {
      const alpha = s.opacity * (0.55 + 0.45 * Math.sin(t * s.speed * 60 + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(210, 208, 255, ${alpha})`;
      ctx.fill();
    });

    /* Constellation lines */
    ctx.strokeStyle = `rgba(196, 170, 255, ${SKY_CONFIG.lineOpacity})`;
    ctx.lineWidth   = 1;
    ctx.setLineDash([4, 8]);
    CONSTELLATION_LINES.forEach(([a, b]) => {
      if (!STARS[a] || !STARS[b]) return;
      const from = starPx(STARS[a]);
      const to   = starPx(STARS[b]);
      ctx.beginPath();
      ctx.moveTo(from.px, from.py);
      ctx.lineTo(to.px,   to.py);
      ctx.stroke();
    });
    ctx.setLineDash([]);

    requestAnimationFrame(drawSky);
  }
  drawSky();

  /* --- Create clickable star elements --- */
  STARS.forEach((star, i) => {
    const el = createStarElement(star, i, skyH, false);
    starField.appendChild(el);
  });

  /* --- Create the secret star --- */
  const secretEl = createSecretStarElement(skyH);
  starField.appendChild(secretEl);

  /* --- Scroll hint fade --- */
  let hintHidden = false;
  window.addEventListener('scroll', () => {
    if (!hintHidden && window.scrollY > 80) {
      scrollHint.classList.add('hidden');
      hintHidden = true;
    }
  }, { passive: true });

  /* --- Modal logic --- */
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  function openModal(star) {
    document.getElementById('modal-star-name').textContent = star.name;
    document.getElementById('modal-title').textContent     = star.memory.title;
    document.getElementById('modal-text').textContent      = star.memory.text;

    const imgWrap = document.getElementById('modal-image-wrap');
    const img     = document.getElementById('modal-image');

    if (star.memory.image) {
      img.src = star.memory.image;
      img.alt = star.memory.title;
      imgWrap.style.display = 'block';
    } else {
      imgWrap.style.display = 'none';
      img.src = '';
    }

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  /* Expose openModal for star elements */
  window._openMemoryModal = openModal;

  /* --- Handle resize --- */
  window.addEventListener('resize', () => {
    skyCanvas.width  = window.innerWidth;
    starField.style.height = (window.innerHeight * SKY_CONFIG.skyHeight) + 'px';
    skyCanvas.height = parseFloat(starField.style.height);
    /* Re-position all star elements */
    document.querySelectorAll('.star-point').forEach(el => {
      const idx = el.dataset.index;
      if (idx === 'secret') {
        el.style.left = SECRET_STAR.x + '%';
        el.style.top  = SECRET_STAR.y + '%';
      } else {
        const s = STARS[parseInt(idx, 10)];
        if (s) {
          el.style.left = s.x + '%';
          el.style.top  = s.y + '%';
        }
      }
    });
  });
}

/* --- Build a regular star DOM element --- */
function createStarElement(star, index, skyH, _unused) {
  const el = document.createElement('div');
  el.className    = 'star-point';
  el.dataset.index = index;
  el.style.left   = star.x + '%';
  el.style.top    = star.y + '%';

  /* Stagger the pulse animation so all stars don't beat in sync */
  el.innerHTML = `
    <div class="star-ring"></div>
    <div class="star-dot" style="animation-delay:${(index * 0.37).toFixed(2)}s"></div>
    <div class="star-label">${star.name}</div>
  `;

  el.addEventListener('click', () => {
    el.classList.add('clicked');
    setTimeout(() => el.classList.remove('clicked'), 600);
    if (window._openMemoryModal) window._openMemoryModal(star);
  });

  return el;
}

/* --- Build the secret star DOM element (shooting star) --- */
function createSecretStarElement(skyH) {
  const el = document.createElement('div');
  el.className     = 'star-point star-secret';
  el.dataset.index = 'secret';
  el.style.left    = SECRET_STAR.x + '%';
  el.style.top     = SECRET_STAR.y + '%';

  /*
   * Structure:
   *  .star-point.star-secret
   *    .shooting-star-inner   ← does the periodic shoot animation
   *      .shooting-tail       ← the glowing streak behind the head
   *      .star-ring           ← click ripple
   *      .star-dot            ← the bright head
   *    .star-label            ← label shown on hover
   */
  el.innerHTML = `
    <div class="shooting-star-inner">
      <div class="shooting-tail"></div>
      <div class="star-ring"></div>
      <div class="star-dot"></div>
    </div>
    <div class="star-label">${SECRET_STAR.label}</div>
  `;

  el.addEventListener('click', () => {
    el.classList.add('clicked');
    /* Fade to white before navigating */
    const fade = document.createElement('div');
    fade.style.cssText = 'position:fixed;inset:0;background:white;opacity:0;transition:opacity 0.8s ease;z-index:9999;pointer-events:none;';
    document.body.appendChild(fade);
    requestAnimationFrame(() => {
      fade.style.opacity = '1';
      setTimeout(() => { window.location.href = SECRET_STAR.destination; }, 800);
    });
  });

  return el;
}
