let personne = {
    nom : 'Beny',
    lieu : 'maison',
    argent : 100,
    mainDroite : [],
    mainGauche : [],
    sedeplacer(){
        // console.log(`${this.nom1 } se déplace à ${this.lieu}`);    
    },
    payerArticle(){
        // console.log(`${this.nom1} paye ses article`);
    },
    couper(){
        // console.log(`${this.nom1} coupe ses ${this.ingredients} avec un ${this.outil}`);
    }
}

personne.sedeplacer();

let maison = {
    nom : 'maison',
    personnes : [],
}


let outil = {
    nom : 'couteau',
    action : "coupé"
}

class Ingredients {
    constructor(nom,etat,prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    };
}
let oignon = new Ingredients('oignon', 'entier', 1)
let oeuf = new Ingredients('oeuf', 'entier', 2.50 )
let epice = new Ingredients('epice', 'moulu', 0.75)
let fromage = new Ingredients('fromage', 'coupé', 0.65)

let epicerie = {
    nom : 'epicerie',
    nom : [],
    personnes : [],
    paniers : [],
}
// class Lieu {
//     constructor(nom,personnes,panier) {
//         this.nom = nom;
//         this.personnes = personnes;
//         this.panier = panier;
//     }
// }
let paniers = [panier ={
    type : 'panier',
    contenue : [],
}]

let ingredients = ['oignon', 'oeuf', 'epice', 'fromage']

let poele = {
    contenue : [0],
    cuir() {
        setTimeout(()=> {
            if (this.contenue[0] == 0) {
                console.log('cuit');
            }
        }, 4000)
    }
}
poele.cuir()


let bol = {
    contenu: [],
    melanger(nomMelange, etat){
        etat = etat;
        let newMelange = {
            nomMelange: nomMelange,
            etat: 'pas cuit'
        }
        this.contenu.push(newMelange)
    }
}

console.log(bol);
bol.melanger('oeuf');

console.log(personne.nom + "est actuellement");