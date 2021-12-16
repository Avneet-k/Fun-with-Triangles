const angleInputs = document.querySelectorAll(".input-angle");
const btnAngle = document.querySelector("#btn-angle-check");
const outputAngle = document.querySelector("#angle-output")
const areaInputs = document.querySelectorAll(".input-area");
const btnArea = document.querySelector("#btn-area-check");
const outputArea = document.querySelector("#area-output");
const hypoInputs = document.querySelectorAll(".input-hypo");
const btnHypo = document.querySelector("#btn-hypo-check");
const outputHypo = document.querySelector("#hypo-output");
const quizForm = document.querySelector(".quiz-form");
const btnQuiz = document.querySelector("#btn-quiz");
const quizOutput = document.querySelector("#quiz-output");
const correctAnswers = ["90°","right angled","180","12,16,20","Isosceles","Equilateral","30°","Both","5cm","Scalene"];


// ----------------------------quiz page-------------------------

function calculateScore(){
    let score = 0;
    let index = 0;
    let formResults = new FormData(quizForm);
    for(let value of formResults.values()){ 
        console.log(value);
        if(value === correctAnswers[index]){
            score = score+1;
        }
        index = index + 1;
    }
    quizOutput.innerText = `Your Score is:  ${score}` ;     
}

btnQuiz.addEventListener("click", calculateScore);

// -------------------hypo page--------------------------
function calculateHypotenuse(a, b){
    // const triangleHypo = Math.sqrt(a * a + b * b).toFixed(2);
    const triangleHypo = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    return triangleHypo;
}
btnHypo.addEventListener("click", () =>{
    let length1  =  Number(hypoInputs[0].value);
    let length2 = Number(hypoInputs[1].value);
    if(length1 > 0 && length2 > 0){
        const triangleHypo = calculateHypotenuse(length1,length2);
        outputHypo.innerText = `Your Hypotenuse is:  ${triangleHypo}`
    }else{
        outputHypo.innerText = "Inputs should be greater than 0.";
    }
})

// --------------------area page-------------------------
function calculateArea(base , height){
    const triangleArea = 1/2 * base * height;
    return triangleArea;
}
btnArea.addEventListener("click", () =>{
    let baseB  =  Number(areaInputs[0].value);
    let heightH = Number(areaInputs[1].value);
    if(baseB >0 && heightH > 0){
        const triangleArea = calculateArea(baseB,heightH)
        console.log(triangleArea);
        outputArea.innerText = `Area of triangle is:  ${triangleArea}`;
    }else{
        outputArea.innerText = `Inputs should be greater than 0.`;
    }
})


//------------------------angle page------------------
function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}
btnAngle.addEventListener("click", () =>{
    let angleA = Number(angleInputs[0].value);
    let angleB = Number(angleInputs[1].value);
    let angleC = Number(angleInputs[2].value);
    if (
        angleA > 0 &&
        angleB > 0 &&
        angleC > 0
      ) {
        const sumOfAngles = calculateSumOfAngles(angleA,angleB,angleC);
        if(sumOfAngles === 180){
            outputAngle.innerText ="Yes! These angles make a triangle.";
        }else{
            outputAngle.innerText ="No, these angles cannot make a triangle";  
        }
    }else{
        outputAngle.innerText ="Values must be greater than 0.";  
    }
});