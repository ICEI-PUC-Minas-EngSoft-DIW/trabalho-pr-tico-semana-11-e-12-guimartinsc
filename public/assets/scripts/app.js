// =============================
// Contém a "base de dados" (JSON) e manipula index.html + detalhe.html
// =============================
const dadosNoticias = [
  {
    id: 1,
    titulo: "Craque brilha em clássico e decide partida",
    descricao: "Em um jogo eletrizante, o atacante marcou duas vezes e garantiu a vitória do seu time.",
    conteudo: `
      <p>Em uma partida emocionante realizada no estádio principal, o atacante demonstrou toda sua classe e habilidade. Com dois gols marcados em momentos cruciais do jogo, o jogador foi decisivo para a vitória de sua equipe.</p>
      <p>O primeiro gol saiu aos 23 minutos do primeiro tempo, quando o atacante recebeu um lançamento na entrada da área e, com um chapeu preciso, superou o goleiro adversário. O segundo, já no segundo tempo, foi marcado de pênalti aos 41 minutos, selando o resultado final.</p>
      <p>O técnico do time vencedor destacou em entrevista coletiva: "É um jogador diferenciado, que treina muito e sempre quer evoluir. Hoje colhemos os frutos do trabalho diário."</p>
      <p>Com essa atuação, o atacante chegou a 15 gols na competição e se consolidou como artilheiro isolado do campeonato.</p>
    `,
    categoria: "Em Alta",
    autor: "Guilherme Augusto",
    data: "2025-10-12",
    imagem: "assets/img/noticia 1/img1.png",
    galeria: ["assets/img/noticia 1/img1.png","assets/img/noticia 1/img2.png", "assets/img/noticia 1/img3.png"]
  },
  {
    id: 2,
    titulo: "Time anuncia novo técnico para a temporada",
    descricao: "Contratação surpreende a torcida; contrato de 2 anos com metas ambiciosas.",
    conteudo: `
      <p>O clube oficializou nesta segunda-feira a contratação do novo técnico, que assume o comando da equipe principal com um contrato válido por duas temporadas. A apresentação ocorreu na sede do clube com a presença de dirigentes e da imprensa.</p>
      <p>O novo comandante chega após uma passagem bem-sucedida por um clube do exterior, onde conquistou títulos importantes e desenvolveu um trabalho reconhecido pelo mercado.</p>
      <p>Em suas primeiras declarações, o técnico afirmou: "Estou muito feliz por essa oportunidade. Conheço a grandeza deste clube e estou ciente das responsabilidades. Vamos trabalhar muito para alcançar nossos objetivos."</p>
      <p>Entre as metas estabelecidas no contrato estão a classificação para competições internacionais e a formação de uma equipe competitiva para as principais disputas da temporada.</p>
    `,
    categoria: "Em Alta",
    autor: "Ana Souza",
    data: "2025-09-29",
    imagem: "assets/img/noticia 2/img1.png",
    galeria: ["assets/img/noticia 2/img1.png","assets/img/noticia 2/img2.png", "assets/img/noticia 2/img3.png"]
  },
  {
    id: 3,
    titulo: "Reforço internacional chega e promete mudanças",
    descricao: "Meia com experiência na Europa é o novo nome do mercado nacional.",
    conteudo: `
      <p>O meia internacional, com vasta experiência em campeonatos europeus, desembarcou no país para reforçar o elenco do time. A contratação foi considerada uma das mais importantes da janela de transferências.</p>
      <p>O jogador, que atuou por clubes na Espanha e Itália, assinou contrato por três temporadas e já participou de seus primeiros treinos com a nova equipe.</p>
      <p>"Estou muito motivado com esse novo desafio. Conheço a paixão da torcida brasileira pelo futebol e estou ansioso para poder contribuir com minha experiência", declarou o reforço.</p>
      <p>O diretor de futebol do clube destacou que o jogador chega para ocupar uma posição estratégica no esquema tático da equipe e deve agregar qualidade técnica e experiência internacional ao grupo.</p>
    `,
    categoria: "Em Alta",
    autor: "Ricardo Lima",
    data: "2025-09-28",
    imagem: "assets/img/noticia 3/img1.png",
    galeria: ["assets/img/noticia 3/img1.png","assets/img/noticia 3/img2.png", "assets/img/noticia 3/img3.png", "assets/img/noticia 3/img4.png"]
  },
  {
    id: 4,
    titulo: "Jovem marca no fim e sela classificação",
    descricao: "Base do clube segue mostrando talento nas competições nacionais.",
    conteudo: `
      <p>Em uma virada emocionante, o jovem da base marcou nos acréscimos e garantiu a classificação de sua equipe para a próxima fase da competição. O gol saiu aos 47 minutos do segundo tempo, após uma jogada coletiva que começou na defesa.</p>
      <p>Com apenas 19 anos, o atleta é mais um produto da famosa base do clube, que tem revelado diversos talentos nos últimos anos. Esta foi sua primeira partida como titular no time principal.</p>
      <p>"É um momento indescritível. Sonhei com isso desde criança, treinei muito para ter essa oportunidade e agradeço aos meus companheiros pela confiança", disse o jovem herói da partida.</p>
      <p>O técnico elogiou a atitude do jogador: "Ele merece. É um garoto dedicado, humilde e com muito talento. Temos que cuidar bem desses joias que surgem em nossa base."</p>
    `,
    categoria: "Notícias Recentes",
    autor: "Fernanda Torres",
    data: "2025-10-19",
    imagem: "assets/img/noticia 4/img1.png",
    galeria: ["assets/img/noticia 4/img1.png","assets/img/noticia 4/img2.png","assets/img/noticia 4/img3.png"]
  },
  {
    id: 5,
    titulo: "Lesão preocupa comissão técnica",
    descricao: "Atleta sofre lesão e passa por exames; retorno estimado em semanas.",
    conteudo: `
      <p>O atleta sofreu uma lesão muscular durante os treinos desta manhã e foi imediatamente encaminhado para exames. A primeira avaliação médica indica uma lesão grau II no músculo da coxa.</p>
      <p>De acordo com o departamento médico do clube, o jogador passará por um período de tratamento e reabilitação. O tempo estimado para retorno aos gramados é de três a quatro semanas.</p>
      <p>"É uma baixa importante, pois se trata de um jogador-chave em nosso esquema. Vamos aguardar os resultados dos exames complementares para ter um diagnóstico mais preciso", afirmou o coordenador médico.</p>
      <p>A lesão ocorre em um momento crucial da temporada, com jogos decisivos pelas competições que o time disputa. A comissão técnica já estuda alternativas para suprir a ausência do atleta.</p>
    `,
    categoria: "Notícias Recentes",
    autor: "Pedro Alves",
    data: "2025-10-19",
    imagem: "assets/img/noticia 5/img1.png",
    galeria: ["assets/img/noticia 5/img1.png","assets/img/noticia 5/img2.png","assets/img/noticia 5/img3.png","assets/img/noticia 5/img4.png","assets/img/noticia 5/img5.png"]
  },
  {
    id: 6,
    titulo: "Clube confirma amistoso internacional",
    descricao: "Partida será transmitida para vários países e serve de preparação.",
    conteudo: `
      <p>O clube oficializou a realização de um amistoso internacional contra uma tradicional equipe europeia. A partida está marcada para o próximo mês e será disputada em território nacional.</p>
      <p>O jogo faz parte da preparação para a reta final da temporada e servirá como teste para a equipe enfrentar um estilo de futebol diferente do habitual no campeonato local.</p>
      <p>"É uma grande oportunidade para medir nosso nível contra uma equipe de alto padrão europeu. Além disso, será um espetáculo para nossos torcedores", declarou o presidente do clube.</p>
      <p>A transmissão do jogo será feita para mais de 50 países, representando uma excelente oportunidade de exposição internacional para o clube e para o futebol nacional. A renda da partida será revertida para projetos sociais apoiados pela instituição.</p>
    `,
    categoria: "Notícias Recentes",
    autor: "Mariana Costa",
    data: "2025-10-19",
    imagem: "assets/img/noticia 6/img1.png",
    galeria: ["assets/img/noticia 6/img1.png","assets/img/noticia 6/img2.png", "assets/img/noticia 6/img3.png"]
  }
];

