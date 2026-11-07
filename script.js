/* ---------- Content ---------- */
const THEMES = [
  { bg1: '#ffd6e8', bg2: '#c9f0ff', accent: '#ff4f8b', accent2: '#6a5cff', ink: '#2b1b3d', card: 'rgba(255,255,255,.72)' },
  { bg1: '#fff1b8', bg2: '#ffc9a3', accent: '#ff7a1a', accent2: '#0f9d8a', ink: '#3b2410', card: 'rgba(255,255,255,.72)' },
  { bg1: '#c8fff0', bg2: '#bcd8ff', accent: '#ff5d73', accent2: '#0a7fa8', ink: '#0d2b3e', card: 'rgba(255,255,255,.7)' },
  { bg1: '#e6d4ff', bg2: '#ffd1f0', accent: '#8a3ffc', accent2: '#ff8a00', ink: '#2a1458', card: 'rgba(255,255,255,.72)' },
  { bg1: '#f0ffb8', bg2: '#b8ffe0', accent: '#ff3d81', accent2: '#1a9e5c', ink: '#17381f', card: 'rgba(255,255,255,.72)' },
  { bg1: '#1b1640', bg2: '#4a1d6b', accent: '#ffd166', accent2: '#ff6b9a', ink: '#f6efff', card: 'rgba(255,255,255,.1)' },
];
const HEADS = ['Fredoka', 'Baloo 2', 'Outfit'];
const GREETS = [
  'Warm up those fingers.', 'Ready when you are.', 'Every keystroke counts.',
  'Fresh colors, fresh words.', 'Let the keys do the talking.', 'Today is a good day to beat yesterday.',
];

const PARAS = [
  "The old lighthouse stood at the edge of the cliff, its lamp turning slowly through the evening fog. Fishermen knew its rhythm by heart, and every night it guided them safely back to the harbor.",
  "A small bakery on the corner opens before sunrise. By six o'clock the street smells of warm bread, cinnamon, and fresh coffee, and the first customers line up with sleepy smiles.",
  "Learning to type quickly is a lot like learning to ride a bicycle. At first you wobble and stop often, but with patience and practice your hands start moving smoothly without any effort.",
  "Rain tapped softly on the window while the city slowed down. Somewhere a violin played, a kettle whistled, and for a moment everything felt calm, quiet, and exactly as it should be.",
  "The explorers climbed for three days before reaching the summit. From the top, the valley looked like a patchwork quilt, and the rivers shimmered like silver threads in the afternoon light.",
  "Good habits are built one day at a time. Ten focused minutes of practice may seem small, yet over a month they add up to hours of progress that you can see and feel.",
  "In the garden, bees hummed between lavender and sunflowers while a gentle breeze moved the tall grass. Children chased butterflies, and the whole afternoon felt golden and unhurried.",
  "Space travel once belonged only to dreamers and writers. Today, engineers calculate orbits with careful precision, proving that imagination, when combined with hard work, can leave the ground.",
  "The market was loud, bright, and full of life. Vendors shouted prices, spices filled the air with rich aromas, and baskets overflowed with mangoes, peppers, lemons, and fresh green herbs.",
  "When the power went out, the whole family gathered around a single candle. They told stories, played word games, and laughed until midnight, and nobody missed the screens at all.",
  "A river does not rush to reach the sea. It bends around stones, gathers strength from small streams, and keeps moving, and that steady persistence is how it carves canyons over time.",
  "Typing accurately matters more than typing fast. Speed grows naturally once your fingers trust the keyboard, so keep your eyes on the words and let your rhythm settle in.",
];

const QUOTES = [
  ['It does not matter how slowly you go as long as you do not stop.', 'Confucius'],
  ['A journey of a thousand miles begins with a single step.', 'Lao Tzu'],
  ['The future belongs to those who believe in the beauty of their dreams.', 'Eleanor Roosevelt'],
  ['Whether you think you can or you think you can\u2019t, you\u2019re right.', 'Henry Ford'],
  ['The secret of getting ahead is getting started.', 'Mark Twain'],
  ['Small steps every day lead to big results.', 'TypeBloom'],
  ['Practice does not make perfect. Perfect practice makes perfect.', 'Vince Lombardi'],
  ['You are braver than you believe and stronger than you seem.', 'A. A. Milne'],
  ['Progress, not perfection.', 'TypeBloom'],
];

