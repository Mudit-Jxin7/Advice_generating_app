const resDiv = document.querySelector('#result')
const resBtn = document.querySelector('#getData')
const resAdvice = document.querySelector('#advice')

resBtn.addEventListener('click' , () =>{
    getAdvice();
})

window.onload = () =>{
    getAdvice();
}

function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json()
    }).then(adviceData => {
        const adviceObject = adviceData.slip
        resDiv.innerHTML = adviceObject.advice;
        resAdvice.innerHTML = 'ADVICE #'+adviceObject.id; 

    }).catch(error => {
        console.log(error)
    })
}
