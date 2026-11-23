'use strict';
/* ==========================================================================
   NOSSO UNIVERSO ❤️ — script.js
   --------------------------------------------------------------------------
   👉 Para personalizar o site, edite SOMENTE o objeto CONFIG abaixo.
      Todo o resto do código lê as informações daqui.
   ========================================================================== */

const CONFIG = {
  /* ---------- Quem é quem ---------- */
  NOME_DELA: 'Giovanna',
  NOME_DELE: 'Cristian',

  /* ---------- Acesso ---------- */
  SENHA_LOGIN: '23/09/2026',                 // aceita também "23092026"
  DICA_SENHA: 'Dica: é o dia em que a gente começou a namorar, Giovanna ✨',
  LEMBRAR_ACESSO: true,                      // true = não pede a senha de novo neste aparelho (abra com #reset no fim do link para zerar)

  /* ---------- Abertura romântica (aparece logo depois da senha certa) ---------- */
  INTRO_FRASES: [
    'Oi, Giovanna.',
    'Eu sabia que você ia lembrar dessa data. 🤍',
    'Fiz este lugar inteirinho só pra você.',
    'Cada detalhe aqui guarda um pedacinho de nós dois.',
    'Aumenta o som, fecha os olhos por um segundo…',
    'e vem comigo. Com todo o meu amor, Cristian ♥',
  ],

  /* ---------- Datas ---------- */
  // Use o formato AAAA-MM-DDTHH:MM:SS (com o "T") para respeitar o fuso do Brasil
  DATA_INICIO_RELACIONAMENTO: '2026-09-23T00:00:00',

  /* ---------- Home ---------- */
  FOTO_PRINCIPAL: { src: 'fotos/nos-1.jpg', legenda: 'Cristian & Giovanna ♥' },
  DECLARACAO: 'Giovanna, você é a minha pessoa favorita, o meu lugar seguro e o meu sonho mais bonito. Este cantinho foi feito só pra você: das risadas, dos abraços, dos planos e de cada segundo em que eu agradeço por ter você.',

  /* ---------- Música ---------- */
  // 1) Coloque os MP3 na pasta "musicas/" com exatamente estes nomes.
  // 2) Opcional: coloque a capa de cada música em "capas/" e preencha "capa".
  //    Sem capa, o site gera uma capinha própria com as cores do site.
  // A música começa quando ela acerta a senha e pode ser pausada a qualquer momento.
  URL_MUSICA: 'musicas/perfect.mp3',         // usada se a PLAYLIST estiver vazia
  PLAYLIST: [
    { titulo: 'Perfect', artista: 'Ed Sheeran', src: 'musicas/perfect.mp3', capa: '' },
    { titulo: 'All of Me', artista: 'John Legend', src: 'musicas/all-of-me.mp3', capa: '' },
    { titulo: 'Thinking Out Loud', artista: 'Ed Sheeran', src: 'musicas/thinking-out-loud.mp3', capa: '' },
    { titulo: "Can't Help Falling in Love", artista: 'Elvis Presley', src: 'musicas/cant-help-falling-in-love.mp3', capa: '' },
    { titulo: 'A Thousand Years', artista: 'Christina Perri', src: 'musicas/a-thousand-years.mp3', capa: '' },
    { titulo: 'Make You Feel My Love', artista: 'Adele', src: 'musicas/make-you-feel-my-love.mp3', capa: '' },
    { titulo: 'Just the Way You Are', artista: 'Bruno Mars', src: 'musicas/just-the-way-you-are.mp3', capa: '' },
    { titulo: 'Die With A Smile', artista: 'Lady Gaga & Bruno Mars', src: 'musicas/die-with-a-smile.mp3', capa: '' },
    { titulo: 'Until I Found You', artista: 'Stephen Sanchez', src: 'musicas/until-i-found-you.mp3', capa: '' },
    { titulo: 'Lucky', artista: 'Jason Mraz & Colbie Caillat', src: 'musicas/lucky.mp3', capa: '' },
    { titulo: 'I Will Always Love You', artista: 'Whitney Houston', src: 'musicas/i-will-always-love-you.mp3', capa: '' },
    { titulo: 'Endless Love', artista: 'Lionel Richie & Diana Ross', src: 'musicas/endless-love.mp3', capa: '' },
  ],

  /* ---------- Nossa História (linha do tempo) ---------- */
  // ✏️ Ajuste as datas e os textos para os momentos reais de vocês
  EVENTOS_HISTORIA: [
    { data: '28 de junho de 2026', titulo: 'O dia em que tudo começou', descricao: 'Giovanna, foi ali que a nossa história começou. Eu ainda lembro do seu sorriso naquele dia — e de como eu não parava de pensar em você depois.', img: 'fotos/giovanna-1.jpg' },
    { data: 'Os primeiros encontros', titulo: 'Quando eu soube que era você', descricao: 'O nervosismo, a conversa que não acabava e a certeza silenciosa de que eu queria te ver de novo — e de novo.', img: 'fotos/nos-4.jpg' },
    { data: 'Noites de conversa', titulo: 'As risadas que viraram rotina', descricao: 'Aquelas noites em que a gente ria de tudo e o tempo simplesmente sumia. É com você que eu gosto de perder a hora.', img: 'fotos/juntinhos-1.jpg' },
    { data: '23 de setembro de 2026', titulo: 'O dia em que viramos nós', descricao: 'A data mágica que abriu este site: o dia em que a gente começou a namorar. Desde então, cada dia ficou mais bonito.', img: 'fotos/nos-3.jpg' },
    { data: 'Todos os dias', titulo: 'Morrendo de saudade', descricao: 'Mesmo quando a gente acabou de se ver, a saudade aparece. É assim que eu sei o tamanho do que eu sinto.', img: 'fotos/nos-2.jpg' },
    { data: 'Daqui pra frente', titulo: 'E todos os dias que virão', descricao: 'Nossa história está só no começo, e eu mal posso esperar para escrever cada capítulo com você.', img: 'fotos/juntinhos-2.jpg' },
  ],

  /* ---------- Nossos Momentos (leque 3D) ---------- */
  MOMENTOS: [
    { src: 'fotos/nos-1.jpg', legenda: 'Nós dois ♥' },
    { src: 'fotos/giovanna-1.jpg', legenda: 'A minha Giovanna' },
    { src: 'fotos/juntinhos-1.jpg', legenda: 'Rindo de tudo' },
    { src: 'fotos/nos-2.jpg', legenda: 'Do seu ladinho' },
    { src: 'fotos/cristian-ursinho.jpg', legenda: 'Seu ursinho 🐻' },
    { src: 'fotos/nos-3.jpg', legenda: 'Meu lugar favorito' },
    { src: 'fotos/giovanna-2.jpg', legenda: 'Que sorriso, hein?' },
    { src: 'fotos/juntinhos-2.jpg', legenda: 'Bobos e felizes' },
  ],

  /* ---------- Nosso Álbum (polaroids) — fotos e vídeos ---------- */
  // Para vídeo use tipo: 'video' e "poster" com a imagem de capa
  FOTOS: [
    { src: 'fotos/cristian-ursinho.jpg', legenda: 'Seu ursinho 🐻' },
    { tipo: 'video', src: 'videos/video-1.mp4', poster: 'videos/video-1.jpg', legenda: 'Nós dois, do nosso jeitinho' },
    { tipo: 'video', src: 'videos/video-2.mp4', poster: 'videos/video-2.jpg', legenda: 'Rindo juntinhos' },
  ],

  MOTIVOS_AMOR: [
    'Pelo jeito que você sorri com os olhos.',
    'Porque o seu abraço é o meu lugar favorito no mundo.',
    'Pela forma como você me escuta de verdade.',
    'Porque você torna os dias comuns inesquecíveis.',
    'Pela sua risada, que é a minha música preferida.',
    'Porque você acredita em mim até quando eu duvido.',
    'Pelo seu cheiro, que eu reconheceria em qualquer lugar.',
    'Porque com você até o silêncio é confortável.',
    'Pela coragem de ser exatamente quem você é.',
    'Porque você faz as minhas manhãs valerem a pena.',
    'Pelo jeitinho que você fala o meu nome.',
    'Porque você cuida de mim nos detalhes.',
    'Pela sua bondade com todo mundo ao seu redor.',
    'Porque cada conversa com você me ensina alguma coisa.',
    'Pela forma como você segura a minha mão.',
    'Porque você é a primeira pessoa para quem eu quero contar as novidades.',
    'Pela sua paciência comigo.',
    'Porque você transforma problema em risada.',
    'Pelo brilho que você tem quando fala do que ama.',
    'Porque você me faz querer ser alguém melhor.',
    'Pelas nossas piadas internas que ninguém mais entende.',
    'Porque o seu beijo ainda me dá frio na barriga.',
    'Pela sua força nos dias difíceis.',
    'Porque você é linda de todos os jeitos — até de pijama.',
    'Pelo jeito que você dança quando acha que ninguém está vendo.',
    'Porque você me entende só com um olhar.',
    'Pelo carinho que você tem com a minha família.',
    'Porque os seus sonhos também viraram os meus.',
    'Pela sua sinceridade, mesmo quando é difícil.',
    'Porque ao seu lado eu me sinto em casa.',
    'Pelo seu jeito de deixar tudo mais bonito.',
    'Porque você me lembra de beber água e de descansar.',
    'Pela sua inteligência, que me encanta todos os dias.',
    'Porque você torce por mim como ninguém.',
    'Pelas mensagens de bom dia que mudam o meu humor.',
    'Porque você é a minha paz no meio do caos.',
    'Pela maneira como você se importa com os outros.',
    'Porque até as nossas brigas terminam em abraço.',
    'Pelo seu sorriso logo que acorda.',
    'Porque você faz planos comigo para o futuro.',
    'Pelas suas manias, que eu amo uma por uma.',
    'Porque você é a minha melhor amiga.',
    'Pela forma como você me olha quando acha que eu não percebo.',
    'Porque você tem o coração mais bonito que eu conheço.',
    'Pelo jeito que você fica brava e linda ao mesmo tempo.',
    'Porque com você qualquer lugar vira passeio.',
    'Pela sua determinação em conquistar o que quer.',
    'Porque você me ensinou o que é amor de verdade.',
    'Pelas vezes em que você me acalmou sem dizer nada.',
    'Porque você me faz rir até a barriga doer.',
    'Pela sua voz, que me acalma no fim do dia.',
    'Porque você nunca solta a minha mão.',
    'Pelos seus abraços demorados.',
    'Porque você faz eu me sentir escolhido todos os dias.',
    'Pela sua autenticidade.',
    'Porque você é a resposta das minhas orações.',
    'Pelo seu jeito de transformar um simples café em um momento especial.',
    'Porque você lembra dos pequenos detalhes que eu conto.',
    'Pela forma leve como você encara a vida.',
    'Porque você me apoia até nas minhas loucuras.',
    'Pelo seu olhar, que diz mais que mil palavras.',
    'Porque você é linda por dentro e por fora.',
    'Pela leveza que você trouxe para a minha vida.',
    'Porque você me faz sentir sortudo todos os dias.',
    'Pela sua empatia.',
    'Porque você é o meu porto seguro.',
    'Pelo jeito que você se aninha em mim.',
    'Porque o tempo voa quando estamos juntos.',
    'Pela sua criatividade.',
    'Porque você não desiste de nós.',
    'Pelas nossas noites de filme e conversa.',
    'Porque você me mostra o lado bom das coisas.',
    'Pela sua delicadeza.',
    'Porque você me faz querer voltar para casa correndo.',
    'Pelo seu jeito único de me amar.',
    'Porque você é a pessoa mais especial que eu conheço.',
    'Pelo orgulho enorme que eu sinto de você.',
    'Porque você me dá vontade de viver cada segundo.',
    'Pela sua fé e pela sua esperança.',
    'Porque você deixa tudo mais colorido.',
    'Pelo jeito que você me acolhe nos meus piores dias.',
    'Porque o seu “eu te amo” é o meu som preferido.',
    'Pelos sonhos que ainda vamos realizar juntos.',
    'Porque eu aprendo com você todos os dias.',
    'Pela forma como você me surpreende.',
    'Porque você é a minha parceira em tudo.',
    'Pelo seu jeito de me fazer sentir importante.',
    'Porque com você eu posso ser eu mesmo.',
    'Pela sua ternura.',
    'Porque você ilumina qualquer lugar em que chega.',
    'Pela nossa história, que é a minha favorita.',
    'Porque você me faz acreditar no “para sempre”.',
    'Pelo jeito que você cuida de quem ama.',
    'Porque cada dia com você é um presente.',
    'Pela vontade que eu tenho de envelhecer ao seu lado.',
    'Porque você é exatamente o que eu sempre pedi.',
    'Pela sorte imensa de ter te encontrado.',
    'Porque o meu coração escolheu você — e escolhe de novo todo dia.',
    'Porque nenhum motivo seria suficiente para explicar.',
    'Porque você é você. E isso já é tudo.',
  ],

  /* ---------- Cartinhas de Amor ---------- */
  CARTAS: [
    {
      titulo: 'Para o amor da minha vida, Giovanna',
      data: 'De Cristian para Giovanna',
      paragrafos: [
        'Giovanna, eu fiquei pensando muito em como colocar em palavras tudo o que eu sinto por você — e descobri que não existe frase grande o suficiente. Então eu fiz este lugar, só pra você.',
        'Cada foto, cada data e cada motivo aqui dentro é um pedacinho do que você significa para mim. Você chegou de mansinho e, quando eu percebi, já era o centro do meu universo.',
        'Obrigado por cada abraço, cada risada e cada vez que você escolheu ficar. Eu escolho você hoje, amanhã e em todos os dias que ainda vamos viver.',
      ],
      assinatura: 'Com todo o meu amor, Cristian',
    },
    {
      titulo: 'Para quando bater a saudade',
      data: 'Abra quando sentir minha falta',
      paragrafos: [
        'Meu amor, se você está lendo esta carta, talvez a saudade tenha apertado. A minha aperta também — toda vez que a gente se despede, eu já fico contando as horas.',
        'Eu acredito em você mais do que você imagina. Você é forte, é linda e é capaz de coisas incríveis. E, se o mundo pesar, o meu abraço vai estar aqui, esperando por você.',
        'Fecha os olhos por um segundo e imagina que eu estou do seu lado, segurando a sua mão. Porque, no coração, eu estou. Sempre.',
      ],
      assinatura: 'Seu, em todos os dias — Cristian',
    },
    {
      titulo: 'Sobre o nosso futuro',
      data: 'Para a Giovanna ler sonhando',
      paragrafos: [
        'Eu fico imaginando a nossa casa, as manhãs preguiçosas, os cafés juntinhos e as viagens que ainda vamos fazer.',
        'Imagino a gente rindo de coisas bobas daqui a muitos anos, com as mãos entrelaçadas do mesmo jeito de hoje — e com uma árvore de Natal toda nossa, do jeitinho que você gosta.',
        'Não sei tudo o que o futuro guarda, mas sei de uma coisa: quero que ele seja com você, Giovanna. Cada plano meu tem o seu nome no meio.',
      ],
      assinatura: 'Te amo hoje e sempre. Cristian',
    },
  ],

  /* ---------- Jogo da memória ---------- */
  JOGO: {
    // fotos usadas nas cartas (cada uma vira um par)
    fotos: ['fotos/nos-1.jpg', 'fotos/giovanna-1.jpg', 'fotos/juntinhos-1.jpg', 'fotos/nos-2.jpg', 'fotos/cristian-ursinho.jpg', 'fotos/nos-3.jpg', 'fotos/giovanna-2.jpg', 'fotos/nos-4.jpg'],
    premio: 'Vale um beijo bem demorado do Cristian 😘',
  },

  /* ---------- Cantinho de Natal da Giovanna 💚 ---------- */
  // Ela ama o Grinch: coloque aqui uma foto de vocês ou de algo dela com o tema
  // (ex: 'fotos/grinch.jpg'). Se ficar vazio, aparece uma moldura natalina.
  NATAL: {
    foto: '',
    titulo: 'Feliz Natal, minha Grinch favorita 💚',
    texto: 'Eu sei que você ama o Grinch — e eu amo cada detalhe seu, até o seu lado “ranzinza” fofo. Este vai ser o nosso primeiro Natal juntos — e eu quero passar ele (e todos os próximos) roubando os seus abraços.',
  },

  /* ---------- Surpresa final ---------- */
  FOTO_SURPRESA: 'fotos/nos-2.jpg',
  FRASE_FINAL: 'Giovanna, se eu pudesse escolher novamente, escolheria você em todas as vidas.',
  MENSAGEM_FINAL: 'Eu te amo infinitamente! ❤️',
  ASSINATURA_FINAL: '— Cristian',
};

