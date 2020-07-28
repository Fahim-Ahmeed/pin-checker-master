
function randomValue(){
    let display=document.getElementById('generate-display');
    let random=Math.random();
    let randomNumber=random*10000;
    let number=Math.round(randomNumber);
    display.value=number; 
  }
    // display.value=number;
    
 
//function for input button
document.getElementById('input-display').value='';
function inputDisplay(num){
    let display=document.getElementById('input-display').value;
    document.getElementById('input-display').value +=num;


}


document.getElementById('close-all').addEventListener('click',function(){
  display=document.getElementById('input-display').value;
let backspace=display.slice(0,display.length-display.length);
document.getElementById('input-display').value=backspace;
})

//function for close one
document.getElementById('one-close').addEventListener('click',function(){
display=document.getElementById('input-display').value;
let backspace=display.slice(0,display.length-1);
document.getElementById('input-display').value=backspace;
})

 



//pin checker
document.getElementById('submit-button').addEventListener('click',function(){
 let inputValue=document.getElementById('input-display').value;
 let generateValue=document.getElementById('generate-display').value;
  if(inputValue==generateValue){
    document.getElementById('success').style.display='block';
  }
  else{
    document.getElementById('failed').style.display='block';
  } 
})