const ADVICE = {
  accuracy: [
    'Your speed is fine, but mistakes are slowing you down. Drop your pace by about 10% and aim for 97% accuracy before chasing speed.',
    'Look at the screen, not at your hands, and read a few words ahead. Clean typing builds speed far faster than rushing does.',
    'When you slip, use Backspace calmly and keep your rhythm. Frantic corrections cause more errors than the original typo.',
  ],
  slow: [
    'Rest your fingers on the home row (ASDF JKL;) and let each finger own its keys. Even 10 minutes a day will lift your speed noticeably.',
    'Type in a steady rhythm instead of in bursts. Consistent, even keystrokes are the foundation of fast typing.',
    'Relax your shoulders and wrists. Tension kills speed, so keep your hands light and let the keys do the work.',
  ],
  mid: [
    'Good pace! To break past 70 WPM, practice the letter pairs you hesitate on and type whole words as one motion.',
    'Try typing by word, not by letter. Your brain can chunk common words like \u201cthe\u201d and \u201cand\u201d into single movements.',
    'Take a longer round next time. Endurance matters, and your accuracy at minute five says more than your first minute.',
  ],
  fast: [
    'Excellent speed with strong accuracy. Challenge yourself with the 7 minute round to build stamina and consistency.',
    'You are in the top tier. Focus on punctuation and capital letters now, since that is where fast typists lose their flow.',
    'Great work! Keep your posture and breaks in check so this speed stays comfortable over long sessions.',
  ],
};

/* ---------- Helpers ---------- */
const $ = s => document.querySelector(s);
const pick = a => a[Math.floor(Math.random() * a.length)];
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const fmt = s => { s = Math.ceil(s); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
const quoteHTML = q => `\u201c${q[0]}\u201d<cite>${q[1]}</cite>`;
const show = id => { document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === id)); };

/* ---------- Fresh look on every visit ---------- */
(function applyTheme() {
  const root = document.documentElement.style;
  Object.entries(pick(THEMES)).forEach(([k, v]) => root.setProperty('--' + k, v));
  root.setProperty('--head', `'${pick(HEADS)}'`);
  for (let i = 1; i <= 3; i++) {
    root.setProperty('--x' + i, (Math.random() * 80 - 10) + 'vw');
    root.setProperty('--y' + i, (Math.random() * 80 - 10) + 'vh');
  }
  $('#greeting').textContent = pick(GREETS);
  $('#homeQuote').innerHTML = quoteHTML(pick(QUOTES));
})();

/* ---------- Test engine ---------- */
const passage = $('#passage');
let pool = [], chars = [], status = [];
let idx = 0, total = 0, errs = 0, correct = 0;
let dur = 0, startT = 0, timer = null, mode = 'idle'; // idle | ready | run | done

function addText(str) {
  for (const ch of str) {
    const s = document.createElement('span');
    s.textContent = ch;
    passage.appendChild(s);
    chars.push(s);
    status.push(null);
  }
}
function addParagraph() {
  if (!pool.length) pool = shuffle(PARAS);
  addText((chars.length ? ' ' : '') + pool.pop());
}
function moveCursor() {
  passage.querySelector('.cur')?.classList.remove('cur');
  if (chars.length - idx < 260) addParagraph();
  const c = chars[idx];
  c.classList.add('cur');
  passage.scrollTop = Math.max(0, c.offsetTop - passage.clientHeight / 2.6);
}