/* ==========================================================================
   A PARTIR DAQUI É O FUNCIONAMENTO DO SITE (não precisa editar)
   ========================================================================== */

/* ---------- Utilidades ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const wait = ms => new Promise(r => setTimeout(r, ms));
const rnd = (a, b) => a + Math.random() * (b - a);
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const pad = n => String(n).padStart(2, '0');
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouch = window.matchMedia('(hover: none)').matches;

const HEART_PATH = 'M50 88C22 68 4 50 4 30 4 15 15 4 29 4c9 0 16 5 21 12 5-7 12-12 21-12 14 0 25 11 25 26 0 20-18 38-46 58z';
const heartSVG = () => `<svg viewBox="0 0 100 92" aria-hidden="true"><path d="${HEART_PATH}"/></svg>`;

/* Persistência segura (funciona mesmo se o navegador bloquear o localStorage) */
const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem('nosso-universo:' + key); return v === null ? fallback : JSON.parse(v); }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem('nosso-universo:' + key, JSON.stringify(value)); } catch { /* sem persistência */ }
  },
};

/* Placeholder elegante para fotos que ainda não foram trocadas / não carregaram */
function placeholder(label = 'Sua foto aqui') {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0' stop-color='#f7c6d4'/><stop offset='.55' stop-color='#c9b6e4'/><stop offset='1' stop-color='#7a0f2e'/>
    </linearGradient></defs>
    <rect width='800' height='1000' fill='url(#g)'/>
    <g transform='translate(300 390) scale(2)' fill='rgba(255,255,255,.55)'><path d='${HEART_PATH}'/></g>
    <text x='400' y='660' font-family='Georgia,serif' font-style='italic' font-size='46' fill='#fff' text-anchor='middle'>${label}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
document.addEventListener('error', e => {
  const img = e.target;
  if (img && img.tagName === 'IMG' && !img.dataset.fallback) {
    img.dataset.fallback = '1';
    img.src = placeholder();
  }
}, true);

/* Toast (mensagens rápidas) */
function toast(msg, ms = 4200) {
  const wrap = $('#toasts');
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => { el.classList.add('is-out'); setTimeout(() => el.remove(), 450); }, ms);
}

