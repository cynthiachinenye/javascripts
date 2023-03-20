let stage = 0;

const form = document.querySelector("#form")
const form1= document.querySelector("#form1")
const form2= document.querySelector("#form2")

var next = document.querySelector('#btn')
.addEventListener("click", ()=>showNext());

var next = document.querySelector('#btn2')
.addEventListener("click", ()=>showNext());

var back = document.querySelector('#btn3')
.addEventListener("click", ()=>showNext());

form.style.display = 'none';
form1.style.display = 'none';
form2.style.display ='none';

function even(){
    if(stage === 0){
        form.style.display = "block"
        next.style.visibility="hidden"
    }
    if(stage === 1){
        form1.style.display = "block"
    }
    if(stage === 2)
    {
        form2.style.display = "block"
    }

        
}
even();
 function showNext (){
     
}
 console.log("form1");
    // stage +=1

/*const cap = () => {
    var userName = prompt("what is your name"); 
    var firstName= userName.slice(0,1).toUpperCase();
    var restOfName = userName.slice(1,userName.length);
     var capitalizedName= firstName + restOfName;
    alert("Hello" + " " +  capitalizedName);
}

cap()
var dogAge = prompt("How old is your dog");
var humanAge = ((dogAge-2)*4)+21;
alert("your dog is:" + " " + humanAge + " " + "years old in human age")*/       