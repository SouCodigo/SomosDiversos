import React from 'react';

function Main() {
  return (
    <main>
      <div class="text-center">
        <h6 className="bg-warning border">Site em construção</h6>
        <p>Barra de Progresso</p>
        <div class="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="40"
        aria-valuemin="0"
        aria-valuemax="100">
        <div class="progress-bar w-50"></div>
      </div>
      </div>
      <span></span>
      <h1 class="text-center">SomosDiversos</h1>
      <h2 class="text-center">Bem-vindo à nossa Plataforma Educacional sobre Diversidade!</h2>
      <h3 class="text-center">
        SomosDiversos é um lugar onde você pode encontrar temas sobre diversidade,
        desde temas como idade, raça, cultura até acessibilidade, orientação sexual,
        identidade de gênero e religião
      </h3>
      <span></span>
      <h2 class="text-center">Por que SomosDiversos?</h2>
      <h4 class="text-center">
        Dúvidas sobre quem somos, o que somos podem surgir em qualquer idade da vida,
        ninguém é obrigado a se encaixar em termos, mas ter uma palavra, um nome, ou
        conhecer sobre, pode ajudar muitas pessoas, além de combater o preconceito por
        pura falta de conhecimento sobre.
      </h4>
      <span></span>
      <h4 class="text-center">
        A diversidade pode surgir de qualquer lugar e pessoa, por que não se acolher
        como diverso e acolher o outro? O SomosDiversos é um local de acolhimento, para
        quem precisa ser acolhido no momento de dúvidas que podem surgir durante a vida.
      </h4>
    </main>
  );
}

export default Main;