/* ==========================================================================
   UNIVERSO 3D — partículas de corações e estrelas com projeção em perspectiva
   ========================================================================== */
const Universe = (() => {
  const canvas = $('#universe');
  const ctx = canvas.getContext('2d');
  const COLORS = ['#f7c6d4', '#ffffff', '#c9b6e4', '#e0567c', '#fde4ec'];
  const sprites = {};
  const tilt = { x: 0, y: 0, tx: 0, ty: 0 };
  let W = 0, H = 0, parts = [], raf = 0, t = 0;

  const hexA = (hex, a) => {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`;
  };

  // Pré-renderiza cada partícula uma vez (muito mais leve no celular)
  function sprite(type, color) {
    const key = type + color;
    if (sprites[key]) return sprites[key];
    const s = document.createElement('canvas');
    s.width = s.height = 64;
    const c = s.getContext('2d');
    if (type === 'star') {
      const g = c.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, 'rgba(255,255,255,1)');
      g.addColorStop(.16, color);
      g.addColorStop(.42, hexA(color, .22));
      g.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = g;
      c.fillRect(0, 0, 64, 64);
    } else {
      c.shadowColor = color;
      c.shadowBlur = 16;
      c.translate(14, 15);
      c.scale(.36, .36);
      c.fillStyle = color;
      c.fill(new Path2D(HEART_PATH));
    }
    return (sprites[key] = s);
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function seed() {
    const n = W < 640 ? 130 : 240;
    parts = Array.from({ length: n }, () => {
      const heart = Math.random() < .16;
      return {
        x: rnd(-1.7, 1.7), y: rnd(-1.7, 1.7), z: rnd(-1.7, 1.7),
        heart,
        color: heart ? pick(['#e0567c', '#f7c6d4', '#c9b6e4']) : pick(COLORS),
        size: heart ? rnd(12, 24) : rnd(2, 6),
        ph: Math.random() * Math.PI * 2,
        sp: rnd(.5, 1.5),
      };
    });
  }

  function frame() {
    t++;
    tilt.x += (tilt.tx - tilt.x) * .04;
    tilt.y += (tilt.ty - tilt.y) * .04;
    const scrollRot = window.scrollY * .00035;
    const ay = t * .0006 + tilt.x + scrollRot;
    const ax = tilt.y * .6 + scrollRot * .3;
    const cy = Math.cos(ay), sy = Math.sin(ay), cx = Math.cos(ax), sx = Math.sin(ax);
    const F = Math.max(W, H) * .85;

    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';

    for (const p of parts) {
      if (p.heart && !reduceMotion) { p.y -= .0012 * p.sp; if (p.y < -1.7) p.y = 1.7; }
      // rotação no eixo Y, depois no eixo X
      const x = p.x * cy - p.z * sy;
      let z = p.x * sy + p.z * cy;
      const y = p.y * cx - z * sx;
      z = p.y * sx + z * cx;

      const depth = z + 3;
      if (depth < .4) continue;
      const k = F / depth;
      const px = W / 2 + x * k * .5;
      const py = H / 2 + y * k * .5;
      if (px < -40 || px > W + 40 || py < -40 || py > H + 40) continue;

      const twinkle = p.heart ? 1 : .55 + .45 * Math.sin(t * .03 * p.sp + p.ph);
      const size = p.size * (3 / depth) * (p.heart ? 1.7 : 2.4);
      ctx.globalAlpha = Math.max(0, Math.min(1, 1.25 - (depth - 1.4) / 3.2)) * twinkle;
      ctx.drawImage(sprite(p.heart ? 'heart' : 'star', p.color), px - size / 2, py - size / 2, size, size);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    if (!reduceMotion) raf = requestAnimationFrame(frame);
  }

  function start() {
    resize();
    seed();
    frame();
    window.addEventListener('pointermove', e => {
      tilt.tx = (e.clientX / W - .5) * .5;
      tilt.ty = (e.clientY / H - .5) * .4;
    }, { passive: true });
    let rt;
    window.addEventListener('resize', () => {
      clearTimeout(rt);
      rt = setTimeout(() => { resize(); if (reduceMotion) frame(); }, 150);
    });
    document.addEventListener('visibilitychange', () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduceMotion) raf = requestAnimationFrame(frame);
    });
  }
  return { start };
})();

/* Coração 3D: camadas da mesma silhueta giradas em volta do eixo Y */
function buildHearts() {
  $$('[data-heart3d]').forEach(el => {
    const layers = 14;
    let html = '<div class="heart3d__beat"><div class="heart3d__spin">';
    for (let i = 0; i < layers; i++) {
      html += `<div class="heart3d__layer" style="transform:rotateY(${(i * 180 / layers).toFixed(2)}deg)">${heartSVG()}</div>`;
    }
    el.innerHTML = html + '</div></div>';
  });
}

/* Inclinação 3D que segue o mouse (desktop) */
function attachTilt(el, max = 10) {
  if (isTouch || reduceMotion || el.dataset.tilt) return;
  el.dataset.tilt = '1';
  el.addEventListener('pointermove', e => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - .5;
    const py = (e.clientY - r.top) / r.height - .5;
    el.style.setProperty('--rx', (-py * max).toFixed(2) + 'deg');
    el.style.setProperty('--ry', (px * max).toFixed(2) + 'deg');
    el.style.setProperty('--px', px.toFixed(3));
    el.style.setProperty('--py', py.toFixed(3));
    el.style.setProperty('--mx', ((px + .5) * 100).toFixed(1) + '%');
    el.style.setProperty('--my', ((py + .5) * 100).toFixed(1) + '%');
    el.classList.add('is-tilting');
  });
  el.addEventListener('pointerleave', () => {
    ['--rx', '--ry', '--px', '--py'].forEach(p => el.style.removeProperty(p));
    el.classList.remove('is-tilting');
  });
}

/* Revelação ao rolar (Intersection Observer) */
const revealer = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); revealer.unobserve(en.target); }
    }), { threshold: .15, rootMargin: '0px 0px -8% 0px' })
  : null;
const observeReveal = root => $$('.reveal', root).forEach(el => revealer ? revealer.observe(el) : el.classList.add('is-visible'));

/* ==========================================================================
   1. LOGIN
   ========================================================================== */
function initLogin(onSuccess) {
  const form = $('#loginForm'), input = $('#senha'), msg = $('#loginMsg'), card = $('.login__card');
  const isDate = /^\d{2}\/\d{2}\/\d{4}$/.test(CONFIG.SENHA_LOGIN);
  const digits = v => v.replace(/\D/g, '');
  const ERROS = [
    'Ops! Essa não é a data mágica... tente novamente meu amor 💕',
    'Hmm, quase! Pensa com o coração e tenta de novo 💭',
    CONFIG.DICA_SENHA,
  ];
  let tries = 0;

  if (!isDate) { input.placeholder = 'Sua senha'; input.removeAttribute('inputmode'); input.removeAttribute('maxlength'); }

  // Máscara dd/mm/aaaa
  input.addEventListener('input', () => {
    msg.classList.remove('is-shown');
    if (!isDate) return;
    const d = digits(input.value).slice(0, 8);
    let out = d.slice(0, 2);
    if (d.length > 2) out += '/' + d.slice(2, 4);
    if (d.length > 4) out += '/' + d.slice(4);
    input.value = out;
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = isDate
      ? digits(input.value) === digits(CONFIG.SENHA_LOGIN)
      : input.value.trim().toLowerCase() === CONFIG.SENHA_LOGIN.trim().toLowerCase();
    if (ok) {
      input.blur();
      Player.play({ quiet: true });  // a música começa no mesmo toque que libera a senha
      onSuccess();
      return;
    }

    msg.textContent = ERROS[Math.min(tries++, ERROS.length - 1)];
    msg.classList.remove('is-shown'); void msg.offsetWidth; msg.classList.add('is-shown');
    card.classList.remove('shake'); void card.offsetWidth; card.classList.add('shake');
    input.select();
  });

  setTimeout(() => { if (!isTouch) input.focus(); }, 900);
}

async function unlock(skipIntro = false) {
  const login = $('#login'), app = $('#app'), veil = $('#veil');
  if (!skipIntro) {
    if (CONFIG.LEMBRAR_ACESSO) store.set('acesso', CONFIG.SENHA_LOGIN);
    login.classList.add('is-success');
    await wait(reduceMotion ? 150 : 1100);
    await romanticIntro();
    veil.classList.add('is-on');
    await wait(reduceMotion ? 150 : 900);
    $('#intro').hidden = true;
  }
  login.hidden = true;
  document.body.classList.remove('is-locked');
  app.hidden = false;
  window.scrollTo(0, 0);
  startApp();
  requestAnimationFrame(() => requestAnimationFrame(() => {
    veil.classList.remove('is-on');
    app.classList.add('is-entered');
  }));
  if (skipIntro) setTimeout(() => Player.hintResume(), 2200);
}

/* Abertura romântica: frases uma a uma, explosão de corações e a música começando */
function romanticIntro() {
  return new Promise(resolve => {
    const intro = $('#intro'), line = $('#introLine'), burst = $('#introBurst');
    const frases = CONFIG.INTRO_FRASES || [];
    let done = false, timers = [], riseT = 0;
    const finish = () => {
      if (done) return;
      done = true;
      timers.forEach(clearTimeout);
      clearInterval(riseT);
      resolve();
    };
    const heart = (cls, vars) => {
      const h = document.createElement('span');
      h.className = cls;
      Object.entries(vars).forEach(([k, v]) => h.style.setProperty(k, v));
      h.innerHTML = heartSVG();
      h.addEventListener('animationend', e => { if (e.target === h) h.remove(); });
      burst.appendChild(h);
    };
    const colors = ['#e0567c', '#f7c6d4', '#c9b6e4', '#ffffff', '#b3123b'];

    intro.hidden = false;
    void intro.offsetWidth;
    intro.classList.add('is-on');
    $('#introSkip').addEventListener('click', finish, { once: true });

    if (!reduceMotion) {
      // explosão de corações saindo do centro
      for (let i = 0; i < 46; i++) {
        const ang = Math.random() * Math.PI * 2, dist = rnd(30, 60);
        heart('burst-heart', {
          '--s': rnd(12, 34).toFixed(0) + 'px',
          '--tx': (Math.cos(ang) * dist).toFixed(1) + 'vmax',
          '--ty': (Math.sin(ang) * dist).toFixed(1) + 'vmax',
          '--dur': rnd(1.8, 3.2).toFixed(2) + 's',
          '--spin': rnd(1.2, 3).toFixed(1) + 's',
          '--c': pick(colors),
        });
      }
      // corações subindo devagar enquanto as frases aparecem
      riseT = setInterval(() => heart('rise-heart', {
        left: rnd(0, 96) + 'vw',
        '--s': rnd(10, 26).toFixed(0) + 'px',
        '--dur': rnd(6, 10).toFixed(1) + 's',
        '--drift': rnd(-10, 10).toFixed(1) + 'vw',
        '--spin': rnd(2, 4).toFixed(1) + 's',
        '--c': pick(colors),
      }), 260);
    }

    // aviso da música tocando
    const showMusic = () => {
      if (Player.isPlaying()) {
        $('#introMusicText').textContent = 'Tocando agora: ' + Player.current().titulo;
        $('#introMusic').hidden = false;
      }
    };
    timers.push(setTimeout(showMusic, 1500));

    const STEP = reduceMotion ? 1600 : 2700;
    frases.forEach((f, i) => {
      timers.push(setTimeout(() => {
        line.classList.remove('is-in', 'is-out');
        line.textContent = f;
        void line.offsetWidth;
        line.classList.add('is-in');
      }, 900 + i * STEP));
      timers.push(setTimeout(() => line.classList.add('is-out'), 900 + i * STEP + STEP - 650));
    });
    timers.push(setTimeout(finish, 900 + frases.length * STEP + 200));
  });
}

/* ==========================================================================
   2. HOME
   ========================================================================== */
function initHome() {
  const start = new Date(CONFIG.DATA_INICIO_RELACIONAMENTO);
  const fmt = start.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
  $('#heroSince').textContent = 'Desde ' + fmt;
  $('#heroDeclaracao').textContent = CONFIG.DECLARACAO;
  const img = $('#heroImg');
  img.src = CONFIG.FOTO_PRINCIPAL.src || placeholder();
  $('#heroCaption').textContent = CONFIG.FOTO_PRINCIPAL.legenda || '';
  attachTilt($('#heroFrame'), 14);
  $('#exploreBtn').addEventListener('click', () => $('#historia').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }));
}

/* ==========================================================================
   3. TIMELINE
   ========================================================================== */
function renderTimeline() {
  const list = $('#timelineList');
  list.innerHTML = CONFIG.EVENTOS_HISTORIA.map(ev => `
    <li class="tl-item reveal">
      <span class="tl-dot" aria-hidden="true"></span>
      <article class="tl-card tilt">
        <div class="tl-media"><img src="${esc(ev.img)}" alt="${esc(ev.titulo)}" loading="lazy"></div>
        <div class="tl-body">
          <time class="tl-date">${esc(ev.data)}</time>
          <h3>${esc(ev.titulo)}</h3>
          <p>${esc(ev.descricao)}</p>
        </div>
      </article>
    </li>`).join('');
  $$('.tl-card', list).forEach(el => attachTilt(el, 6));
  observeReveal(list);
}

/* ==========================================================================
   MOMENTOS — carrossel em leque 3D (versão Vanilla JS do "card-fan-carousel")
   ========================================================================== */
function createFan(root, items, onOpen) {
  const MAX = 7, HALF = 3;
  const FAN = [
    { rot: -21, scale: .7756, x: -30, y: 7.3, z: 1 },
    { rot: -14, scale: .8498, x: -22, y: 4.0, z: 2 },
    { rot: -7, scale: .9346, x: -11, y: 1.3, z: 3 },
    { rot: 0, scale: 1, x: 0, y: 0, z: 10 },
    { rot: 7, scale: .9346, x: 11, y: 1.3, z: 3 },
    { rot: 14, scale: .8498, x: 22, y: 4.0, z: 2 },
    { rot: 21, scale: .7756, x: 30, y: 7.3, z: 1 },
  ];
  const total = items.length;
  if (!total) { root.closest('section').hidden = true; return; }

  const paginate = total > MAX;
  const slotCount = paginate ? MAX : total;
  const centerSlot = slotCount >> 1;
  let center = paginate ? HALF : centerSlot;

  const layout = $('.fan-layout', root);
  layout.innerHTML = items.map((it, i) => `
    <button class="fan-card" type="button" data-i="${i}" aria-label="${esc(it.legenda || 'Foto ' + (i + 1))}">
      <img src="${esc(it.src)}" alt="" loading="lazy" draggable="false">
      <span class="fan-card__cap">${esc(it.legenda || '')}</span>
    </button>`).join('');
  const cards = $$('.fan-card', layout);

  const nav = $('.fan-nav', root), dotsEl = $('[data-fan-dots]', root);
  if (paginate) {
    nav.hidden = false;
    dotsEl.innerHTML = items.map(() => '<span></span>').join('');
  }

  const SPRING = 'cubic-bezier(.34,1.56,.64,1)', OUT = 'cubic-bezier(.22,1,.36,1)';
  let vmap = new Map(), prev = new Set(), first = true, busy = false, busyT = 0, dir = null, activeSlot = null, leaveT = 0;

  const respMult = w => w < 480 ? .28 : w < 640 ? .38 : w < 768 ? .5 : w < 1024 ? .75 : 1;
  const heightMult = w => {
    const ideal = (w < 480 ? 22 : w < 640 ? 26 : w < 768 ? 28 : w < 1024 ? 34 : 38) * 16;
    const avail = window.innerHeight * .7;
    return avail >= ideal ? 1 : avail / ideal;
  };
  const cfg = slot => {
    if (slotCount >= MAX) return FAN[slot];
    const d = slotCount > 1 ? (slot - centerSlot) / centerSlot : 0;
    const a = Math.abs(d);
    return { rot: d * 21, scale: 1 - .2244 * a * a, x: d * 30, y: a * a * 7.3, z: 10 - Math.abs(slot - centerSlot) };
  };
  const mapFor = c => {
    const m = new Map();
    if (!paginate) { items.forEach((_, i) => m.set(i, i)); return m; }
    for (let s = 0; s < MAX; s++) m.set(((c + s - HALF) % total + total) % total, s);
    return m;
  };
  const base = (slot, m, hm) => {
    const c = cfg(slot), off = slot - centerSlot;
    return { x: c.x * m, y: c.y * hm, rot: c.rot, scale: c.scale, z: c.z, ry: -off * 4, tz: -Math.abs(off) * 18, opacity: 1 };
  };
  const place = (el, p, transition) => {
    el.style.transition = transition;
    el.style.transform = `translate(-50%,-50%) translate3d(${p.x}rem, ${p.y}rem, ${p.tz || 0}px) rotateY(${p.ry || 0}deg) rotate(${p.rot}deg) scale(${p.scale})`;
    el.style.opacity = p.opacity ?? 1;
    el.style.zIndex = p.z;
  };

  function render() {
    const m = respMult(window.innerWidth), hm = heightMult(window.innerWidth);
    vmap = mapFor(center);

    cards.forEach((el, i) => {
      const slot = vmap.get(i), was = prev.has(i);
      if (slot !== undefined) {
        const t = base(slot, m, hm);
        el.tabIndex = 0;
        el.removeAttribute('aria-hidden');
        el.classList.toggle('is-center', slot === centerSlot);
        if (first) {
          place(el, { x: 0, y: 12 * hm, rot: 0, scale: .5, opacity: 0, z: t.z }, 'none');
          void el.offsetWidth;
          const d = (.2 + slot * .06).toFixed(2);
          place(el, t, `transform 1.2s ${SPRING} ${d}s, opacity .5s ease ${d}s`);
        } else if (!was) {
          const ex = dir === 'right' ? 40 : -40;
          place(el, { x: ex, y: t.y, rot: dir === 'right' ? 30 : -30, scale: .5, opacity: 0, z: t.z }, 'none');
          void el.offsetWidth;
          place(el, t, `transform .6s ${OUT}, opacity .45s ease`);
        } else {
          place(el, t, `transform .55s ${OUT}, opacity .4s ease`);
        }
      } else {
        el.tabIndex = -1;
        el.setAttribute('aria-hidden', 'true');
        el.classList.remove('is-center');
        if (was) {
          const ex = dir === 'right' ? -40 : 40;
          place(el, { x: ex, y: 0, rot: dir === 'right' ? -30 : 30, scale: .5, opacity: 0, z: 0 }, 'transform .45s cubic-bezier(.55,0,1,.45), opacity .4s ease');
        } else if (first) {
          place(el, { x: 0, y: 0, rot: 0, scale: .3, opacity: 0, z: 0 }, 'none');
        }
      }
    });

    prev = new Set(vmap.keys());
    busy = true;
    clearTimeout(busyT);
    busyT = setTimeout(() => { busy = false; }, first ? 1300 + slotCount * 60 : 650);
    first = false;
    activeSlot = null;
    if (paginate) $$('span', dotsEl).forEach((d, i) => d.classList.toggle('is-on', i === center));
  }

  // Leque "abre" em volta da carta com hover
  function hover(hs) {
    const m = respMult(window.innerWidth), hm = heightMult(window.innerWidth);
    cards.forEach((el, i) => {
      const slot = vmap.get(i);
      if (slot === undefined) return;
      const t = base(slot, m, hm);
      let delay;
      if (hs !== null) {
        const dist = Math.abs(slot - hs);
        delay = dist * .02;
        if (slot === hs) {
          t.y -= 2.5 * hm; t.scale *= 1.08; t.ry = 0; t.tz = 40; t.z = 20;
        } else {
          const norm = centerSlot > 0 ? (slot - centerSlot) / centerSlot : 0;
          const push = 8 * (1 - Math.abs(norm)) * (1 + .2 * Math.max(0, 3 - dist));
          if (slot < hs) { t.x -= push * m; t.rot -= 3 / (dist + 1); }
          else { t.x += push * m; t.rot += 3 / (dist + 1); }
          if (slot === slotCount - 1 && hs < centerSlot) t.y -= 1 * hm;
          if (slot === 0 && hs > centerSlot) t.y -= 1 * hm;
        }
      } else {
        delay = Math.abs(slot - centerSlot) * .02;
      }
      place(el, t, `transform .55s ${SPRING} ${delay.toFixed(2)}s, opacity .3s ease`);
    });
  }

  function go(steps) {
    if (busy || !paginate || !steps) return;
    dir = steps > 0 ? 'right' : 'left';
    center = ((center + steps) % total + total) % total;
    render();
  }

  // Interações
  let sx = null, moved = false;
  cards.forEach((el, i) => {
    el.addEventListener('mouseenter', () => {
      if (busy || isTouch) return;
      clearTimeout(leaveT);
      const s = vmap.get(i);
      if (s !== undefined && activeSlot !== s) { activeSlot = s; hover(s); }
    });
    el.addEventListener('click', () => {
      if (moved) return;
      const s = vmap.get(i);
      if (s === undefined) return;
      if (s === centerSlot || !paginate) onOpen(i);
      else go(s - centerSlot);
    });
  });
  layout.addEventListener('mouseleave', () => {
    if (busy) return;
    clearTimeout(leaveT);
    leaveT = setTimeout(() => { activeSlot = null; hover(null); }, 50);
  });
  layout.addEventListener('pointerdown', e => { sx = e.clientX; moved = false; });
  layout.addEventListener('pointermove', e => { if (sx !== null && Math.abs(e.clientX - sx) > 10) moved = true; });
  layout.addEventListener('pointerup', e => {
    if (sx === null) return;
    const dx = e.clientX - sx;
    sx = null;
    if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
    setTimeout(() => { moved = false; }, 0);
  });
  layout.addEventListener('pointercancel', () => { sx = null; });
  root.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  });
  $('[data-fan="prev"]', root).addEventListener('click', () => go(-1));
  $('[data-fan="next"]', root).addEventListener('click', () => go(1));

  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => { if (!busy && !first) hover(activeSlot); }, 150);
  });

  // A animação de entrada começa quando a seção aparece na tela
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(([en]) => {
      if (en.isIntersecting) { render(); io.disconnect(); }
    }, { threshold: .25 });
    io.observe(layout);
  } else render();
}

/* ==========================================================================
   LIGHTBOX (álbum e momentos)
   ========================================================================== */
const Lightbox = (() => {
  const video = $('#lbVideo');
  let pausedMusic = false;
  const lb = $('#lightbox'), img = $('#lbImg'), frame = $('#lbFrame'), cap = $('#lbCaption'), count = $('#lbCount');
  let list = [], idx = 0, lastFocus = null, sx = null;

  function show(dir = 0) {
    const it = list[idx];
    const isVideo = it.tipo === 'video';
    img.classList.remove('is-zoomed');
    video.pause();
    img.hidden = isVideo;
    video.hidden = !isVideo;
    if (isVideo) {
      video.poster = it.poster || '';
      video.src = it.src;
      if (Player.isPlaying()) { Player.pause(); pausedMusic = true; }
      video.play().catch(() => {});
    } else {
      video.removeAttribute('src');
      delete img.dataset.fallback;
      img.src = it.src;
      img.alt = it.legenda || '';
    }
    cap.textContent = it.legenda || '';
    count.textContent = `${idx + 1} / ${list.length}`;
    frame.style.setProperty('--dir', dir);
    frame.classList.remove('lb-anim'); void frame.offsetWidth; frame.classList.add('lb-anim');
  }
  function open(items, i) {
    list = items; idx = i; lastFocus = document.activeElement;
    show(0);
    lb.hidden = false;
    document.body.classList.add('no-scroll');
    requestAnimationFrame(() => lb.classList.add('is-open'));
    $('#lbClose').focus();
  }
  function close() {
    lb.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    video.pause();
    if (pausedMusic) { pausedMusic = false; Player.play(); }
    setTimeout(() => { lb.hidden = true; }, 400);
    lastFocus?.focus?.();
  }
  const step = d => { idx = (idx + d + list.length) % list.length; show(d); };

  $('#lbClose').addEventListener('click', close);
  $('#lbPrev').addEventListener('click', () => step(-1));
  $('#lbNext').addEventListener('click', () => step(1));
  img.addEventListener('click', () => img.classList.toggle('is-zoomed'));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });
  const stage = $('#lbStage');
  stage.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    if (sx === null || img.classList.contains('is-zoomed') || e.target === video) return;
    const dx = e.changedTouches[0].clientX - sx;
    sx = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  });
  return { open };
})();

/* ==========================================================================
   4. ÁLBUM POLAROID
   ========================================================================== */
function renderAlbum() {
  const grid = $('#albumGrid');
  grid.innerHTML = CONFIG.FOTOS.map((f, i) => {
    const media = f.tipo === 'video'
      ? `<video src="${esc(f.src)}" poster="${esc(f.poster || '')}" muted loop playsinline autoplay preload="metadata"></video>
         <span class="polaroid__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg></span>`
      : `<img src="${esc(f.src)}" alt="${esc(f.legenda)}" loading="lazy">`;
    return `
    <div class="reveal" style="--i:${i % 3}">
      <button class="polaroid tilt" type="button" data-i="${i}" style="--r:${rnd(-4, 4).toFixed(1)}deg" aria-label="${f.tipo === 'video' ? 'Assistir' : 'Ampliar'}: ${esc(f.legenda)}">
        ${media}
        <span class="polaroid__cap">${esc(f.legenda)}</span>
      </button>
    </div>`;
  }).join('');
  $$('.polaroid', grid).forEach(el => {
    attachTilt(el, 12);
    el.addEventListener('click', () => Lightbox.open(CONFIG.FOTOS, Number(el.dataset.i)));
  });
  observeReveal(grid);
}

