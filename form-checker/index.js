// alert("yes");
const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  "input[type=text], input[type=password]"
);
const progressBar = document.getElementById("progress-bar");
let pseudo, email, password, confirmPass;

// =========
const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container>span");
  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};
// =========
const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir les caractères speciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};
// =========
const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};
// =========
const passwordChecker = (value) => {
  progressBar.classList = "";
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay(
      "password",
      "Minimum de 8 caractères, une majuscule, un chiffre et un carctère spécial "
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    errorDisplay("password", "", true);
    password = value;
    // console.log(password);
  } else {
    progressBar.classList.add("progressGreen");
    errorDisplay("password", "", true);
    password = value;
  }
  if (confirmPass) confirmChecker(confirmPass); // egale à ce  if ci-dessous

  // if (confirmPass) {
  //   confirmChecker(confirmPass);
  // }
};
// =========

const confirmChecker = (value) => {
  // console.log(confirm);
  if (value !== password) {
    errorDisplay("confirm", "Les mots de passe ne correspondent pas");
    confirmPass = false;
  } else {
    // console.log("ok");
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    // console.log(e.target.id);

    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;

      case "email":
        emailChecker(e.target.value);
        break;

      case "password":
        passwordChecker(e.target.value);
        break;

      case "confirm":
        confirmChecker(e.target.value);
        break;

      default:
        null;

        break;
    }
  });
});
//==================
// ENVOYER LE FORMULAIRE
//==================
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (pseudo && email && password && confirmPass) {
    const data = {
      // on peut faire cettte forme de saisie ou celle ci-dessous mit en commentaire;
      pseudo,
      email,
      password,
      // cet
      // pseudo: pseudo,
      // email: email,
      // password: password,
    };
    console.log(data);
    // pour vider les champs de saisie
    inputs.forEach((input) => (input.value = ""));
    progressBar.classList = "";
    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;

    alert("Inscription validée");
  } else {
    alert("Veuillez remplir correctement les champs");
  }
});
