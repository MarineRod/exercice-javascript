function fonction(){
    return 33;
}

console.log(fonction);

let resultat = fonction();

console.log(resultat);

function chaine(prenom){
    console.log("Bonjour"+prenom);
}

chaine("Lulu");


function calcul(a,b){
    return a*b+a+b;
}

let calc = calcul(5,3);

console.log(calc);

function calcul(a,b){
    return a*b+a+b;
}

/*let calc2 = calcul("5","3");

console.log(calc2);*/




function verif(array){
    for(let i=0; i<array.length; i++){
        if (isNaN(array[i])){
           return false;
        }
    }
        return true
}



let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 =[1, 15, -3, 0, 8, 7, 'ola', -2, 'lolo', 7];
let array3 =[];

console.log(verif(array1));
console.log(verif(array2));
console.log(verif(array3));

function fonctionCalculs(array){

    if (isNaN(array)) {
        return console.log("Un élément du tableau n'est pas un nombre");
    }else{
        return false
    }

    if (array.length === 0) {
        return 0;  
    }

    let somme=0;
    for(let i=0; i<array.length; i++){
        somme+=array[i];
    }

    return somme/array.length;
}

console.log(fonctionCalculs(array1));
console.log(fonctionCalculs(array2));
console.log(fonctionCalculs(array3));


let nom1 ="ratatouille"
function chaineMajPremiereLettre (nom){
    let premiereLettre = nom.charAt(0).toUpperCase();  
    let resteChaine = nom.slice(1); 

    return premiereLettre+resteChaine
}

console.log(chaineMajPremiereLettre(nom1));


let phrase = "bonjour tout le monde"

function chaquePremiereLettreEnCapital (chaine){
    let mots =chaine.split(' ');
    for (let i = 0; i < mots.length; i++) {
        mots[i] = mots[i].charAt(0).toUpperCase() + mots[i].slice(1).toLowerCase();
}

return mots.join(' ');

}

console.log(chaquePremiereLettreEnCapital(phrase));

function calcul(n){
    return function fonct(nb){
        return nb*n;
    };
}

let calcul1 =calcul(5);
let calcul2 =calcul(3)

console.log(calcul1(2));
console.log(calcul2(3));