/* ==========================================================================
   5. 100 MOTIVOS
   ========================================================================== */
function initMotivos() {
  const grid = $('#motivosGrid'), more = $('#reasonsMore');
  const motivos = CONFIG.MOTIVOS_AMOR;
  const total = motivos.length;
  const STEP = window.innerWidth < 640 ? 12 : 20;
  const flipped = new Set(store.get('motivos', []).filter(i => i < total));
  let shown = 0;

  $('#motivosTotal').textContent = total;
  $('#reasonsTotal').textContent = total;

  function progress() {
    $('#reasonsCount').textContent = flipped.size;
    $('#reasonsBar').style.width = (flipped.size / total * 100) + '%';
  }
  function addMore() {
    const end = Math.min(shown + STEP, total);
    let html = '';
    for (let i = shown; i < end; i++) {
      html += `
        <div class="reason${flipped.has(i) ? ' is-flipped' : ''}" role="button" tabindex="0" data-i="${i}" style="--k:${i - shown}" aria-pressed="${flipped.has(i)}" aria-label="Motivo ${i + 1}">
          <span class="reason__inner">
            <span class="reason__face reason__front">
              <span class="reason__num">Nº ${pad(i + 1)}</span>${heartSVG()}<span class="reason__hint">toque para revelar</span>
            </span>
            <span class="reason__face reason__back">${heartSVG()}<span class="reason__text">${esc(motivos[i])}</span></span>
          </span>
        </div>`;
    }
    grid.insertAdjacentHTML('beforeend', html);
    shown = end;
    more.hidden = shown >= total;
  }
  function flip(card, forceOpen = false) {
    const i = Number(card.dataset.i);
    const open = forceOpen || !card.classList.contains('is-flipped');
    card.classList.toggle('is-flipped', open);
    card.setAttribute('aria-pressed', open);
    if (open && !flipped.has(i)) {
      flipped.add(i);
      store.set('motivos', [...flipped]);
      progress();
      if (flipped.size === total) toast('Você descobriu todos os motivos… mas a lista nunca termina 💗', 5000);
    }
  }

  grid.addEventListener('click', e => { const c = e.target.closest('.reason'); if (c) flip(c); });
  grid.addEventListener('keydown', e => {
    const c = e.target.closest('.reason');
    if (c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); flip(c); }
  });
  more.addEventListener('click', addMore);
  $('#reasonRandom').addEventListener('click', () => {
    const left = motivos.map((_, i) => i).filter(i => !flipped.has(i));
    if (!left.length) { toast('Você já revelou todos os motivos ✨'); return; }
    const i = pick(left);
    while (shown <= i) addMore();
    const card = $(`.reason[data-i="${i}"]`, grid);
    card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    setTimeout(() => flip(card, true), reduceMotion ? 0 : 650);
  });

  addMore();
  progress();
}

