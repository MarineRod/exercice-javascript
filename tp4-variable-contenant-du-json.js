let entreprise ={
    nom:"Google",
    siege_social:"Googleplex, Mountain View, California, United States",

    fondateurs: [
    {
      Nom: "Larry Page",
      Date_de_naissance: "1973-03-26",
      Lieu_de_naissance: "East Lansing, Michigan"
    },
    {
      Nom: "Sergey Brin",
      Date_de_naissance: "1973-08-21",
      Lieu_de_naissance: "Moscou, Union Soviétique"
    }
  ],

  chiffres:[
    {"2008": 16.49},
    {"2012": 37.97},
    {"2016": 89.46},
    {"2018": 136.2}
]
}

console.log(entreprise);

for(let i=0; i<entreprise.fondateurs.length; i++){
    console.log(entreprise.fondateurs[i]);
}

