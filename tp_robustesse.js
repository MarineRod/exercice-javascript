/*function calcul(a,b){
    if(!a||!b ){
        throw "vous devez fournir 2 paramètres";
    }
    return a*b+a+b;
}

let calc = calcul(5);

console.log(calc);*/

/*function calcul(a,b){
    if(typeof a!=='number'||typeof b !== 'number'){
        throw "vous devez fournir 2 paramètres";
    }
    return a*b+a+b;
}

let calc2 = calcul(5,'3');

console.log(calc2);*/

let array1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, '14', -4];

function fonctionCalculs(array){

    if (!Array.isArray(array)) {
        throw "le paramètre fourni n'est pas un tableau";
    }
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            throw "Un élément du tableau n'est pas un nombre";
        }
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

try{
    console.log(fonctionCalculs(array2))
}

catch(e){
    console.log(`ERREUR: ${e}`)
}