function startTest(minutes) {
  clearInterval(timer);
  dur = minutes * 60; mode = 'ready';
  idx = total = errs = correct = 0; chars = []; status = []; pool = [];
  passage.innerHTML = ''; passage.scrollTop = 0;
  addParagraph(); addParagraph();
  $('#time').textContent = fmt(dur); $('#wpm').textContent = '0'; $('#acc').textContent = '100%';
  $('#progress').style.width = '0';
  moveCursor();
  show('test');
}

const accuracy = () => total ? Math.round((total - errs) / total * 100) : 100;
const calcWpm = sec => sec < 1 ? 0 : Math.round(correct / 5 / (sec / 60));

function tick() {
  const el = (performance.now() - startT) / 1000;
  const left = Math.max(0, dur - el);
  $('#time').textContent = fmt(left);
  $('#progress').style.width = Math.min(100, el / dur * 100) + '%';
  $('#wpm').textContent = calcWpm(el);
  $('#acc').textContent = accuracy() + '%';
  if (left <= 0) finish();
}

function finish() {
  clearInterval(timer); mode = 'done';
  const w = calcWpm(dur), a = accuracy();
  $('#rWpm').textContent = w;
  $('#rAcc').textContent = a + '%';
  $('#rChars').textContent = correct;
  $('#rErrs').textContent = errs;
  const tier = a < 92 ? 'accuracy' : w < 40 ? 'slow' : w < 70 ? 'mid' : 'fast';
  $('#advice').textContent = pick(ADVICE[tier]);
  $('#rQuote').innerHTML = quoteHTML(pick(QUOTES));
  $('#share').textContent = 'Copy my score';
  show('results');
  confetti();
}

document.addEventListener('keydown', e => {
  if (mode !== 'ready' && mode !== 'run') return;
  if (e.key === 'Escape') { startTest(dur / 60); return; }
  if (e.ctrlKey || e.metaKey || e.altKey) return;

  if (e.key === 'Backspace') {
    e.preventDefault();
    if (idx === 0) return;
    idx--;
    if (status[idx] === 'ok') correct--;
    status[idx] = null;
    chars[idx].className = '';
    moveCursor();
  } else if (e.key.length === 1) {
    e.preventDefault();
    if (mode === 'ready') { mode = 'run'; startT = performance.now(); timer = setInterval(tick, 200); }
    total++;
    const hit = e.key === chars[idx].textContent;
    if (hit) correct++; else errs++;
    status[idx] = hit ? 'ok' : 'bad';
    chars[idx].className = hit ? 'ok' : 'bad';
    idx++;
    moveCursor();
  }
});

/* ---------- Buttons ---------- */
document.querySelectorAll('.durations button').forEach(b =>
  b.addEventListener('click', () => startTest(+b.dataset.min)));
$('#again').addEventListener('click', () => startTest(dur / 60));
$('#change').addEventListener('click', () => { mode = 'idle'; $('#homeQuote').innerHTML = quoteHTML(pick(QUOTES)); show('setup'); });

$('#share').addEventListener('click', () => {
  const msg = `I just typed ${$('#rWpm').textContent} WPM at ${$('#rAcc').textContent} accuracy on TypeBloom, built by KING_YOSEF_ \u{1F451}`;
  const done = () => { $('#share').textContent = 'Copied!'; setTimeout(() => { $('#share').textContent = 'Copy my score'; }, 1800); };
  if (navigator.clipboard) navigator.clipboard.writeText(msg).then(done).catch(() => {});
});

/* ---------- Celebration ---------- */
function confetti() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cols = ['--accent', '--accent2', '--ok'].map(v => getComputedStyle(document.documentElement).getPropertyValue(v).trim());
  for (let i = 0; i < 45; i++) {
    const d = document.createElement('i');
    d.className = 'conf';
    d.style.left = Math.random() * 100 + 'vw';
    d.style.background = pick(cols);
    d.style.animationDuration = 2 + Math.random() * 2.5 + 's';
    d.style.animationDelay = Math.random() * .6 + 's';
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 5500);
  }
}

/* Signature */
console.log('%cTypeBloom by KING_YOSEF_ \u{1F451}', 'font-size:14px;font-weight:bold;color:#ff4f8b');