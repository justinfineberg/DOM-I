const startButton = document.querySelector('.start')
const resetButton = document.querySelector('.reset')
const msTens = document.getElementById('msTens')

startButton.addEventListener('click', goFunction);
// resetButton.addEventListener('click', endFunction);


function goFunction(){
    setInterval(function(){
        let sum = 1;
        msTens.textContent = sum;
        sum++;
        console.log(sum)
    }, 1000);
}