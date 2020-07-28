//Generate pin section
const randomnumber =document.getElementById('generatePin');
randomnumber.addEventListener('click',function(){
    let generateNumber= Math.floor(1000 + Math.random() * 9000);
    document.getElementById('randomNumberDisplay').value=generateNumber;   
});

function display(userInput){
   if(userInput==='C'){
    document.getElementById('userInputDisplay').value="";
   }
   else{
    document.getElementById('userInputDisplay').value+=userInput;
   }
       
}
function remove(){
    console.log(1);
}
