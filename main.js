const generateBtn = document.querySelector("button");
const adviceNo = document.querySelector("#advice-number");
const advice = document.querySelector("#advice");

generateBtn.onclick = () => {
    generateAdvice()
};

generateAdvice();

function generateAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        adviceNo.textContent = data.slip.id;
        advice.textContent = data.slip.advice;
    })
    .catch((error) => {
        console.error('Error fetching advice:', error);
    });
}