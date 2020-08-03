
function randomValue(){
    let display=document.getElementById('generate-display');
    let random=Math.random();
    let randomNumber=random*(9999-1000);
    let number=Math.ceil(randomNumber)+1000;
    display.value=number;
    document.getElementById('input-display').value='';
    document.getElementById('success').style.display='none';
    document.getElementById('failed').style.display='none';
    
}
    
 
//function for input button
document.getElementById('input-display').value='';
function inputDisplay(num){
    // let display=document.getElementById('input-display').value;
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
  if(inputValue=='' || inputValue.length<4){
     alert('please press 4 digit value');
  }
  else if(inputValue!=generateValue){
    if(inputValue!=generateValue){
      document.getElementById('failed').style.display='block';
    }
  }
  else{
    document.getElementById('success').style.display='block';
  }
 
})

