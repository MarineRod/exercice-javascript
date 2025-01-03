function initialiserDonnees(){
    let data = {"polluant":"CO2", "unite":"milliards de tonnes", "annee":2017, "pays":[{"nom":"Chine", "valeur":9.26, "pourcentage":28.2, "code":"cn"}, {"nom":"Etats-Unis", "valeur":4.76, "pourcentage":14.5, "code":"us"}, {"nom":"Inde", "valeur":2.16, "pourcentage":6.6, "code":"in"}, {"nom":"Russie", "valeur":1.54, "pourcentage":4.7, "code":"ru"}, {"nom":"Japon", "valeur":1.13, "pourcentage":3.4, "code":"jp"}, {"nom":"Allemagne", "valeur":0.72, "pourcentage":2.2, "code":"de"}, {"nom":"Corée du Sud", "valeur":0.6, "pourcentage":1.8, "code":"kr"}, {"nom":"Iran", "valeur":0.57, "pourcentage":1.7, "code":"ir"}, {"nom":"Canada", "valeur":0.55, "pourcentage":1.7, "code":"ca"}]}
    let listePays = document.querySelector("#listePays");
    let contenuHTML = `
    <table border="1">
        <thead>
            <tr>
                <th>Drapeau</th>
                <th>Pays</th>
                <th>Valeur (${data.unite})</th>
                <th>Pourcentage du total</th>
            </tr>
        </thead>
        <tbody>
`;

for(let i=0;i<data.pays.length;i++){
    let pays = data.pays[i];
    let drapeauUrl = "https://flagcdn.com/24x18/" + pays.code + ".png";
    contenuHTML += `
    <tr>
        <td><img src="${drapeauUrl}"></td>
        <td>${pays.nom}</td>
        <td>${pays.valeur}</td>
        <td>${pays.pourcentage}%</td>
    </tr>
`;
}

contenuHTML += `
</tbody>
</table>
`;

console.log(contenuHTML);
listePays.innerHTML  = contenuHTML;

}
     
          
