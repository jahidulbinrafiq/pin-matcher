//Generate pin section
const randomnumber =document.getElementById('generatePin');
randomnumber.addEventListener('click',function(){
    let generateNumber= Math.floor(1000 + Math.random() * 9000);
    document.getElementById('randomNumberDisplay').value=generateNumber;   
});

function display(userInput){
   if(userInput==='C'){
    document.getElementById('userInputDisplay').value="";
   }else if(userInput=='<'){
    let displayValue=document.getElementById('userInputDisplay');
    document.getElementById('userInputDisplay').value=displayValue.value.substring(0,displayValue.value.length-1)
   }
   else{
    document.getElementById('userInputDisplay').value+=userInput;
   }  
}
