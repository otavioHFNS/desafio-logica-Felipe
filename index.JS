let nomeHeroi = "Otávio";
let nivelXp=30000;
let classificador
if(nivelXp<1000){
    classificador = "Ferro"
} else if( (nivelXp >1001) && (nivelXp<=2000)){
    classificador = "Bronze"
} else if( (nivelXp >2001) && (nivelXp<=5000)){
    classificador = "Prata"
} else if( (nivelXp >5001) && (nivelXp<=7000)){
    classificador = "Ouro"
} else if( (nivelXp >7001) && (nivelXp<=8000)){
    classificador = "Platina"
} else if( (nivelXp >8001) && (nivelXp<=9000)){
    classificador = "Ascendente"
} else if( (nivelXp >9001) && (nivelXp<=1000)){
    classificador = "Imortal"
} else if(nivelXp =>1001){
    classificador = "Radiante"
}

console.log("O Heroi " + nomeHeroi + " está no nível de "+classificador);