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

   }else if(userInput=='<' || userInput=='>'){

    let displayValue=document.getElementById('userInputDisplay');
    if(document.getElementById('userInputDisplay').value==""){
        swal("Input field is empty!", "...Nothing to remove")
        displayProperty('notMatch','none');
        displayProperty('match','none')
    }
    else if(userInput=='>'){
        //clear char one by one from left to right
        document.getElementById('userInputDisplay').value=displayValue.value.substring(1,displayValue.value.length)
         //str.substring(0,str.length)
    }
    else{
        //clear char one by one from right to left
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
    let randomNumber=document.getElementById('randomNumberDisplay').value;
   
    if((displayValue=="")||(randomNumber=="")){
        swal("Field is empty!", "..Check Input Field & Random Number Field")
        displayProperty('notMatch','none');
        displayProperty('match','none')
    }
    else{
        if(displayValue==randomNumber){
            displayProperty('match','block');
            displayProperty('notMatch','none');
        }else{
            displayProperty('notMatch','block');
            displayProperty('match','none')         
    }
    } 
})

function displayProperty(id,value){
    document.getElementById(id).style.display=value;
}
