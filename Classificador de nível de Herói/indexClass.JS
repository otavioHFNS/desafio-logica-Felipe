let nomeHeroi = "Otávio";
let nivelXp=7000;
let classificador;
if(nivelXp>=0){
switch (true) {
  case (nivelXp >= 0 && nivelXp <= 1000):
    classificador = "Ferro";
    break;
  case (nivelXp >1001) && (nivelXp<=2000):
    classificador = "Bronze"
    break;
  case (nivelXp >2001) && (nivelXp<=5000):
    classificador = "Prata"
    break;
  case (nivelXp >5001) && (nivelXp<=7000):
    classificador = "Ouro"
    break;
  case (nivelXp >7001) && (nivelXp<=8000):
    classificador = "Platina"
    console.log("Platina")
    break;
  case (nivelXp >8001) && (nivelXp<=9000):
    classificador = "Ascendente"
    break;
  case (nivelXp >9001) && (nivelXp<=10000):
    classificador = "Imortal"
    break;
  case (nivelXp >= 10001):
    classificador = "Radiante"
    break;    
}
console.log("O Heroi " + nomeHeroi + " está no nível de "+classificador);}

else{
    console.log("Por favor, reiniciar o jogo");
}