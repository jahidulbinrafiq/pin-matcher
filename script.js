//Generate pin section
const randomnumber =document.getElementById('generatePin');
randomnumber.addEventListener('click',function(){
    let generateNumber= Math.floor(1000 + Math.random() * 9000);
    document.getElementById('randomNumberDisplay').value=generateNumber;   
});

function display(userInput){
   if(userInput==='C'){
    //clear all char at a time
    document.getElementById('userInputDisplay').value="";

   }else if(userInput=='<'){

    if(document.getElementById('userInputDisplay').value==""){
        swal("Input field is empty!", "...Nothing to remove")
    }
    else{
        //clear char one by one from right side
        let displayValue=document.getElementById('userInputDisplay');
        document.getElementById('userInputDisplay').value=displayValue.value.substring(0,displayValue.value.length-1)
         //str.substring(0,str.length-1)
    }
   }
   else{
    document.getElementById('userInputDisplay').value+=userInput;
   }  
}

const submit=document.getElementById('submit');
submit.addEventListener('click',function(){
    let displayValue=document.getElementById('userInputDisplay').value;
   
    if(displayValue==""){
        swal("Input field is empty");
        document.getElementById("notMatch").style.display='none';
        document.getElementById("match").style.display='none';
    }
    else{
        let randomNumber=document.getElementById('randomNumberDisplay').value;

        if(displayValue==randomNumber){
            document.getElementById("match").style.display='block';
            document.getElementById("notMatch").style.display='none';
        }else{
            displayProperty('notMatch','block');
            displayProperty('match','none')
           
    }
    }
  
})

function displayProperty(id,value){
    document.getElementById(id).style.display=value;
}