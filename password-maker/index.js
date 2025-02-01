const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toLocaleUpperCase();
const dataNumer = "0123456789";
const dataSymbols = "$^*ùm!:;,&é\"'(-è_çà)";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

// //=================================
// //fonction flechée
// generateButton.addEventListener("click", () => {
//   generatePassword();
// });
// //=========================
function generatePassword() {
  let data = [];
  let password = "";
  // // ==================
  // // utilisation de if ternaire
  // // ==================
  // lowercase.checked ? data.push(dataLowercase) : "pas de donnés";
  // uppercase.checked ? data.push(dataUppercase) : "pas de donnés";
  // numbers.checked ? data.push(dataNumer) : "pas de donnés";
  // symbols.checked ? data.push(dataSymbols) : "pas de donnés";
  // // ==================
  // // FIN utilisation de if ternaire
  // // ==================

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumer);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;
  passwordOutput.select();
  // document.execCommand("copy");
  navigator.clipboard.writeText(passwordOutput.value);
  // alert("Copied the text: " + passwordOutput.value);
  generateButton.textContent = "Copié";
  setTimeout(() => {
    generateButton.textContent = "Générateur de mot de passe";
  }, 2000);
}
generateButton.addEventListener("click", generatePassword);
