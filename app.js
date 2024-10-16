const equalBtn = document.getElementById('equalBtn');
const deleteBtn = document.getElementById('deleteBtn');
const inputBox = document.getElementById('inputBox');
const clearBtn = document.getElementById('clearBtn');
 
const calculation = (e)=>{
    inputBox.value=inputBox.value+=e;
}

deleteBtn.onclick=()=>{
    inputBox.value="";
}

clearBtn.onclick=()=>{
    inputBox.value=inputBox.value.slice(0, -1)
}

equalBtn.onclick=()=>{
    if(inputBox.value){
    try{
        inputBox.value= eval(inputBox.value)
    }
    catch(error){
        console.log(error);
        alert('Invalid value');
    }
}
    else{
        alert('Please write something into input')
    }
}