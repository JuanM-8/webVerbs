const btnWord = document.getElementById("btnWord");
const Word = document.getElementById("Word");
const presenteP = document.getElementById("presente");
const pasadoP = document.getElementById("pasado");
const participioP = document.getElementById("participio");
const Wespa = document.getElementById("Wespa");


const palabras = {
  be: {
    present: "am/is/are",
    past: "was/were",
    participle: "been",
    translation: "ser/estar",
  },
  have: {
    present: "have/has",
    past: "had",
    participle: "had",
    translation: "tener",
  },
  do: {
    present: "do/does",
    past: "did",
    participle: "done",
    translation: "hacer",
  },
  say: {
    present: "say/says",
    past: "said",
    participle: "said",
    translation: "decir",
  },
  get: {
    present: "get/gets",
    past: "got",
    participle: "got/gotten",
    translation: "obtener",
  },
  make: {
    present: "make/makes",
    past: "made",
    participle: "made",
    translation: "hacer/fabricar",
  },
  go: {
    present: "go/goes",
    past: "went",
    participle: "gone",
    translation: "ir",
  },
  jump: {
    present: "jump",
    past: "jumped",
    participle: "jumped",
    translation: "saltar",
  },
  see: {
    present: "see/sees",
    past: "saw",
    participle: "seen",
    translation: "ver",
  },
  know: {
    present: "know/knows",
    past: "knew",
    participle: "known",
    translation: "saber/conocer",
  },
  take: {
    present: "take/takes",
    past: "took",
    participle: "taken",
    translation: "tomar/llevar",
  },
  come: {
    present: "come/comes",
    past: "came",
    participle: "come",
    translation: "venir",
  },
  think: {
    present: "think/thinks",
    past: "thought",
    participle: "thought",
    translation: "pensar",
  },
  look: {
    present: "look/looks",
    past: "looked",
    participle: "looked",
    translation: "mirar",
  },
  want: {
    present: "want/wants",
    past: "wanted",
    participle: "wanted",
    translation: "querer",
  },
  give: {
    present: "give/gives",
    past: "gave",
    participle: "given",
    translation: "dar",
  },
  use: {
    present: "use/uses",
    past: "used",
    participle: "used",
    translation: "usar",
  },
  find: {
    present: "find/finds",
    past: "found",
    participle: "found",
    translation: "encontrar",
  },
  tell: {
    present: "tell/tells",
    past: "told",
    participle: "told",
    translation: "decir/contar",
  },
  ask: {
    present: "ask/asks",
    past: "asked",
    participle: "asked",
    translation: "preguntar/pedir",
  },
  work: {
    present: "work/works",
    past: "worked",
    participle: "worked",
    translation: "trabajar",
  },
  seem: {
    present: "seem/seems",
    past: "seemed",
    participle: "seemed",
    translation: "parecer",
  },
  feel: {
    present: "feel/feels",
    past: "felt",
    participle: "felt",
    translation: "sentir",
  },
  try: {
    present: "try/tries",
    past: "tried",
    participle: "tried",
    translation: "intentar",
  },
  leave: {
    present: "leave/leaves",
    past: "left",
    participle: "left",
    translation: "salir/dejar",
  },
  call: {
    present: "call/calls",
    past: "called",
    participle: "called",
    translation: "llamar",
  },
  put: {
    present: "put/puts",
    past: "put",
    participle: "put",
    translation: "poner",
  },
  mean: {
    present: "mean/means",
    past: "meant",
    participle: "meant",
    translation: "significar",
  },
  keep: {
    present: "keep/keeps",
    past: "kept",
    participle: "kept",
    translation: "mantener",
  },
  let: {
    present: "let/lets",
    past: "let",
    participle: "let",
    translation: "permitir",
  },
  begin: {
    present: "begin/begins",
    past: "began",
    participle: "begun",
    translation: "empezar",
  },
  help: {
    present: "help/helps",
    past: "helped",
    participle: "helped",
    translation: "ayudar",
  },
  talk: {
    present: "talk/talks",
    past: "talked",
    participle: "talked",
    translation: "hablar",
  },
  turn: {
    present: "turn/turns",
    past: "turned",
    participle: "turned",
    translation: "girar",
  },
  start: {
    present: "start/starts",
    past: "started",
    participle: "started",
    translation: "comenzar",
  },
  show: {
    present: "show/shows",
    past: "showed",
    participle: "shown",
    translation: "mostrar",
  },
  hear: {
    present: "hear/hears",
    past: "heard",
    participle: "heard",
    translation: "oír",
  },
  play: {
    present: "play/plays",
    past: "played",
    participle: "played",
    translation: "jugar",
  },
  run: {
    present: "run/runs",
    past: "ran",
    participle: "run",
    translation: "correr",
  },
  move: {
    present: "move/moves",
    past: "moved",
    participle: "moved",
    translation: "mover",
  },
  live: {
    present: "live/lives",
    past: "lived",
    participle: "lived",
    translation: "vivir",
  },
  believe: {
    present: "believe/believes",
    past: "believed",
    participle: "believed",
    translation: "creer",
  },
  bring: {
    present: "bring/brings",
    past: "brought",
    participle: "brought",
    translation: "traer",
  },
  happen: {
    present: "happen/happens",
    past: "happened",
    participle: "happened",
    translation: "ocurrir",
  },
  write: {
    present: "write/writes",
    past: "wrote",
    participle: "written",
    translation: "escribir",
  },
  provide: {
    present: "provide/provides",
    past: "provided",
    participle: "provided",
    translation: "proporcionar",
  },
  sit: {
    present: "sit/sits",
    past: "sat",
    participle: "sat",
    translation: "sentarse",
  },
  stand: {
    present: "stand/stands",
    past: "stood",
    participle: "stood",
    translation: "estar de pie",
  },
  lose: {
    present: "lose/loses",
    past: "lost",
    participle: "lost",
    translation: "perder",
  },
  pay: {
    present: "pay/pays",
    past: "paid",
    participle: "paid",
    translation: "pagar",
  },
  meet: {
    present: "meet/meets",
    past: "met",
    participle: "met",
    translation: "conocer/reunirse",
  },
  include: {
    present: "include/includes",
    past: "included",
    participle: "included",
    translation: "incluir",
  },
  continue: {
    present: "continue/continues",
    past: "continued",
    participle: "continued",
    translation: "continuar",
  },
  set: {
    present: "set/sets",
    past: "set",
    participle: "set",
    translation: "colocar/establecer",
  },
  learn: {
    present: "learn/learns",
    past: "learned/learnt",
    participle: "learned/learnt",
    translation: "aprender",
  },
  change: {
    present: "change/changes",
    past: "changed",
    participle: "changed",
    translation: "cambiar",
  },
  lead: {
    present: "lead/leads",
    past: "led",
    participle: "led",
    translation: "liderar",
  },
  understand: {
    present: "understand/understands",
    past: "understood",
    participle: "understood",
    translation: "entender",
  },
  watch: {
    present: "watch/watches",
    past: "watched",
    participle: "watched",
    translation: "ver/observar",
  },
  follow: {
    present: "follow/follows",
    past: "followed",
    participle: "followed",
    translation: "seguir",
  },
  stop: {
    present: "stop/stops",
    past: "stopped",
    participle: "stopped",
    translation: "detener",
  },
  create: {
    present: "create/creates",
    past: "created",
    participle: "created",
    translation: "crear",
  },
  speak: {
    present: "speak/speaks",
    past: "spoke",
    participle: "spoken",
    translation: "hablar",
  },
  read: {
    present: "read/reads",
    past: "read",
    participle: "read",
    translation: "leer",
  },
  allow: {
    present: "allow/allows",
    past: "allowed",
    participle: "allowed",
    translation: "permitir",
  },
  add: {
    present: "add/adds",
    past: "added",
    participle: "added",
    translation: "agregar",
  },
  spend: {
    present: "spend/spends",
    past: "spent",
    participle: "spent",
    translation: "gastar/pasar tiempo",
  },
  grow: {
    present: "grow/grows",
    past: "grew",
    participle: "grown",
    translation: "crecer",
  },
  open: {
    present: "open/opens",
    past: "opened",
    participle: "opened",
    translation: "abrir",
  },
  walk: {
    present: "walk/walks",
    past: "walked",
    participle: "walked",
    translation: "caminar",
  },
  win: {
    present: "win/wins",
    past: "won",
    participle: "won",
    translation: "ganar",
  },
  offer: {
    present: "offer/offers",
    past: "offered",
    participle: "offered",
    translation: "ofrecer",
  },
  remember: {
    present: "remember/remembers",
    past: "remembered",
    participle: "remembered",
    translation: "recordar",
  },
  love: {
    present: "love/loves",
    past: "loved",
    participle: "loved",
    translation: "amar",
  },
  consider: {
    present: "consider/considers",
    past: "considered",
    participle: "considered",
    translation: "considerar",
  },
  appear: {
    present: "appear/appears",
    past: "appeared",
    participle: "appeared",
    translation: "aparecer",
  },
  buy: {
    present: "buy/buys",
    past: "bought",
    participle: "bought",
    translation: "comprar",
  },
  wait: {
    present: "wait/waits",
    past: "waited",
    participle: "waited",
    translation: "esperar",
  },
  serve: {
    present: "serve/serves",
    past: "served",
    participle: "served",
    translation: "servir",
  },
  die: {
    present: "die/dies",
    past: "died",
    participle: "died",
    translation: "morir",
  },
  send: {
    present: "send/sends",
    past: "sent",
    participle: "sent",
    translation: "enviar",
  },
  expect: {
    present: "expect/expects",
    past: "expected",
    participle: "expected",
    translation: "esperar (expectativa)",
  },
  build: {
    present: "build/builds",
    past: "built",
    participle: "built",
    translation: "construir",
  },
  stay: {
    present: "stay/stays",
    past: "stayed",
    participle: "stayed",
    translation: "quedarse",
  },
  fall: {
    present: "fall/falls",
    past: "fell",
    participle: "fallen",
    translation: "caer",
  },
  cut: {
    present: "cut/cuts",
    past: "cut",
    participle: "cut",
    translation: "cortar",
  },
  reach: {
    present: "reach/reaches",
    past: "reached",
    participle: "reached",
    translation: "alcanzar",
  },
  kill: {
    present: "kill/kills",
    past: "killed",
    participle: "killed",
    translation: "matar",
  },
  remain: {
    present: "remain/remains",
    past: "remained",
    participle: "remained",
    translation: "permanecer",
  },
  suggest: {
    present: "suggest/suggests",
    past: "suggested",
    participle: "suggested",
    translation: "sugerir",
  },
  raise: {
    present: "raise/raises",
    past: "raised",
    participle: "raised",
    translation: "levantar",
  },
  pass: {
    present: "pass/passes",
    past: "passed",
    participle: "passed",
    translation: "pasar",
  },
  sell: {
    present: "sell/sells",
    past: "sold",
    participle: "sold",
    translation: "vender",
  },
  require: {
    present: "require/requires",
    past: "required",
    participle: "required",
    translation: "requerir",
  },
  report: {
    present: "report/reports",
    past: "reported",
    participle: "reported",
    translation: "informar/reportar",
  },
  decide: {
    present: "decide/decides",
    past: "decided",
    participle: "decided",
    translation: "decidir",
  },
};



btnWord.addEventListener("click", palabraA);

// También llamamos a la función al cargar la página
palabraA();

function palabraA() {
  // Obtener claves (verbos)
  const claves = Object.keys(palabras);
  const indiceAleatorio = Math.floor(Math.random() * claves.length);
  const resultado = claves[indiceAleatorio]; // e.g. "go"

  // Mostrar el verbo en el h1 con animación
  Word.textContent = resultado;
  Word.classList.remove("animate__bounceInUp");
  void Word.offsetWidth;
  Word.classList.add("animate__bounceInUp");

  const verbo = palabras[resultado];
  Wespa.textContent = verbo.translation;
  if (verbo) {
    presenteP.innerHTML = `<span class="first-word">Presente:</span> ${verbo.present}`;
    pasadoP.innerHTML = `<span class="first-word">Pasado:</span> ${verbo.past}`;
    participioP.innerHTML = `<span class="first-word">Participio pasado:</span> ${verbo.participle}`;

  } else {
    presenteP.textContent = "Presente: -";
    pasadoP.textContent = "Pasado: -";
    participioP.textContent = "Participio pasado: -";
  }
}
