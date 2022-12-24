const colors = ["green", "red", "rgba(133,122,200)", "#f15025","#DFD3C3","#FCFFE7"];
const button = document.getElementById('btn');
const colour = document.querySelector('.colour');

button.addEventListener('click', function(){
//get a random number between 0-5 to acess colors from colors array
const randomColour = generateRandomNumber();
document.body.style.backgroundColor = colors[randomColour]; // accesing the value for the background color from the above array's indices
colour.textContent=colors[randomColour];


})

generateRandomNumber = () =>{
    const mulValue = Math.random() * colors.length;
    return Math.floor(mulValue); //converts floating point value of mulValue to whole number
}