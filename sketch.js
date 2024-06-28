function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0);
    circle(0, 0, 50);
  }
  
    //( , , , )
  function draw() {
      background(0);
      mostraBolinha();
      movimentaBolinha();
      verificaColisaoBorda();
      rect(5, 150, 10, 90);
  }
  
  //variavels da bolinha
  let xBolinha = 300;
  let yBolinha = 200;
  let diametro = 15;
  let raio = diametro /2;
  
  //velocidade bolinha
  let velocidadexBolinha = 6;
  let velocidadeyBolinha = 6;
  
  function setup() {
      createCanvas(600, 400);
  }
  
  function draw() {
      background(0);
      circle (xBolinha, yBolinha, diametro);
      xBolinha += velocidadexBolinha;
      yBolinha += velocidadeyBolinha;                          
  
  function draw() {
      background(0);
      mostraBolinha();
      movimentaBolinha();
      verificaColisaoBorda();
  }
  
  function mostraBolinha() {
      circle(xBolinha, yBolinha, diametro)
  }
    
  function verificacolisaoborda()  {}
        if (xBolinha + raio > width || xBolinha - raio < 0) {
           velocidadexBolinha *= -1;
        }
      if (yBolinha + raio > height || yBolinha -raio < 0) {
           velocidadeyBolinha *= -1;
        }
   }  