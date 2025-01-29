//rapel des types de donnée
let string = "chaine";
let number = 124;
let boolean = true;
let maVariable; // type =undifine
// // typeof permet de voir le type de donnée
// console.log(typeof number);
// =============== Tableau
let array = ["bordeu", "Toulouse", "Nates"];
// console.log(array);
// console.log(array[1]); //  donne Toulouse
// console.log(array[1][3]); //  donne la lettre l du mot Toulouse
let array2 = ["Bourdeau", 24, true, [1, 2, 5], { nom: "Goli" }];
// console.log(array2[4].nom); // affiche Goli
// console.log(array2[3][1]); // affiche 2 du tableau [1, 2, 5]
// ================== Objet
let objet = {
  pseudo: "Goli",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};
// console.log(objet.pseudo); // affiche Goli
// console.log(objet.pseudo + " a", objet.age + " ans"); // affiche Goli a 33 ans
// console.log(objet.technos[1]); // affiche React
// // ajouter une addresse à l'Objet
// objet.address = "BP 14 ABidjan 23";
// console.log(objet);
let data = [
  {
    pseudo: "Goli",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "samira",
    age: 24,
    technos: ["css", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nicola",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];
// console.log(data[1].pseudo); //affiche Samira
// console.log(data[1].technos[0]); //affiche Css

// =======================
// Les structures de contrôle
// =======================

//========= IF
if (data[0].age > data[1].age) {
  //   console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // console.log(data[1].pseudo + " est plus agé que " + data[0].pseudo);
}
// on peut ecrire aussi comme suit si c'est une seulle condition sans utiliser l'accolade
if (data[0].age > data[1].age)
  //   console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
  // on peut aussi ecrire le if comme suit
  data[1].age > data[0].age ? "vrai" : "FAUX";
//------------------
//   ======== while= tant que
let w = 0;
while (w < 10) {
  w++;
  //   console.log("La valeur de w est de : " + w);
}
//======== do while=  fqire tant que
let d = 0;
do {
  d++;
  // console.log(d);
} while (d < 5);

//======== les boucle FOR= pour
for (const user of data) {
  // document.body.innerHTML += `
  //   <li> ${user.pseudo} - ${user.age} ans</li>
  //    `;
}
// ---------- autre façon de faire la bloucle FOR
// ---- on declare la valeur de i , jusqu'à la valeur Max, et on increment
// --- data.length= le nbre d"elemens dans le tableau data

for (i = 0; i < data.length; i++) {
  // console.log(data[i].pseudo, data[i].age);
  // document.body.innerHTML += `<li>${data[i].pseudo} - ${data[i].age} </li>
  // `;
}
// ========== boucle switch
document.body.addEventListener("click", (e) => {
  console.log(e.target.id);
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;

    case "php":
      document.body.style.background = "violet";
      break;

    case "python":
      document.body.style.background = "blue";
      break;

    default:
      null;
      break;
  }
});
