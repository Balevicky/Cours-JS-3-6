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

// =======================
// Les méthodes string
// =======================
let string2 = "Javascript est un langage orienté objet";
// // typeof= permet determiner le type de la variable
// console.log(typeof string2);
// // parseInt: permet de convertir chaine de caractère en numerique
// console.log(parseInt("1"));
// console.log(eval(parseInt("1")+2));// Eval permet de faire la somme des nombre
// console.log(string2.length);
// console.log(string2[string2.length - 1]); // permet de determiner la  derniere cacactere de string2
// console.log(string2.indexOf("langage"));
// console.log(string2.indexOf("x"));// il retourne -1 s"il ne trouve pas l'élément
let newString = string2.slice(2, 5); //slice= permet recuperer les chaine de caractère entre les index 2 et 5;
// console.log(newString);// resulat= vas

// console.log(string2.split(" "));//split= permet de couper les mot et les ranger dans un tableau
// console.log(string2.toLowerCase());//toLowerCas= mettre en minuscule
// console.log(string2.toUpperCase());//toLowerCas= mettre en majuscule
// console.log(string2.replace("Javascript","PHP"));//replace= permet de remplacer les chaines de caractères

// =======================
// Les méthodes NUMBERS
// =======================
let number2 = 42.123;
let numberString = " 42.12 est un chiffre 56";
// console.log(number2.toFixed(1));//toFixed= permet de fixer le nomnbre après virgule
// console.log(parseInt("43"));//parseInt=transforme les chiffre de type sting en type numer
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// ---------- Math
// console.log(Math.PI);
// console.log(Math.round(4.5));
// console.log(Math.floor(4.5));
// console.log(Math.ceil(4.1));
// console.log(Math.pow(4,2));

// console.log(Math.random());//random=donne les nombre entre 0 et 1;
// console.log(Math.random()*50);
// console.log(Math.floor(Math.random() * 50));

// =======================
// Les méthodes arrays
// =======================
let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];
let arrayA = ["Windev", "Java"];
let arrayB = ["Windev", "Windev"];
let newArray = array3.concat(array4); //concat = permet de concaner les deux tableau
// let newArray = [...array3, ...array4, ...arrayA];//concat = permet de concaner les tableaux
// console.log(newArray);

// console.log(array3.join("-"));

// console.log(array3.slice(1));
// console.log(array3.slice(2,5));
// console.log(array3.indexOf("Javascript"));

array3.forEach((languges) => {
  // console.log(languges);
}); // permert d'enumerer tous les elements d'un tableau

// console.log(arrayB.every((languge)=> languge==="Windev"));// every= permet de verifier si l'element est identique dans le tableau

// let shift = array3.shift();
// console.log(shift);// shift= permet de retirer le premier element du tableau
// console.log(array3);

// console.log(array3.pop());// shift= permet de retirer le dermier element du tableau
// console.log(array3);
// const restArray = array3.splice(0,1, "C++");
// console.log(restArray);
// console.log(array3);

// ======================
// IMPORTANT
// ======================
let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y))//reduce= faire les calcul des elements;
arrayNumber.push(17); //push = permet d'ajouter un element dans un tableau
// console.log(arrayNumber);

// -----------
// FILTER= filter, SORT= trier, MAP
// -----------
// ====== Filter
// console.log(arrayNumber.filter((number) => number>10));
// console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => a - b));
// ====== sort
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a,b) => a-b));
// console.log(arrayNumber.sort((a,b) => b-a));

// ====== MAP
// arrayNumber.map((number) => console.log(number));
// arrayNumber.map((number) => (document.body.innerHTML += `
//   <li>${number}</li>
//   `));
// document.body.innerHTML += arrayNumber
//   .map((number) => `<li>${number}</li>`)
//   .join("");

// =======================
// Les méthodes des Objets
// =======================
//// let backg = document.querySelector(".user-card");
// //console.log(backg);

document.body.innerHTML += data
  .filter((user) => user.pseudo.includes("i"))
  .filter((user) => user.admin === false)
  .sort((a, b) => a.age - b.age)
  .map(
    (user) =>
      `
    <div class="user-card">
  <h2> ${user.pseudo}</h2>
  <p>Age: ${user.age} </p>
  <p> Admin: ${user.admin ? "Moderateur" : "Membre"}</p>
  
  </div>
  `
  )
  .join("");

// =======================
// Les dates
// =======================
////=========== Date classique
let date = new Date();
// console.log(date);
// // Timestamp= le temps ecoulé depuis 1970 jusqu'à la date d"aujourd'hui en secondes;
let Timestamp = Date.parse(date);
// console.log(Timestamp);
// // Isotring
let iso = date.toISOString();
// console.log(iso);

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    // month: "long",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return newDate;
}
// console.log(dateParser(date));
// console.log(dateParser(Timestamp));
// console.log(dateParser(iso));

// =======================
// Destructuring
// =======================
let moreData = {
  destVar: ["Element 1", "Element 2"],
};
const { destVar } = moreData; //cela equivaut à moreData.destVa: appélé destructuration
// console.log(moreData.destVar);
// console.log(destVar);
let array5 = [70, 80, 90];
let [x, y, z] = array5;
// console.log(x);
// console.log(y);
// console.log(z);

//// on va voir un exemple avec l'heure
const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};
console.log(dateDestructuring(iso));

// =======================
// Les Datasets
// =======================