/* ==========================================================================
   6. CONTADOR
   ========================================================================== */
function initCounter() {
  const start = new Date(CONFIG.DATA_INICIO_RELACIONAMENTO);
  const els = { d: $('#cDias'), h: $('#cHoras'), m: $('#cMin'), s: $('#cSeg') };
  const beats = $('#cBeats');
  $('#counterSince').textContent = 'Desde ' + start.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }) + ' — e contando cada segundo.';
  $$('.unit').forEach(el => attachTilt(el, 10));

  const set = (el, val) => {
    if (el.textContent === val) return;
    el.textContent = val;
    if (!reduceMotion) { el.classList.remove('flip'); void el.offsetWidth; el.classList.add('flip'); }
  };
  function tick() {
    const diff = Math.max(0, Date.now() - start.getTime());
    set(els.d, Math.floor(diff / 864e5).toLocaleString('pt-BR'));
    set(els.h, pad(Math.floor(diff / 36e5) % 24));
    set(els.m, pad(Math.floor(diff / 6e4) % 60));
    set(els.s, pad(Math.floor(diff / 1e3) % 60));
    beats.textContent = Math.floor(diff / 6e4 * 70).toLocaleString('pt-BR');
  }
  tick();
  setInterval(tick, 1000);
}

/* ==========================================================================
   7. CARTINHAS
   ========================================================================== */
