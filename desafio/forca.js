class Forca {

  constructor(palavraSecreta){
    this.vidas = 6;
    this.palavra = palavraSecreta.split("");
    this.estado = 'aguardando chute'
    this.letrasChutadas = [];
    this.palavraCodificada = this.palavra.map(() => ("_"));
  }

  chutar(chute) { 
    let palavraCodificada = this.palavraCodificada;
    let palavra = this.palavra;
    let letrasChutadas = this.letrasChutadas;
    if ((chute.length == 1) && (!letrasChutadas.find(letra => letra == chute))){
      letrasChutadas.push(chute);
      !palavra.includes(chute) ? this.vidas -= 1 : palavra.findIndex((letra,index) => {
       if (chute === letra) palavraCodificada[index] = letra});
    };
  };

  buscarEstado() {
    if (this.vidas === 0) this.estado =("perdeu");
    if (this.palavraCodificada.join("") === this.palavra.join("")) this.estado=("ganhou");
    return this.estado;
  }; // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavraCodificada,// Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas  
      };
  };
};
module.exports = Forca;
