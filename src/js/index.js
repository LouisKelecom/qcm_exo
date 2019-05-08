// Sélectionner les questions
const questions = document.getElementsByClassName("bloc2");
console.log(questions[1]);


// Sélectionner le bouton
const validerBtn = document.getElementById("btnAdd");
console.log(validerBtn);


// Sélectionner les inputs des différentes questions
let inputsQuestion1 = document.getElementsByClassName("exampleRadios1");
let inputsQuestion2 = document.getElementsByClassName("exampleRadios2");
let inputsQuestion3 = document.getElementsByClassName("exampleRadios3");
let inputsQuestion4 = document.getElementsByClassName("exampleRadios4");
let inputsQuestion5 = document.getElementsByClassName("exampleRadios5");

console.log(inputsQuestion1[2]);

// Sélectionner toutes les réponses correctes
let reponses = {
    question1: inputsQuestion1[2],
    question2: inputsQuestion2[0],
    question3: inputsQuestion3[3],
    question4: inputsQuestion4[0],
    question5: inputsQuestion5[1],
}

console.log(reponses.question1)

// Créer le bouton Recommencer
const recommencerBtn = document.createElement("button");
recommencerBtn.innerText = "Recommencer";
recommencerBtn.classList.add("btn", "mt-1", "mb-3");
const divBtn = document.getElementsByClassName("justify-content-center")[0];

// Bouton valider

validerBtn.addEventListener("click", () => {

    isCheck(inputsQuestion1[2], 0);
    isCheck(inputsQuestion2[0], 1);
    isCheck(inputsQuestion3[3], 2);
    isCheck(inputsQuestion4[0], 3);
    isCheck(inputsQuestion5[1], 4);

    // Faire disparaître le bouton ajouter
    validerBtn.classList.add("d-none");

    // Faire apparaître le bouton recommencer
    divBtn.appendChild(recommencerBtn);

    // Lancer la fonction résultat
    resultat();

});

let score = 0; // déclarer le score de départ à 0

// Fonction pour faire apparaître le bonnes réponses et les mauvaises réponses
const isCheck = (inputsQ, blocNbr) => {
    if (inputsQ.checked) {
        questions[blocNbr].classList.add("bg-success");
        score ++; // incrémenter le score pour toutes les bonnes réponses
    } else {
        questions[blocNbr].classList.add("bg-danger");
    }

};

// Bouton Recommencer
recommencerBtn.addEventListener("click", () => {
    location.reload();
});

// Fonction résultat
const resultat = () => {
    if(score === 5) {
        alert(`Vous avez eu ${score} sur 5, Bravo !`);
    } else if (score === 0) {
        alert(`Vous avez eu ${score} sur 5, révisez le DOM avant de réessayer!`);
    } else {
        alert(`Vous avez eu ${score} sur 5, réessayez jusqu'à ce que vous fassiez un sans-faute!`);
    }
}