function initCartas() {
  const cartas = CONFIG.CARTAS;
  if (!cartas.length) { $('#cartas').hidden = true; return; }
  const stage = $('#envStage'), env = $('#envelope'), letter = $('#letter'), dots = $('#letterDots');
  const lidas = new Set(store.get('cartasLidas', []));
  let idx = 0, busy = false;

  dots.innerHTML = cartas.map((_, i) => `<button type="button" aria-label="Carta ${i + 1}"></button>`).join('');
  if (cartas.length < 2) $('.letters__nav').hidden = true;

  function showEnvelope(i) {
    idx = (i + cartas.length) % cartas.length;
    const c = cartas[idx];
    env.classList.remove('is-open');
    $('#envLetterTitle').textContent = c.titulo;
    $('#envCount').textContent = `Carta ${idx + 1} de ${cartas.length}`;
    $('#envStatus').textContent = lidas.has(idx) ? 'já lida ♥' : 'ainda fechada';
    env.setAttribute('aria-label', `Abrir carta: ${c.titulo}`);
    $$('button', dots).forEach((d, k) => d.classList.toggle('is-on', k === idx));
  }

  async function openLetter() {
    if (busy || env.classList.contains('is-open')) return;
    busy = true;
    const c = cartas[idx];
    env.classList.add('is-open');
    lidas.add(idx);
    store.set('cartasLidas', [...lidas]);
    await wait(reduceMotion ? 0 : 1500);
    stage.classList.add('is-leaving');
    await wait(reduceMotion ? 0 : 420);
    stage.hidden = true;
    $('#letterDate').textContent = c.data || '';
    $('#letterTitle').textContent = c.titulo;
    $('#letterBody').innerHTML = (c.paragrafos || []).map(p => `<p>${esc(p)}</p>`).join('');
    $('#letterSign').textContent = c.assinatura || '';
    letter.classList.remove('is-closing');
    letter.hidden = false;
    letter.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    busy = false;
  }

  async function closeLetter(nextIdx = idx) {
    if (busy) return;
    busy = true;
    if (!letter.hidden) {
      letter.classList.add('is-closing');
      await wait(reduceMotion ? 0 : 430);
      letter.hidden = true;
    }
    showEnvelope(nextIdx);
    stage.hidden = false;
    void stage.offsetWidth;
    stage.classList.remove('is-leaving');
    busy = false;
  }

  env.addEventListener('click', openLetter);
  $('#letterClose').addEventListener('click', () => closeLetter(idx));
  $('#letterPrev').addEventListener('click', () => closeLetter(idx - 1));
  $('#letterNext').addEventListener('click', () => closeLetter(idx + 1));
  dots.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (b) closeLetter($$('button', dots).indexOf(b));
  });
  showEnvelope(0);
}

/* ==========================================================================
   8. PLAYER DE MÚSICA (sem autoplay — só toca após um toque dela)
   ========================================================================== */
