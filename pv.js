const btnWord = document.getElementById("btnWord");
const Word = document.getElementById("Word");
const Wespa = document.getElementById("wespa");

const phrasalVerbs = {
  "ask out": "invitar a salir (románticamente)",
  "back up": "respaldar o dar soporte; hacer copia de seguridad",
  "blow up": "explotar; enojarse mucho",
  "break down": "descomponerse; colapsar emocionalmente",
  "break up": "romper una relación",
  "bring up": "mencionar un tema; criar a un niño",
  "call off": "cancelar",
  "calm down": "calmarse",
  "carry on": "continuar",
  "check in": "registrarse (hotel, aeropuerto)",
  "check out": "revisar; pagar y salir (hotel)",
  "come across": "encontrarse con algo por casualidad",
  "come back": "regresar",
  "come in": "entrar",
  "come on": "vamos; avanzar",
  "come over": "visitar",
  "cut down": "reducir (consumo de algo)",
  "cut off": "cortar (suministro o comunicación)",
  "deal with": "lidiar con",
  "do over": "repetir",
  "do without": "arreglárselas sin algo",
  "dress up": "vestirse elegante",
  "drop by": "pasar sin avisar",
  "drop off": "dejar a alguien/llevarlo en coche",
  "end up": "terminar (haciendo algo)",
  "fall apart": "desmoronarse emocionalmente o físicamente",
  "fall behind": "quedarse atrás",
  "figure out": "resolver; entender",
  "fill in": "completar (formulario)",
  "fill out": "rellenar (formulario completo)",
  "fill up": "llenar por completo",
  "find out": "descubrir",
  "get along": "llevarse bien",
  "get around": "moverse; evitar",
  "get away": "escapar",
  "get back": "regresar",
  "get in": "entrar",
  "get off": "bajarse de un vehículo",
  "get on": "subirse (bus, tren); llevarse bien",
  "get out": "salir (de un lugar)",
  "get over": "superar (algo emocional)",
  "get rid of": "deshacerse de",
  "get together": "reunirse",
  "get up": "levantarse (de la cama)",
  "give away": "regalar; revelar",
  "give up": "rendirse; dejar de hacer algo",
  "go ahead": "continuar; dar permiso",
  "go away": "irse",
  "go back": "volver",
  "go off": "sonar (alarma); estallar",
  "go on": "continuar; pasar",
  "go out": "salir (de casa; románticamente)",
  "grow up": "crecer; madurar",
  "hang on": "esperar",
  "hang out": "pasar el rato",
  "hang up": "colgar (teléfono)",
  "hold on": "esperar; resistir",
  "hold up": "retrasar; asaltar",
  "keep on": "seguir haciendo algo",
  "keep up": "mantener el ritmo",
  "kick out": "echar a alguien",
  "leave out": "omitir",
  "let down": "decepcionar",
  "let in": "dejar entrar",
  "log in": "iniciar sesión",
  "log out": "cerrar sesión",
  "look after": "cuidar de",
  "look at": "mirar",
  "look for": "buscar",
  "look forward to": "esperar con ansias",
  "look out": "tener cuidado",
  "look over": "revisar rápidamente",
  "look up": "buscar información; mejorar",
  "make up": "inventar; reconciliarse",
  "mix up": "confundir",
  "move in": "mudarse (a un lugar)",
  "move out": "mudarse (de un lugar)",
  "pass away": "morir",
  "pass out": "desmayarse; repartir",
  "pay back": "devolver dinero",
  "pick out": "elegir",
  "pick up": "recoger",
  "point out": "señalar",
  "put away": "guardar",
  "put off": "posponer",
  "put on": "ponerse (ropa); encender",
  "put out": "apagar (fuego, cigarro)",
  "put up with": "tolerar",
  "run into": "encontrarse con alguien por casualidad",
  "run out": "quedarse sin algo",
  "set up": "establecer; configurar",
  "show off": "presumir",
  "shut down": "cerrar (negocio o computadora)",
  "slow down": "disminuir la velocidad",
  "speak up": "hablar más fuerte",
  "stand out": "destacar",
  "take off": "despegar (avión); quitarse ropa",
  "take out": "sacar; invitar a salir",
  "turn on": "encender",
  "turn off": "apagar",
};


btnWord.addEventListener("click", palabraA);

// También llamamos a la función al cargar la página
palabraA();

function palabraA() {
  // Obtener claves (verbos)
  const claves = Object.keys(phrasalVerbs);
  const indiceAleatorio = Math.floor(Math.random() * claves.length);
  console.log(indiceAleatorio)
  const resultado =claves[indiceAleatorio]
  const traduccion = phrasalVerbs[resultado]
  // Mostrar el verbo en el h1 con animación
  Word.textContent = resultado;
  Wespa.textContent = traduccion;
  Word.classList.remove("animate__bounceInUp");
  void Word.offsetWidth;
  Word.classList.add("animate__bounceInUp");


}
