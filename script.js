const buttons = document.querySelectorAll('#botoes button');
const jardim = document.getElementById('Jardim');
const mensagem = document.getElementById('mensagem');

const plantData = {
  Árvore: {
    emoji: '🌳',
    description: 'Árvore que purifica o ar e dá sombra para a cidade.',
  },
  Colheita: {
    emoji: '🌾',
    description: 'Colheita que alimenta a população da cidade.',
  },
  Rio: {
    emoji: '💧',
    description: 'Rio que fornece água limpa para todos.',
  },
  animais: {
    emoji: '🐄',
    description: 'Animal que ajuda na agricultura e alimentação.',
  }
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const type = button.getAttribute('data-type');
    addPlant(type);
  });
});

function addPlant(type) {
  const data = plantData[type];
  if (!data) {
    mensagem.textContent = `Erro: tipo ${type} não encontrado.`;
    return;
  }

  const plant = document.createElement('div');
  plant.classList.add('plant', 'growth-1');
  plant.textContent = data.emoji;

  if (!jardim) {
    console.error("Elemento com id 'Jardim' não encontrado!");
    return;
  }

  const maxX = jardim.clientWidth - 60;
  const maxY = jardim.clientHeight - 60;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  plant.style.left = `${x}px`;
  plant.style.top = `${y}px`;

  let growthStage = 1;

  plant.addEventListener('click', () => {
    if (growthStage < 3) {
      growthStage++;
      plant.className = `plant growth-${growthStage}`;
      mensagem.textContent = `O ${data.emoji} cresceu!`;
    } else {
      mensagem.textContent = `O ${data.emoji} já está totalmente crescido!`;
    }
  });

  jardim.appendChild(plant);
  mensagem.textContent = data.description;
}