const Player = (() => {
  const audio = $('#audio'), player = $('#player'), playBtn = $('#playBtn');
  const panel = $('#playlistPanel'), listBtn = $('#listBtn'), listEl = $('#playlistList');
  const tracks = CONFIG.PLAYLIST?.length ? CONFIG.PLAYLIST : [{ titulo: 'Nossa música', artista: 'Para você', src: CONFIG.URL_MUSICA }];
  const saved = store.get('musica', {});
  let idx = Number.isInteger(saved.idx) && saved.idx < tracks.length ? saved.idx : 0;
  let resumeAt = saved.time || 0, hasSrc = false, lastSave = 0;

  // Capa: usa a imagem informada em "capa" ou gera uma capinha própria
  const coverCache = {};
  function makeCover(t, i) {
    if (t.capa) return t.capa;
    if (coverCache[i]) return coverCache[i];
    const c = document.createElement('canvas');
    c.width = c.height = 160;
    const x = c.getContext('2d');
    const pals = [['#e0567c', '#7a0f2e'], ['#c9b6e4', '#5b3f8f'], ['#f7c6d4', '#b3123b'], ['#8f74c4', '#2a0c22'], ['#ff9fb6', '#8e1537']];
    const [c1, c2] = pals[i % pals.length];
    const g = x.createLinearGradient(0, 0, 160, 160);
    g.addColorStop(0, c1); g.addColorStop(1, c2);
    x.fillStyle = g; x.fillRect(0, 0, 160, 160);
    x.globalAlpha = .25; x.fillStyle = '#fff';
    x.save(); x.translate(80, 74); x.rotate(-.18); x.scale(1.15, 1.15); x.translate(-50, -46); x.fill(new Path2D(HEART_PATH)); x.restore();
    x.globalAlpha = 1; x.fillStyle = '#fff'; x.textAlign = 'center';
    x.font = 'italic 600 44px Georgia, serif';
    x.fillText(t.titulo.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase(), 80, 96);
    x.font = '500 11px Inter, sans-serif'; x.globalAlpha = .85;
    x.fillText('PARA GIOVANNA', 80, 140);
    return (coverCache[i] = c.toDataURL('image/png'));
  }

  listEl.innerHTML = tracks.map((t, i) => `
    <li><button type="button" data-i="${i}">
      <span class="pl-num">${pad(i + 1)}</span>
      <img class="pl-cover" src="${esc(makeCover(t, i))}" alt="">
      <span><span class="pl-title">${esc(t.titulo)}</span><span class="pl-artist">${esc(t.artista)}</span></span>
    </button></li>`).join('');

  function save() { store.set('musica', { idx, time: audio.currentTime || resumeAt, playing: !audio.paused }); }
  function ui() {
    const t = tracks[idx];
    $('#trackTitle').textContent = t.titulo;
    $('#trackArtist').textContent = t.artista || '';
    $('#trackCoverImg').src = makeCover(t, idx);
    $$('li', listEl).forEach((li, i) => li.classList.toggle('is-current', i === idx));
    if ('mediaSession' in navigator) {
      try { navigator.mediaSession.metadata = new MediaMetadata({ title: t.titulo, artist: t.artista, album: 'Nosso Universo ❤️' }); } catch { /* opcional */ }
    }
  }
  function setTrack(i, keepTime = false) {
    idx = (i + tracks.length) % tracks.length;
    if (!keepTime) resumeAt = 0;
    audio.src = tracks[idx].src;
    hasSrc = true;
    ui();
    save();
  }
  let quietErrors = false;
  async function play(opts = {}) {
    quietErrors = !!opts.quiet;
    if (!hasSrc) setTrack(idx, true);
    try { await audio.play(); }
    catch (err) { if (err.name === 'NotAllowedError' && !quietErrors) toast('Toque no coração para ouvir a nossa música 🎵'); }
  }
  const next = () => { setTrack(idx + 1); play(); };
  const prev = () => { if (audio.currentTime > 3) { audio.currentTime = 0; return; } setTrack(idx - 1); play(); };

  audio.addEventListener('loadedmetadata', () => {
    if (resumeAt && resumeAt < audio.duration - 2) audio.currentTime = resumeAt;
    resumeAt = 0;
  });
  const state = $('#trackState');
  audio.addEventListener('playing', () => { quietErrors = false; player.classList.add('is-playing'); playBtn.setAttribute('aria-label', 'Pausar música'); state.textContent = 'Tocando agora'; save(); });
  audio.addEventListener('pause', () => { player.classList.remove('is-playing'); playBtn.setAttribute('aria-label', 'Tocar música'); state.textContent = 'Pausada'; save(); });
  audio.addEventListener('ended', next);
  audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const pct = audio.currentTime / audio.duration * 100;
    $('#trackProgress').style.width = pct + '%';
    $('#trackSeek').setAttribute('aria-valuenow', Math.round(pct));
    const now = Date.now();
    if (now - lastSave > 3000) { lastSave = now; save(); }
  });
  audio.addEventListener('error', () => {
    if (!hasSrc) return;
    player.classList.remove('is-playing');
    state.textContent = 'Música não encontrada';
    if (quietErrors) { quietErrors = false; return; }
    toast(`Não encontrei o arquivo "${tracks[idx].src}". Coloque o MP3 na pasta musicas/ 🎶`, 5500);
  });

  playBtn.addEventListener('click', () => (audio.paused ? play() : audio.pause()));
  $('#nextBtn').addEventListener('click', next);
  $('#prevBtn').addEventListener('click', prev);
  $('#trackSeek').addEventListener('click', e => {
    if (!audio.duration) return;
    const r = e.currentTarget.getBoundingClientRect();
    audio.currentTime = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * audio.duration;
  });
  listBtn.addEventListener('click', () => {
    panel.hidden = !panel.hidden;
    listBtn.setAttribute('aria-expanded', String(!panel.hidden));
  });
  listEl.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    setTrack(Number(b.dataset.i));
    play();
  });
  document.addEventListener('click', e => {
    if (!panel.hidden && !player.contains(e.target)) { panel.hidden = true; listBtn.setAttribute('aria-expanded', 'false'); }
  });
  window.addEventListener('pagehide', save);

  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.setActionHandler('nexttrack', next);
      navigator.mediaSession.setActionHandler('previoustrack', prev);
    } catch { /* opcional */ }
  }

  ui();
  return {
    hintResume() { if (saved.playing) toast('Nossa música estava tocando… toque no ♥ lá embaixo para continuar 🎶', 5500); },
    isPlaying: () => !audio.paused,
    current: () => tracks[idx],
    pause: () => audio.pause(),
    play,
  };
})();

/* ==========================================================================
   9. SURPRESA FINAL
   ========================================================================== */
const Surprise = (() => {
  const el = $('#surprise'), canvas = $('#bokeh'), ctx = canvas.getContext('2d'), rain = $('#heartRain');
  const words = CONFIG.FRASE_FINAL.split(' ');
  let timers = [], raf = 0, rainT = 0, dots = [], W = 0, H = 0, lastFocus = null;

  $('#surprisePhrase').innerHTML = words.map((w, i) => `<span style="--i:${i}">${esc(w)}</span>`).join(' ');
  $('#surpriseFinal').textContent = CONFIG.MENSAGEM_FINAL;
  $('#surpriseSign').textContent = CONFIG.ASSINATURA_FINAL || '';

  // Fundo bokeh
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function bokeh() {
    resize();
    const cols = [[224, 86, 124], [247, 198, 212], [201, 182, 228], [179, 18, 59]];
    dots = Array.from({ length: W < 640 ? 24 : 42 }, () => ({
      x: rnd(0, W), y: rnd(0, H), r: rnd(20, 95),
      vx: rnd(-.25, .25), vy: rnd(-.35, -.05),
      c: pick(cols), a: rnd(.06, .24),
    }));
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';
      for (const d of dots) {
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r);
        g.addColorStop(0, `rgba(${d.c},${d.a})`);
        g.addColorStop(.7, `rgba(${d.c},${d.a * .4})`);
        g.addColorStop(1, `rgba(${d.c},0)`);
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fill();
        if (!reduceMotion) {
          d.x += d.vx; d.y += d.vy;
          if (d.y < -d.r) { d.y = H + d.r; d.x = rnd(0, W); }
          if (d.x < -d.r) d.x = W + d.r; else if (d.x > W + d.r) d.x = -d.r;
        }
      }
      if (!reduceMotion) raf = requestAnimationFrame(loop);
    };
    loop();
  }

  // Chuva de corações girando em 3D
  function dropHeart() {
    if (rain.childElementCount > 90) return;
    const h = document.createElement('span');
    h.className = 'rain-heart';
    h.style.left = rnd(-2, 98) + 'vw';
    h.style.setProperty('--s', rnd(14, 40).toFixed(0) + 'px');
    h.style.setProperty('--dur', rnd(5, 9).toFixed(1) + 's');
    h.style.setProperty('--drift', rnd(-14, 14).toFixed(1) + 'vw');
    h.style.setProperty('--spin', rnd(1.5, 4).toFixed(1) + 's');
    h.style.setProperty('--c', pick(['#e0567c', '#f7c6d4', '#c9b6e4', '#ffffff', '#b3123b']));
    h.style.setProperty('--o', rnd(.6, 1).toFixed(2));
    h.innerHTML = heartSVG();
    h.addEventListener('animationend', e => { if (e.target === h) h.remove(); });
    rain.appendChild(h);
  }

  function sequence() {
    const at = (ms, fn) => timers.push(setTimeout(fn, reduceMotion ? 0 : ms));
    const phraseEnd = 1700 + words.length * 140 + 1000;
    at(450, () => el.classList.add('stage-1'));
    at(1700, () => el.classList.add('stage-2'));
    at(phraseEnd, () => {
      el.classList.add('stage-3');
      if (!reduceMotion) rainT = setInterval(() => { dropHeart(); if (Math.random() < .6) dropHeart(); }, 140);
    });
    at(phraseEnd + 2600, () => el.classList.add('stage-4'));
  }
  function reset() {
    timers.forEach(clearTimeout); timers = [];
    clearInterval(rainT);
    el.classList.remove('stage-1', 'stage-2', 'stage-3', 'stage-4');
  }

  function open() {
    if (!el.hidden) return;
    lastFocus = document.activeElement;
    $('#surpriseImg').src = CONFIG.FOTO_SURPRESA || placeholder();
    el.hidden = false;
    document.body.classList.add('no-scroll');
    void el.offsetWidth;
    el.classList.add('is-open');
    bokeh();
    sequence();
    $('#surpriseClose').focus();
    if (!Player.isPlaying()) setTimeout(() => toast('Que tal dar play na nossa música para este momento? 🎶', 4500), 1200);
  }
  function close() {
    reset();
    el.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    setTimeout(() => { el.hidden = true; rain.innerHTML = ''; cancelAnimationFrame(raf); }, 900);
    lastFocus?.focus?.();
  }

  $('#surpriseClose').addEventListener('click', close);
  $('#surpriseReplay').addEventListener('click', () => { reset(); rain.innerHTML = ''; requestAnimationFrame(sequence); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !el.hidden) close(); });
  window.addEventListener('resize', () => { if (!el.hidden) resize(); });
  return { open };
})();

/* ==========================================================================
   NAVEGAÇÃO + PROGRESSO (destrava a surpresa ao visitar todas as seções)
   ========================================================================== */
