class HeroiAventura{
	constructor(nameHeroi,ageHeroi,tipoHeroi){
    	this.nameHeroi = nameHeroi
        this.ageHeroi = ageHeroi
        this.tipoHeroi = tipoHeroi
    }
    atacar(){
        if(this.ageHeroi>=0){
            switch (true) {
            case (this.tipoHeroi == "mago"):
                console.log(`O ${this.tipoHeroi} atacou usando magia`);
                break;
            case (this.tipoHeroi == "guerreiro"):
                console.log(`O ${this.tipoHeroi} atacou usando espada`);
                break;
            case (this.tipoHeroi == "monge"):
                console.log(`O ${this.tipoHeroi} atacou usando artes marciais`);
                break;
            case (this.tipoHeroi == "ninja"):
                console.log(`O ${this.tipoHeroi} atacou usando shuriken`);
                break;
                default:
                console.log(`Tipo de herói "${this.tipoHeroi}" não é válido. Por favor, escolha entre "mago", "guerreiro", "monge", ou "ninja".`);    
            }
        }    
            else{
                console.log("Por favor, verifique se a idade foi inseridade corretamente");
            }
    }
}
let user001 = new HeroiAventura("Otávio Henrique",0,"xx")
user001.atacar()