let personne = {
    nom : 'Beny',
    lieu : 'maison',
    argent : 10,
    mainDroite : [],
    mainGauche : [],
    sedeplacer(x){
        this.lieu = x
        console.log(`${this.nom } se déplace à ${this.lieu.nom}`);    
    },
    payerArticle(ingredients){
        this.argent = this.argent - ingredients.prix
        console.log(`${this.nom} paye ses article`);
    },
    couper(){
        console.log(`${this.nom} coupe ses ${this.ingredients} avec un ${this.outil}`);
    }
}

// personne.sedeplacer();

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
    personnes : [],
    paniers : [panier ={
        type : 'panier',
        contenu : [],
    }],
    ingredients : [oignon, oeuf, epice, fromage]
}
// class Lieu {
//     constructor(nom,personnes,panier) {
//         this.nom = nom;
//         this.personnes = personnes;
//         this.panier = panier;
//     }
// }


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
    melanger(nomMelange){
        let newMelange = {
            nomMelange: nomMelange,
            etat: 'pas cuit'
        }
        this.contenu = [newMelange]
    }
}
bol.melanger('omelette')
console.log(bol);

// OMELETTE

console.log(personne.nom + " est actuellement à la " + personne.lieu);
personne.sedeplacer(epicerie)
// console.log(personne.nom + " se déplace à l'" + epicerie.nom);

console.log(personne.nom + " récupère le " + panier.type +  " et le met dans sa main droite");
epicerie.paniers[panier.contenu.splice(0,1)]

personne.mainDroite.push(epicerie.paniers[0])
console.log(`${personne.nom} a pris un ${panier.type}`);

// epicerie.ingredient.forEach(el => {
//     personne.mainDroite[0].contenue.push(el);
//     console.log(`${personne.nom} a pris un ${el.nom}`);
// });

epicerie.ingredients.forEach(element => {
    personne.mainDroite[0].contenu.push(element);
    console.log(`${personne.nom} a pris un ${element.nom}`);
})

// console.log(personne.mainDroite);

personne.mainDroite[0].contenu.forEach(element => {
    personne.payerArticle(element)
});
console.log(personne.argent);

personne.sedeplacer(maison)

array.forEach(element => {
    
});