function initProgress() {
  const ids = ['historia', 'momentos', 'album', 'motivos', 'contador', 'jogo', 'cartas', 'natal'];
  const visited = new Set(store.get('visitados', []).filter(id => ids.includes(id)));
  const hearts = $('#progressHearts');
  const links = $$('#navLinks a');
  const navLinks = $('#navLinks');
  hearts.innerHTML = ids.map(id => `<span data-id="${id}">${heartSVG()}</span>`).join('');

  function update(isNew) {
    $$('span', hearts).forEach(s => s.classList.toggle('is-on', visited.has(s.dataset.id)));
    const done = visited.size === ids.length;
    $('#surpriseBtn').classList.toggle('is-ready', done);
    $('#secretBtn').classList.toggle('is-ready', done);
    $('#finalHint').textContent = done
      ? 'Giovanna, você explorou cada cantinho do nosso universo. Agora sim… 💫'
      : `Você já visitou ${visited.size} de ${ids.length} lugares do nosso universo. A surpresa já está te esperando, mas fica ainda mais especial no final.`;
    if (done && isNew && !store.get('avisoFinal', false)) {
      store.set('avisoFinal', true);
      toast('Giovanna, você explorou todo o nosso universo… tem uma surpresa te esperando lá no final ✨', 6000);
    }
  }

  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    const id = en.target.id;
    links.forEach(a => {
      const on = a.getAttribute('href') === '#' + id;
      a.classList.toggle('is-active', on);
      if (on) navLinks.scrollTo({ left: a.offsetLeft - navLinks.clientWidth / 2 + a.offsetWidth / 2, behavior: 'smooth' });
    });
    if (ids.includes(id) && !visited.has(id)) {
      visited.add(id);
      store.set('visitados', [...visited]);
      update(true);
    }
  }), { rootMargin: '-45% 0px -45% 0px' });
  $$('main > section').forEach(s => io.observe(s));

  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  $('#surpriseBtn').addEventListener('click', Surprise.open);
  $('#secretBtn').addEventListener('click', Surprise.open);
  update(false);
}

/* ==========================================================================
   JOGO DA MEMÓRIA 🎮
   ========================================================================== */
function initJogo() {
  const cfg = CONFIG.JOGO || {};
  const fotos = (cfg.fotos || []).slice(0, 8);
  if (fotos.length < 2) { $('#jogo').hidden = true; return; }
  const board = $('#gBoard'), win = $('#gWin');
  const el = { moves: $('#gMoves'), pairs: $('#gPairs'), time: $('#gTime') };
  $('#gTotal').textContent = fotos.length;
  $('#gPrize').textContent = cfg.premio || '';
  board.style.setProperty('--cols', fotos.length > 6 ? 4 : 3);

  let first = null, lock = false, moves = 0, pairs = 0, secs = 0, timer = 0;
  const fmt = n => `${Math.floor(n / 60)}:${pad(n % 60)}`;
  const showBest = () => {
    const best = store.get('jogoRecorde', null);
    $('#gBest').textContent = best ? `Seu recorde: ${best.moves} jogadas em ${fmt(best.secs)} 🏆` : '';
  };

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  function start() {
    clearInterval(timer);
    first = null; lock = false; moves = 0; pairs = 0; secs = 0; timer = 0;
    el.moves.textContent = 0; el.pairs.textContent = 0; el.time.textContent = '0:00';
    win.hidden = true;
    const deck = shuffle(fotos.flatMap((src, id) => [{ src, id }, { src, id }]));
    board.innerHTML = deck.map((c, i) => `
      <div class="mem" role="button" tabindex="0" data-id="${c.id}" aria-label="Carta ${i + 1}" style="--k:${i}">
        <span class="mem__inner">
          <span class="mem__face mem__front">${heartSVG()}</span>
          <span class="mem__face mem__back"><img src="${esc(c.src)}" alt="" draggable="false"></span>
        </span>
      </div>`).join('');
    showBest();
  }

  function celebrate() {
    clearInterval(timer);
    const best = store.get('jogoRecorde', null);
    const isRecord = !best || moves < best.moves || (moves === best.moves && secs < best.secs);
    if (isRecord) store.set('jogoRecorde', { moves, secs });
    $('#gWinText').textContent = `Você encontrou todos os pares em ${moves} jogadas e ${fmt(secs)}${isRecord && best ? ' — novo recorde! 🏆' : '.'}`;
    showBest();
    win.hidden = false;
    // chuva de corações sobre o tabuleiro
    const burst = $('#gBurst');
    burst.innerHTML = '';
    if (!reduceMotion) {
      for (let i = 0; i < 36; i++) {
        const h = document.createElement('span');
        const ang = Math.random() * Math.PI * 2, d = rnd(120, 320);
        h.className = 'burst-heart';
        h.style.setProperty('--s', rnd(12, 30).toFixed(0) + 'px');
        h.style.setProperty('--tx', (Math.cos(ang) * d).toFixed(0) + 'px');
        h.style.setProperty('--ty', (Math.sin(ang) * d).toFixed(0) + 'px');
        h.style.setProperty('--dur', rnd(1.4, 2.6).toFixed(2) + 's');
        h.style.setProperty('--spin', rnd(1, 2.5).toFixed(1) + 's');
        h.style.setProperty('--c', pick(['#e0567c', '#f7c6d4', '#c9b6e4', '#ffffff']));
        h.innerHTML = heartSVG();
        burst.appendChild(h);
      }
    }
  }

  function flipCard(card) {
    if (lock || card === first || card.classList.contains('is-flipped')) return;
    if (!timer) timer = setInterval(() => { secs++; el.time.textContent = fmt(secs); }, 1000);
    card.classList.add('is-flipped');
    if (!first) { first = card; return; }

    moves++;
    el.moves.textContent = moves;
    const a = first, b = card;
    first = null;
    if (a.dataset.id === b.dataset.id) {
      a.classList.add('is-matched'); b.classList.add('is-matched');
      pairs++;
      el.pairs.textContent = pairs;
      if (pairs === fotos.length) setTimeout(celebrate, 600);
    } else {
      lock = true;
      setTimeout(() => {
        a.classList.add('is-wrong'); b.classList.add('is-wrong');
        setTimeout(() => {
          a.classList.remove('is-flipped', 'is-wrong'); b.classList.remove('is-flipped', 'is-wrong');
          lock = false;
        }, 350);
      }, 650);
    }
  }

  board.addEventListener('click', e => { const c = e.target.closest('.mem'); if (c) flipCard(c); });
  board.addEventListener('keydown', e => {
    const c = e.target.closest('.mem');
    if (c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); flipCard(c); }
  });
  $('#gRestart').addEventListener('click', start);
  $('#gAgain').addEventListener('click', start);
  start();
}

/* ==========================================================================
   CANTINHO DE NATAL 💚
   ========================================================================== */
function initNatal() {
  const n = CONFIG.NATAL || {};
  $('#natalTitle').textContent = n.titulo || '';
  $('#natalMsg').textContent = n.texto || '';
  if (n.foto) {
    const img = $('#natalImg');
    img.src = n.foto;
    img.hidden = false;
    $('#natalPh').hidden = true;
  }
  attachTilt($('#natalMedia'), 10);
  const now = new Date();
  let xmas = new Date(now.getFullYear(), 11, 25);
  if (now > new Date(now.getFullYear(), 11, 26)) xmas = new Date(now.getFullYear() + 1, 11, 25);
  const days = Math.ceil((xmas - new Date(now.getFullYear(), now.getMonth(), now.getDate())) / 864e5);
  $('#natalDays').textContent = Math.max(0, days);
  $('#natalLabel').textContent = days <= 0 ? 'É Natal! Feliz Natal, meu amor 🎄' : days === 1 ? 'dia para o nosso primeiro Natal juntos 🎄' : 'dias para o nosso primeiro Natal juntos 🎄';
}

/* ==========================================================================
   INICIALIZAÇÃO
   ========================================================================== */
let started = false;
function startApp() {
  if (started) return;
  started = true;
  initHome();
  renderTimeline();
  createFan($('#fan'), CONFIG.MOMENTOS.length ? CONFIG.MOMENTOS : CONFIG.FOTOS, i => Lightbox.open(CONFIG.MOMENTOS.length ? CONFIG.MOMENTOS : CONFIG.FOTOS, i));
  renderAlbum();
  initMotivos();
  initCounter();
  initCartas();
  initJogo();
  initNatal();
  initProgress();
  observeReveal(document);
}

// Abra o site com #reset no final do link para zerar o progresso salvo
if (location.hash === '#reset') {
  try { Object.keys(localStorage).filter(k => k.startsWith('nosso-universo:')).forEach(k => localStorage.removeItem(k)); } catch { /* ok */ }
  history.replaceState(null, '', location.pathname);
}

document.title = `Nosso Universo — Para ${CONFIG.NOME_DELA} ❤️`;
buildHearts();
Universe.start();

if (CONFIG.LEMBRAR_ACESSO && store.get('acesso', null) === CONFIG.SENHA_LOGIN) {
  unlock(true);
} else {
  initLogin(() => unlock(false));
}
