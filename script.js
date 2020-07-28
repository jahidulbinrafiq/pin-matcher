const randomnumber =document.getElementById('generatePin');
randomnumber.addEventListener('click',function(){
    let generateNumber= Math.floor(1000 + Math.random() * 9000);
    document.getElementById('randomNumberDisplay').value=generateNumber;
});
