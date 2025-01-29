const target = document.getElementById("target");
const Array = ["développeur", "photographe", "créatif", "informaticien"];
let wordIndex = 0;
let letterIndex = 0;
// target.textContent = Array[0][0];
const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent = Array[wordIndex][letterIndex];
  setInterval(() => {
    letter.remove();
  }, 2800);
};
// createLetter();
// setInterval(() => {
//   createLetter();
//   letterIndex++;
// }, 200);

const loop = () => {
  setTimeout(() => {
    // if (wordIndex < Array.length) {
    //   if (letterIndex < Array[wordIndex].length) {
    //     createLetter();
    //     letterIndex++;
    //     loop();
    //   } else {
    //     wordIndex++;
    //     letterIndex = 0;
    //     setTimeout(() => {
    //       loop();
    //     }, 2800);
    //   }
    // } else {
    //   wordIndex = 0;
    //   letterIndex = 0;
    //   loop();
    // }
    ////   ou faire la condition comme ceci
    if (wordIndex >= Array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < Array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
    //   ======
  }, 60);
};
loop();
