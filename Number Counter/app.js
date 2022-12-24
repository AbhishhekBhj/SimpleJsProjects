// initial count
let initialCount =0;

const numVal = document.querySelector("#numval");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button){
button.addEventListener('click', function(bt){
    const classes =(bt.currentTarget.classList); // gives all the classes of the button clicked
    if(classes.contains("decrease-btn")){
        initialCount--;
    }
    else if(classes.contains("increase-btn")){
        initialCount++;
    }
    else{
        initialCount=0;
    }
    numVal.textContent=initialCount;
    colorShifter()

})
 let colorShifter = ()=>{
    
if(initialCount>0){
    numVal.style.color='red';
}
if(initialCount == 0){
    numVal.style.color='blue';
}
if(initialCount<0){
    numVal.style.color='green';
}
}
})