const hex = [0, 1, 2, 3, 4,
     5, 6, 7, 8, 9, "A", "B", 
"C", "D", "E", "F"]; //for creating random hex values
const button = document.getElementById('btn');
const colour = document.querySelector('.colour');

button.addEventListener('click', function(){
    let hexColor = '#';
    let hexValue = generateRandomNumber();
    for( let  i =0; i<6;i++){
        hexColor+=hex[hexValue];
        
    }
    colour.textContent=hexColor;
    document.body.style.backgroundColor=hexColor;
})
generateRandomNumber = () =>{
    const hexValue = Math.random() * hex.length;
    return Math.floor(hexValue); //converts floating point value of mulValue to whole number
}