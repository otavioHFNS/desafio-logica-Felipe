let SaldoRankeda = Partidas(100, )
let nivelHeroi

if(SaldoRankeda >=0){
    switch (true) {
        case (SaldoRankeda >= 0 && SaldoRankeda <= 10):
          nivelHeroi = "Ferro";
          break;
        case (SaldoRankeda >10) && (SaldoRankeda<=20):
          nivelHeroi = "Bronze"
          break;
        case (SaldoRankeda >20) && (SaldoRankeda<=50):
          nivelHeroi = "Prata"
          break;
        case (SaldoRankeda >50) && (SaldoRankeda<=80):
          nivelHeroi = "Ouro"
          break;
        case (SaldoRankeda >80) && (SaldoRankeda<=90):
          nivelHeroi = "Diamante"
          break;
        case (SaldoRankeda >90) && (SaldoRankeda<=100):
          nivelHeroi = "Lendário"
          break;
        case (SaldoRankeda >=101):
          nivelHeroi = "Imortal"
          break;   
      }
    console.log("O Herói tem o saldo de "+SaldoRankeda+" vitórias e está no nível "+nivelHeroi)
}
else{
    console.log("Por favor, tente novamente");
}

function Partidas(Vitorias = 0, Derrotas = 0) {   
    let saldoVitorias = Vitorias - Derrotas
    return saldoVitorias
}