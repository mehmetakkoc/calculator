// variables

const displayBottom = document.querySelector(".display-bottom");
const displayTop = document.querySelector(".display-top");
const acBtn = document.querySelector("#ac");
const plusMinus = document.querySelector("#plus-minus");
const modulus = document.querySelector("#modulus");
const numbers = document.querySelectorAll("#numbers");
// console.log(numbers);
const comma = document.querySelector("#comma");
const totalButon = document.getElementsByTagName("button");
// console.log(totalButon);

const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const extraction = document.querySelector("#extraction");
const addition = document.querySelector("#addition");
const equal = document.querySelector("#equal");

// functions
let commaStatus = true;

for (let i = 0; i < totalButon.length; i++) {
  const numberDisplay = totalButon[i];
  //   console.log(totalButon[i]);
  numberDisplay.addEventListener("click", () => {
    if (totalButon[i].id == "ac") {
      displayBottom.textContent = " ";
    } else if (totalButon[i].id == "plus-minus") {
      displayBottom.textContent = 0 - displayBottom.textContent;
    } else if (
      totalButon[i].id == "modulus" ||
      totalButon[i].id == "division" ||
      totalButon[i].id == "multiplication" ||
      totalButon[i].id == "extraction" ||
      totalButon[i].id == "addition"
    ) {
      if (isNaN(displayBottom.textContent.slice(-1))) {
        displayBottom.textContent = displayBottom.textContent.slice(0, -1);
      }
    } else if (totalButon[i].id == "comma") {
      if (
        displayBottom.textContent.slice(-1) == "+" ||
        displayBottom.textContent.slice(-1) == "-" ||
        displayBottom.textContent.slice(-1) == "*" ||
        displayBottom.textContent.slice(-1) == "/" ||
        displayBottom.textContent.slice(-1) == "%"
      ) {
        displayBottom.textContent += "0.";
      } else {
        displayBottom.textContent += ".";
      }
    } else if (totalButon[i].id == "equal") {
      displayTop.textContent = displayBottom.textContent;
      displayBottom.textContent = eval(displayBottom.textContent);
    } else if (displayBottom.textContent[0] == "0") {
      displayBottom.textContent = displayBottom.textContent.substring(1);
    }

    displayBottom.textContent += totalButon[i].textContent;
  });
}

// totalButon.addEventListener("click", () => {
//     console.log("object");
// })

// if (displayBottom.textContent[0] == 0){

// }

//

// const getValueAsStr = () => displayBottom.textContent.split(",").join("");



