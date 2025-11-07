const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
let userName = null;
let lastTopic = null; // Vairável para lembrar o último assunto falado
let userGender = null;
// Peguntar o nome, assim que o chat abrir 
window.onload = function() {
  addMessage("FitBody: Olá! Qual é o seu nome? ", "bot");
}

// Função para enviar mensagem
function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage("Eu: " + message, "user");
  userInput.value = "";

  setTimeout(() => {
    const reply = getBotReply(message);
    addMessage( "FitBody: " + reply, "bot");
  }, 500);
}

// Adiciona mensagem ao chat
function addMessage(message, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.textContent = message;
  msgDiv.className = sender;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Função principal do bot
function getBotReply(message) {
  message = message.toLowerCase();

  // Perguntar e guardar o nome 
  if (!userName) {
    userName = message.charAt(0).toUpperCase() + message.slice(1);
    return "Prazer em te conhecer " + userName + "! Poderia me informar seu gênero (Masculino, Feminino ou Prefiro não informar)! "
  }

  // Guardar o gênero e chama a função correspondente 
  if (!userGender) {
    if (message.includes("feminino") || message.includes ("mulher") || message.includes("prefiro não informar")) {
      userGender = "feminino";
      return feminino ("oi");
    } else if (message.includes("masculino") || message.includes("homem")) {
      userGender="masculino";
      return masculino("oi");
    } else {
      return "Desculpe, não entendi!"
    }
  }

  if (userGender === "feminino") {
    return feminino(message);
  } else if (userGender === "masculino") {
    return masculino(message);
  } else {
    return "Gênero não identificado"
  }
}

function comprimentos () {
  return  userName+ "! Posso te ajuda com treinos de musculação, treinos de corrida e dietas, qual dos dois tem interessa? Para facilitar a nossa comunicação poderia resumir suas perguntas/respostas a uma ou duas palavras! "
}

function feminino(message) {
  const affirmatives = ["sim", "claro", "com certeza", "quero sim"];
  const negative = ["não", "quero não"];
  const ini = "iniciante";
  const inter = "intermediário";
  const avan = "avançado"

  if (ini.includes(message)) {
    lastTopic = null;
    return `Treino de Corrida - Iniciante (4 semanas)
    \n Semana 1 - 1 min de corrida leve + 2 min de caminhada × 8
    \n Semana 2 - 2 min de corrida leve + 2 min de caminhada × 6
    \n Semana 3 - 3 min de corrida + 1,5 min de caminhada × 6
    \n Semana 4 - 5 min de corrida + 1 min de caminhada × 5`;

  } else if (inter.includes(message)) {
    return `Treino de Corrida - Intermediário (6 semanas)
    \n Frenquência: 4x por semana 
    \n Segunda - 30–40 min em ritmo confortável
    \n Terça - 200 m rápido + 200 m leve × 8
    \n Quinta - 5 km em ritmo moderado
    \n Sábado - 20–25 min leve + alongamento `;

  } else if (avan.includes(message)) {
    return `Treino de Corrida - Avançado (8 semanas)
    \n Frequência: 5x por semana 
    \n Segunda - 400 m rápido + 200 m trote × 10 (descanso 60s)
    \n Terça - 30 min leve
    \n Quarta - 6–8 km a 80% da sua capacidade
    \n Sexta - 800 m rápido + 400 m leve × 6
    \n Domingo - 10–12 km ritmo confortável `

  }

  if (affirmatives.includes(message)) {
    if (lastTopic === "musculação") {
      lastTopic = null;
      return `${userName}, aqui está seu plano de treino avançado (abcde):
      \nDivisão semanal 
      \n- Segunda: Glúteo e Posterior
      \n- Terça: Peito, Ombro e Tríceps
      \n- Quarta: Descanso
      \n- Quinta: Quadríceps e Core
      \n- Sexta: Costas e Bíceps
      \n- Sábado: Corpo inteiro (ênfase em resistência muscular)
      \n- Domingo: Descanso
      \n\nDetalhamento dos treinos
      \nTreino A - Glúteo e Posterior (6 exercícios)
      \n1- Agachamento sumô 4x10
      \n2- Cadeira flexora 4x12
      \n3- Stiff com halteres 4x10
      \n4- Elevação pélvica (hip thrust) 5x10
      \n5- Cadeira abdutora 4x15
      \n6- Passada com step 3x12 por perna
      \nTreino B - Peito, Ombro e Tríceps (6 exercícios)
      \n1- Supino reto 4x10
      \n2- Supino inclinado 4x10
      \n3- Elevação lateral 4x12
      \n4- Desenvolvimento com halteres 3x10
      \n5- Tríceps testa 3x12
      \n6- Mergulho no banco 3x até a falha
      \nTreino C - Quadríceps e Core (6 exercícios)
      \n1- Agachamento livre 5x8
      \n2- Cadeira extensora 4x12
      \n3- Leg press 4x10
      \n4- Avanço (lunges) 3x12
      \n5- Prancha 3x 45s
      \n6- Abdominal infra suspenso 3x15
      \nTreino D - Costas e Bíceps (6 exercícios)
      \n1- Puxada frente 4x10
      \n2- Remada curvada 4x10
      \n3- Puxada triângulo 4x12
      \n4- Rosca direta 3x10
      \n5- Rosca martelo 3x12
      \n6- Encolhimento de ombros 3x15
      \nTreino E - Corpo inteiro (6 exercícios)
      \n1- Agachamento com salto — 3x15
      \n2- Flexão de braço — 3x12
      \n3- Stiff — 3x10
      \n4- Remada curvada — 3x10
      \n5- Abdominal prancha dinâmica — 3x 45s
      \n6- 20 min de cardio leve (bicicleta ou caminhada inclinada)`;
    }
  }

  if (negative.includes(message)) {
    if (lastTopic === "musculação") {
      lastTopic = null;
      return `${userName}, Posso lhe ajuda com a dieta também: (Digite ver dieta) `
    }
  }

  if (affirmatives.includes(message)) {
    if (lastTopic === "dieta") {
      lastTopic = null;
      return`Aqui vai algumas Dicas Importantes a serem seguidas!
      \n- Beba 2 a 2,5L de água por dia, para calcular a quantidade necessária de água por dia: multiplique o peso corporal (em kg) por 35ml; 
      \n- Evite refrigerantes, ultraprocessados e excesso de açúcar;
      \n- Inclua vegetais em todas as refeições principais;
      \n- Ajuste as porçoes conforme o objetivo (para emagrecer -> reduza carboidratos; para ganhar massa -> aumente proteína e carboidratos);`
    }
  }

  if (
    message.includes("musculação") ||
    message.includes("treino de musculação")
  ) {
    lastTopic="musculação";
    return `${userName}, aqui está uma divisão de treinos para iniciantes (ab):
    \n Divisão semanal
    \n- Segunda: Inferior;
    \n- Terça: Superior;
    \n- Quarta: Descanso;
    \n- Quinta: Superior;
    \n- Sexta: Inferior;
    \n- Sábado: Descanso.
    \n\n Detalhamento dos treinos 
    \nTreino A - Superior (6 exercícios)
    \n 1- Caminhada na esteira - 12 minutos 
    \n 2- Supino máquina 3x 10-12
    \n 3- Remada máquina 3x 10-12
    \n 4- Desenvolvimento máquina 3x 10-12
    \n 5- Trinceps máquina 3x 10-12
    \n 6- Biceps com hateres (unilateral) 3x 10-12
    \n\n Treino B - Inferior (6 exercícios)
    \n 1- Agachamento livre 3x 10-12
    \n 2- Leg horizontal 3x 10-12
    \n 3- Mesa flexora 3x 10-12
    \n 4- Cadeira adutora 3x 10-12
    \n 5- Cadeira abdutora 3x 10-12
    \n 6- Panturrilha em pé 3x 10-12
    \nQuer que eu monte uma divisão de treino mais avançado? `;
  } else if (
    message.includes("dieta") ||
    message.includes("alimentação") ||
    message.includes("comida")
  ) {
    lastTopic="dieta";
    return `${userName}, aqui vai uma sugestão de dieta equilibrada:
    \nCafé da manhã
    \n- 1 fatia de pão integral OU 3 colheres de aveia
    \n- 2 ovos mexidos OU 1 omelete com legumes
    \n- 1 fruta (banana, maçã ou mamão)
    \n- 1 café preto ou com leite desnatado (sem açúcar ou com pouco adoçante)
    \n\nLanche da manhã
    \n- 1 iogurte natural OU 1 copo de leite desnatado
    \n- 1 punhado (30 g) de castanhas ou amêndoas
    \n\nAlmoço
    \n- 1 filé de frango, peixe ou carne magra (100-150 g)
    \n- 3 colheres de arroz integral OU 1 concha média de feijão
    \n- Salada variada à vontade (alface, tomate, cenoura, beterraba etc.)
    \n- 1 colher de azeite de oliva extra virgem para temperar
    \n- 1 fruta de sobremesa (opcional)
    \n\nLanche da tarde
    \n- 1 fatia de pão integral OU 2 bolachas integrais
    \n -1 fatia de queijo branco OU 1 colher de pasta de amendoim
    \n- 1 fruta (como maçã, pera ou laranja)
    \n\nJantar
    \n- 1 porção de proteína: frango, peixe ou ovos
    \n- 2 colheres de arroz integral OU batata doce
    \n- Legumes cozidos ou refogados (brócolis, couve-flor, abobrinha, etc.)
    \n Posso te dar algumas Dicas Importantes? `;
    
  } else if(
    message.includes("corrida") ||
    message.includes("treino de corrida") ||
    message.includes("corridas")
  ) {
    lastTopic="corrida"
    return `${userName}, irei mostar um treino de corrida, com foco em melhorar resistência, velocidade e condicionamento físico geral. Poderia me informar o seu nível atual (iniciante, intermediário ou avançado):`

  } else {
    return comprimentos();
  }
}

function masculino(message) {
  const affirmatives = ["sim", "claro", "com certeza", "quero sim"];
  const negative = ["não", "quero não"];
  const ini = "iniciante";
  const inter = "intermediário";
  const avan = "avançado"

  if (ini.includes(message)) {
    lastTopic = null;
    return `Treino de Corrida - Iniciante (4 semanas)
    \n Frenquência: 3x por semana
    \n Segunda - 1 min de corrida + 2 min de caminhada × 8 (24 min)
    \n Quarta - 20–25 min em ritmo confortável (pode caminhar se cansar)
    \n Sexta - 2 min de corrida + 1 min de caminhada × 6 (18 min)`;

  } else if (inter.includes(message)) {
    return `Treino de Corrida - Intermediário (6 semanas)
    \n Frenquência: 4x por semana 
    \n Segunda - 30–40 min em ritmo confortável
    \n Terça - 200 m rápido + 200 m leve × 8
    \n Quinta - 5–6 km em ritmo moderado (70–80% da capacidade)
    \n Sábado - 7–8 km em ritmo leve e constante `;

  } else if (avan.includes(message)) {
    return `Treino de Corrida - Avançado (8 semanas)
    \n Frequência: 5x por semana 
    \n Segunda - 400 m rápido + 200 m leve × 10 (descanso 1 min)
    \n Terça - 30–40 min leve
    \n Quarta - 6–8 km a 80% da sua capacidade
    \n Sexta - 800 m rápido + 400 m leve × 6
    \n Domingo - 10–12 km em ritmo leve e constante `

  }

  if (affirmatives.includes(message)) {
    if (lastTopic === "musculação") {
      lastTopic = null;
      return `${userName}, aqui está seu plano de treino avançado (abcde):
      \nDivisão semanal 
      \n- Segunda: Peito e Tríceps
      \n- Terça: Costas e Bíceps
      \n- Quarta: Pernas (completo)
      \n- Quinta: Ombros e Trapézio
      \n- Sexta: Abdômen + cardio
      \n- Sábado: Descanso
      \n- Domingo: Descanso
      \n\nDetalhamento dos treinos
      \nTreino A - Peito e Tríceps (7 exercícios)
      \n1- Supino reto com barra 4x8–10
      \n2- Supino inclinado com halteres 4x10
      \n3- Crucifixo inclinado 3x12
      \n4- Cross-over (cabos) 3x15
      \n5- Tríceps testa 3x10
      \n6- Tríceps testa 3x10
      \n7- Mergulho (peso corporal) 3x até a falha
      \nTreino B - Costas e Bíceps (7 exercícios)
      \n1- Puxada na frente (pegada aberta) 4x10
      \n2- Remada curvada (barra ou halteres) 4x8–10
      \n3- Puxada triângulo (pegada neutra) 3x12
      \n4- Remada unilateral com halter 3x10
      \n5- Rosca direta (barra) 4x10
      \n6- Rosca alternada 3x12
      \n7- Rosca martelo 3x12
      \nTreino C - Perna Completo (7 exercícios)
      \n1- Agachamento livre 5x8
      \n2- Cadeira extensora 4x12
      \n3- Leg press 4x10
      \n4- Avanço (lunges) 3x12
      \n5- Stiff com halteres — 4x10
      \n6- Panturrilha em pé — 4x1
      \n7- Mesa flexora — 4x12
      \nTreino D - Ombros e Trapézio (6 exercícios)
      \n1- Desenvolvimento militar (barra ou halteres) 4x10
      \n2- Elevação lateral 4x12
      \n3- Elevação frontal 3x12
      \n4- Remada alta — 3x10
      \n5- Encolhimento de ombros 4x15
      \n6- Face pull (corda) 3x15
      \nTreino E - Abdômen + Cardio (5 exercícios)
      \n1- Prancha isométrica 3x45s
      \n2- Abdominal infra suspenso 3x15
      \n3- Elevação de pernas 3x15
      \n4- Abdominal oblíquo 3x20
      \n5- Cardio HIIT: 20–25 minutos`;
    }
  }

  if (negative.includes(message)) {
    if (lastTopic === "musculação") {
      lastTopic = null;
      return `${userName}, Posso lhe ajuda com a dieta também: (Digite ver dieta) `
    }
  }

  if (affirmatives.includes(message)) {
    if (lastTopic === "dieta") {
      lastTopic = null;
      return`Aqui vai algumas Dicas Importantes a serem seguidas!
      \n- Beba 2 a 2,5L de água por dia, para calcular a quantidade necessária de água por dia: multiplique o peso corporal (em kg) por 35ml; 
      \n- Evite refrigerantes, ultraprocessados e excesso de açúcar;
      \n- Inclua vegetais em todas as refeições principais;
      \n- Ajuste as porçoes conforme o objetivo (para emagrecer -> reduza carboidratos; para ganhar massa -> aumente proteína e carboidratos);`
    }
  }

  if (
    message.includes("musculação") ||
    message.includes("treino de musculação")
  ) {
    lastTopic="musculação";
    return `${userName}, aqui está uma divisão de treinos para iniciantes (ab):
    \n Divisão semanal
    \n- Segunda: Peito, Ombro e Tríceps;
    \n- Terça: Costas, bíceps e Pernas;
    \n- Quarta: Descanso;
    \n- Quinta: Peito, Ombro e Tríceps;
    \n- Sexta: Costas, bíceps e Pernas;
    \n- Sábado: Descanso.
    \n\n Detalhamento dos treinos 
    \nTreino A - Peito, Ombro e Tríceps (6 exercícios)
    \n 1- Supino reto (máquina ou barra) 3x10
    \n 2- Supino inclinado com halteres 3x10
    \n 3- Desenvolvimento de ombro (máquina ou halteres) 3x12
    \n 4- Elevação lateral 3x12
    \n 5- Tríceps corda (polia) 3x12
    \n 6- Mergulho no banco (peso corporal) 3x até a falha
    \n\n Treino B - Inferior (7 exercícios)
    \n 1- Puxada na frente (pegada aberta) 3x10
    \n 2- Remada baixa (ou curvada) 3x10
    \n 3- Rosca direta (halteres ou barra) 3x12
    \n 4- Rosca alternada 3x12
    \n 5- Agachamento livre (sem carga ou com halteres leves) – 3x12
    \n 6- Leg press 3x10
    \n 7- Mesa flexora (posterior de coxa) 3x12
    \nQuer que eu monte uma divisão de treino mais avançado? `;
  } else if (
    message.includes("dieta") ||
    message.includes("alimentação") ||
    message.includes("comida")
  ) {
    lastTopic="dieta";
    return `${userName}, aqui vai uma sugestão de dieta equilibrada:
    \nCafé da manhã
    \n- 3 ovos mexidos (ou cozidos)
    \n- 2 fatias de pão integral
    \n- 1 fatia de queijo branco OU 1 colher de pasta de amendoim
    \n- 1 fruta média (banana ou maçã)
    \n- 1 copo de leite desnatado OU café com leite sem açúcar
    \n\nLanche da manhã
    \n- 1 iogurte natural OU 1 copo de leite desnatado
    \n- 1 punhado (30 g) de castanhas ou amêndoas
    \n- 1 fruta (mamão, maçã ou pera)
    \n\nAlmoço
    \n- 1 filé de frango, peixe ou carne magra (100-150 g)
    \n- 3 colheres de arroz integral 
    \n- 1 concha média de feijão
    \n- Salada variada à vontade (alface, tomate, cenoura, beterraba etc.)
    \n- 1 colher de azeite de oliva extra virgem para temperar
    \n- 1 fruta de sobremesa (opcional)
    \n\nLanche da tarde
    \n- 1 sanduíche natural integral com peito de frango ou atum
    \n- 1 suco natural sem açúcar OU água de coco
    \n\nJantar
    \n- 150–200 g de frango, carne magra ou peixe
    \n- 3 colheres (sopa) de arroz integral OU purê de batata-doce
    \n- Legumes cozidos ou salteados (brócolis, abobrinha, cenoura)
    \n\nCeia (antes de dormir)
    \n- 1 copo de leite desnatado ou 1 iogurte natural
    \n- 2 colheres de aveia ou 1 punhado de castanhas
    \n Posso te dar algumas Dicas Importantes? `;
    
  } else if (
    message.includes("corrida") ||
    message.includes("treino de corrida") ||
    message.includes("corridas")
  ) {
    lastTopic="corrida"
    return `${userName}, irei mostar um treino de corrida, com foco em melhorar resistência, velocidade e condicionamento físico geral. Poderia me informar o seu nível atual (iniciante, intermediário ou avançado):`

  }else {
    return comprimentos();
  }
}