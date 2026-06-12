  for (let i = 0; i < qtdArvores; i++) {
    let x = map(i, 0, 12, 420, 760);
    desenharArvore(x, 350, valor);
  }

  // 5. TECNOLOGIA SUSTENTÁVEL (Turbinas eólicas aparecem no ponto de equilíbrio)
  if (valor >= 40 && valor <= 75) {
    desenharUsinasEolicas(380, 350);
    desenharUsinasEolicas(430, 360);
  }

  // 6. INTERFACE DO USUÁRIO (Painel de Dados)
  desenharInterface(valor, saudeLavoura);
}

// --- FUNÇÕES AUXILIARES DE DESENHO ---

function desenharArvore(x, y, valor) {
  push();
  // Tronco
  fill(101, 67, 33);
  rect(x - 6, y - 40, 12, 40);
  // Copas (ficam mais verdes e vivas com alta sustentabilidade)
  let corCopa = lerpColor(color(160, 140, 60), color(34, 139, 34), valor / 100);
  fill(corCopa);
  noStroke();
  ellipse(x, y - 50, 45, 45);
  ellipse(x - 15, y - 40, 35, 35);
  ellipse(x + 15, y - 40, 35, 35);
  pop();
}

function desenharLavoura(x, y, saude) {
  push();
  // Cor do trigo/grão baseada na saúde da planta
  let corTrigo = lerpColor(color(110, 90, 50), color(230, 190, 50), saude / 100);
  stroke(corTrigo);
  strokeWeight(4);