// Funções utilitárias
function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function createCard(noticia) {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-lg-4 mb-3";

  const article = document.createElement("article");
  article.className = "caixa-post h-100 p-2 p-md-3 mx-auto mx-sm-0";

  article.innerHTML = `
    <img src="${noticia.imagem}" alt="${escapeHtml(noticia.titulo)}" class="img-fluid mb-2 w-100">
    <h3 class="h5 titulo">${escapeHtml(noticia.titulo)}</h3>
    <p class="texto mb-2">${escapeHtml(noticia.descricao)}</p>
    <a href="detalhe.html?id=${encodeURIComponent(noticia.id)}" class="btn btn-sm detalhe-btn w-100">Ver detalhe</a>
  `;

  col.appendChild(article);
  return col;
}

function escapeHtml(str) {
  if (!str && str !== 0) return "";
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Converte "YYYY-MM-DD" ou "YYYY/MM/DD" para Date no horário local
function parseDateLocal(dateStr) {
  if (!dateStr) return null;
  const sep = dateStr.includes('-') ? '-' : (dateStr.includes('/') ? '/' : null);
  if (sep) {
    const parts = dateStr.split(sep);
    if (parts.length >= 3) {
      const ano = Number(parts[0]);
      const mes = Number(parts[1]); // 1-12
      const dia = Number(parts[2]);
      if (!Number.isNaN(ano) && !Number.isNaN(mes) && !Number.isNaN(dia)) {
        return new Date(ano, mes - 1, dia);
      }
    }
  }
  const maybe = new Date(dateStr);
  return isNaN(maybe) ? null : maybe;
}

//Montagem dos cards no index 
function montarCardsIndex() {
  const emAltaContainer = qs("#emAltaContainer");
  const recentesContainer = qs("#recentesContainer");
  if (!emAltaContainer || !recentesContainer) return;
  emAltaContainer.innerHTML = "";
  recentesContainer.innerHTML = "";

  // Filtra as notícias pela categoria
  const emAlta = dadosNoticias.filter(noticia => noticia.categoria === "Em Alta");
  const recentes = dadosNoticias.filter(noticia => noticia.categoria === "Notícias Recentes");

  emAlta.forEach(n => {
    emAltaContainer.appendChild(createCard(n));
  });
  recentes.forEach(n => {
    recentesContainer.appendChild(createCard(n));
  });
}

//Carregar detalhe da notícia
function acharNoticiaPorId(id) {
  id = Number(id);
  return dadosNoticias.find(n => Number(n.id) === id) || null;
}

// Função para carregar os detalhe da notícia e preencher o layout
function carregarDetalhe() {
  const params = new URLSearchParams(location.search);
  const id = Number(params.get("id"));
  const noticia = dadosNoticias.find(n => n.id === id);
  const pageTitle = qs("#pageTitle");
  const mainImage = qs("#mainImage");
  const infoData = qs("#infoData");
  const infoAutor = qs("#infoAutor");
  const infoCategoria = qs("#infoCategoria");
  const galeriaContainer = qs("#galeriaContainer");
  const conteudoFull = qs("#conteudoFull");

  if (!noticia) {
    if (pageTitle) pageTitle.textContent = "Notícia não encontrada";
    if (conteudoFull) conteudoFull.innerHTML = '<p>Notícia não encontrada.</p><a href="index.html" class="btn voltar-btn mt-2">Voltar à Página Inicial</a>';
    return;
  }

  if (pageTitle) {
    pageTitle.textContent = noticia.titulo || "Detalhe do Item";
    pageTitle.className = "titulo-destaque"; 
  }
  if (mainImage) mainImage.src = noticia.imagem || "assets/img/img1.jpg";

  if (infoData) {
    const d = parseDateLocal(noticia.data);
    infoData.textContent = d ? d.toLocaleDateString('pt-BR') : "";
  }

  if (infoAutor) infoAutor.textContent = noticia.autor || "";
  if (infoCategoria) infoCategoria.textContent = noticia.categoria || "";

  // Galeria de fotos
  galeriaContainer.innerHTML = "";
  let fotos = [];
  if (noticia.galeria && Array.isArray(noticia.galeria) && noticia.galeria.length > 0) {
    fotos = noticia.galeria;
  } else {
    fotos = dadosNoticias.slice(0, 6).map(n => n.imagem).filter(Boolean);
  }
  fotos.forEach((src, idx) => {
    const col = document.createElement("div");
    col.className = "card";
    col.innerHTML = `
      <img src="${src}" class="card-img-top img-fluid" alt="Foto ${idx + 1}">
    `;
    galeriaContainer.appendChild(col);
  });
  if (conteudoFull) conteudoFull.innerHTML = noticia.conteudo || "";
}

// Carousel
function montarCarousel() {
  const container = qs("#destaqueCarouselContainer");
  if (!container) return;
  const destaques = dadosNoticias.filter(n => n.categoria && n.categoria.toLowerCase().includes("em alta"));
  if (destaques.length === 0) {
    container.innerHTML = "<p class='text-muted'>Nenhum item em destaque no momento.</p>";
    return;
  }
  let indicators = '';
  let inner = '';

  destaques.forEach((item, idx) => {
    indicators += `<button type="button" data-bs-target="#destaqueCarousel" data-bs-slide-to="${idx}" ${idx === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${idx + 1}"></button>`;

    inner += `
      <div class="carousel-item ${idx === 0 ? 'active' : ''}">
        <img src="${item.imagem}" class="d-block w-100 carousel-img" alt="${escapeHtml(item.titulo)}">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
          <h5>${escapeHtml(item.titulo)}</h5>
          <p>${escapeHtml(item.descricao)}</p>
          <a href="detalhe.html?id=${item.id}" class="stretched-link"></a>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div id="destaqueCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        ${indicators}
      </div>
      <div class="carousel-inner">
        ${inner}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#destaqueCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#destaqueCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Próximo</span>
      </button>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  if (qs("#emAltaContainer") && qs("#recentesContainer")) {
    montarCarousel();
    montarCardsIndex();
    return;
  }

  if (location.pathname.endsWith("detalhe.html") || location.pathname.endsWith("detalhe.html")) {
    carregarDetalhe();
    return;
  }
});
