const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// 1. Tema (default gelap, tersimpan di browser)
const toggle = document.getElementById('theme-toggle');
let saved = 'dark';
try { saved = localStorage.getItem('theme') || 'dark'; } catch (e) {}
root.setAttribute('data-theme', saved);
toggle.textContent = saved === 'dark' ? '☾' : '☀';
toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
  toggle.textContent = next === 'dark' ? '☾' : '☀';
});

// 2. Efek mengetik
const words = ['mahasiswa Sistem Informasi', 'fullstack web developer', 'pembangun toko buku online', 'pembelajar yang suka ngoding'];
const typed = document.getElementById('typed');
let w = 0, c = 0, del = false;
function type() {
  const word = words[w];
  typed.textContent = word.slice(0, c);
  if (!del && c === word.length) { del = true; return setTimeout(type, 1400); }
  if (del && c === 0) { del = false; w = (w + 1) % words.length; }
  c += del ? -1 : 1;
  setTimeout(type, del ? 35 : 70);
}
reduce ? (typed.textContent = words[0]) : type();

// 3. Sorotan kursor
const glow = document.querySelector('.glow');
addEventListener('pointermove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// 4. Partikel latar
const cv = document.getElementById('bg'), ctx = cv.getContext('2d');
let pts = [];
function resize() {
  cv.width = innerWidth; cv.height = innerHeight;
  pts = Array.from({ length: Math.min(60, Math.floor(innerWidth / 24)) }, () => ({
    x: Math.random() * cv.width, y: Math.random() * cv.height,
    vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3
  }));
}
function draw() {
  ctx.clearRect(0, 0, cv.width, cv.height);
  const light = root.getAttribute('data-theme') === 'light';
  const rgb = light ? '60,62,70' : '190,193,202';
  pts.forEach((p, i) => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > cv.width) p.vx *= -1;
    if (p.y < 0 || p.y > cv.height) p.vy *= -1;
    ctx.fillStyle = `rgba(${rgb},.5)`;
    ctx.beginPath(); ctx.arc(p.x, p.y, 1.4, 0, 7); ctx.fill();
    for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(p.x - pts[j].x, p.y - pts[j].y);
      if (d < 120) {
        ctx.strokeStyle = `rgba(${rgb},${.12 * (1 - d / 120)})`;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
      }
    }
  });
  requestAnimationFrame(draw);
}
resize(); addEventListener('resize', resize);
if (!reduce) draw();

// 5. Muncul saat scroll + hitung statistik
function count(el) {
  const target = +el.dataset.count; let n = 0;
  const step = () => { n += Math.max(1, target / 40); el.textContent = Math.min(Math.round(n), target); if (n < target) requestAnimationFrame(step); };
  step();
}
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
}), { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
const io2 = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { count(e.target); io2.unobserve(e.target); }
}));
document.querySelectorAll('[data-count]').forEach(el => io2.observe(el));

// 6. Filter proyek
const chips = document.querySelectorAll('.chip');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  const f = chip.dataset.filter;
  document.querySelectorAll('.card').forEach(card =>
    card.classList.toggle('hide', f !== 'all' && !card.dataset.cat.split(' ').includes(f)));
}));

// 7. Foto yang tidak ditemukan disembunyikan, bukan rusak
document.querySelectorAll('img').forEach(img => img.addEventListener('error', () => img.style.visibility = 'hidden'));
document.getElementById('year').textContent = new Date().getFullYear();
