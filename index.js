let text=document.getElementById('text');
let submit=document.getElementById('btn');
let one=document.getElementById('one');
let two=document.getElementById('two');

submit.addEventListener('click', function(){
    text.value=text.value.trim();
    if(text.value ===''){
        alert("Please Enter a Value"); 
        
    } 
    else{
    two.textContent=text.value;
    text.value='';
    }
    

                    
    
})